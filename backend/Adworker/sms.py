# Sending SMS through a provider (Twilio, Infobip), or in test mode.
#
# Which provider is used is set on the server, never in the code, so keys don't go to GitHub:
#
#   SMS_PROVIDER        test (default) | twilio | infobip
#   SMS_COUNTRY_CODE    255 (default): 0712 345 678 -> +255712345678
#   SMS_PUBLIC_URL      the address the internet reaches this server on, e.g. https://api.aleco.co.tz
#                       (needed for delivery reports and replies; leave empty on a laptop)
#   SMS_WEBHOOK_KEY     a secret word Infobip must send back with replies (?key=...)
#
#   Twilio:   TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN, TWILIO_FROM (a Twilio number, or a sender name)
#   Infobip:  INFOBIP_BASE_URL (e.g. https://xxxxx.api.infobip.com), INFOBIP_API_KEY, INFOBIP_FROM
#
# In test mode nothing leaves the computer: the message is saved with status "test".

import os
import re
import hmac
import base64
import hashlib

import requests


def setting(name, default=''):
    return os.environ.get(name, default).strip()


def provider_name():
    name = setting('SMS_PROVIDER', 'test').lower()
    if name not in ('test', 'twilio', 'infobip'):
        return 'test'
    return name


# what is missing before the chosen provider can send
def missing_settings():
    name = provider_name()
    needed = []
    if name == 'twilio':
        needed = ['TWILIO_ACCOUNT_SID', 'TWILIO_AUTH_TOKEN', 'TWILIO_FROM']
    if name == 'infobip':
        needed = ['INFOBIP_BASE_URL', 'INFOBIP_API_KEY', 'INFOBIP_FROM']
    missing = []
    for key in needed:
        if setting(key) == '':
            missing.append(key)
    return missing


# what the dashboard may know about the setup (never the keys)
def status():
    name = provider_name()
    sender = ''
    if name == 'twilio':
        sender = setting('TWILIO_FROM')
    if name == 'infobip':
        sender = setting('INFOBIP_FROM')
    missing = missing_settings()
    return {
        'provider': name,
        'live': name != 'test' and len(missing) == 0,
        'sender': sender,
        'missing': missing,
        'replies': setting('SMS_PUBLIC_URL') != '',
    }


# "0712 345 678" -> "+255712345678". Returns '' when the number can't be a phone.
def normalize_phone(phone):
    raw = str(phone or '').strip()
    digits = re.sub(r'[^0-9]', '', raw)
    if digits == '':
        return ''
    country = setting('SMS_COUNTRY_CODE', '255')
    if raw.startswith('+'):
        full = digits
    elif digits.startswith('00'):
        full = digits[2:]
    elif digits.startswith('0'):
        full = country + digits[1:]
    elif digits.startswith(country):
        full = digits
    elif len(digits) == 9:
        full = country + digits
    else:
        full = digits
    # an international number has 10 to 15 digits
    if len(full) < 10 or len(full) > 15:
        return ''
    return '+' + full


# Sends one SMS. Returns (status, provider_id, error).
def send(phone, body):
    name = provider_name()
    if name == 'test':
        return ('test', '', '')

    missing = missing_settings()
    if len(missing) > 0:
        return ('failed', '', 'Missing settings: ' + ', '.join(missing))

    try:
        if name == 'twilio':
            return send_twilio(phone, body)
        return send_infobip(phone, body)
    except requests.RequestException as e:
        return ('failed', '', 'Could not reach ' + name + ': ' + str(e)[:200])


def send_twilio(phone, body):
    sid = setting('TWILIO_ACCOUNT_SID')
    data = {'To': phone, 'From': setting('TWILIO_FROM'), 'Body': body}
    public = setting('SMS_PUBLIC_URL')
    if public != '':
        data['StatusCallback'] = public.rstrip('/') + '/api/Adworker/sms/webhook/twilio/'
    res = requests.post(
        'https://api.twilio.com/2010-04-01/Accounts/' + sid + '/Messages.json',
        data=data, auth=(sid, setting('TWILIO_AUTH_TOKEN')), timeout=15)
    answer = safe_json(res)
    if res.status_code >= 300:
        return ('failed', '', 'Twilio: ' + str(answer.get('message', res.text))[:300])
    return ('sent', str(answer.get('sid', '')), '')


def send_infobip(phone, body):
    message = {'destinations': [{'to': phone.lstrip('+')}], 'from': setting('INFOBIP_FROM'), 'text': body}
    public = setting('SMS_PUBLIC_URL')
    if public != '':
        message['notifyUrl'] = public.rstrip('/') + '/api/Adworker/sms/webhook/infobip/?key=' + setting('SMS_WEBHOOK_KEY')
        message['notifyContentType'] = 'application/json'
    res = requests.post(
        setting('INFOBIP_BASE_URL').rstrip('/') + '/sms/2/text/advanced',
        json={'messages': [message]},
        headers={'Authorization': 'App ' + setting('INFOBIP_API_KEY'), 'Accept': 'application/json'},
        timeout=15)
    answer = safe_json(res)
    if res.status_code >= 300:
        error = answer.get('requestError', {}).get('serviceException', {}).get('text', res.text)
        return ('failed', '', 'Infobip: ' + str(error)[:300])
    sent = answer.get('messages', [{}])[0]
    group = str(sent.get('status', {}).get('groupName', '')).upper()
    if group in ('REJECTED', 'UNDELIVERABLE', 'EXPIRED'):
        return ('failed', str(sent.get('messageId', '')), 'Infobip: ' + str(sent.get('status', {}).get('description', group)))
    return ('sent', str(sent.get('messageId', '')), '')


def safe_json(res):
    try:
        data = res.json()
        if isinstance(data, dict):
            return data
    except ValueError:
        pass
    return {}


# Twilio signs every webhook. We check the signature so nobody else can post fake replies.
# https://www.twilio.com/docs/usage/webhooks/webhooks-security
def twilio_signature_ok(url, params, signature):
    token = setting('TWILIO_AUTH_TOKEN')
    if token == '':
        return False
    text = url
    for key in sorted(params.keys()):
        text += key + params[key]
    digest = hmac.new(token.encode(), text.encode(), hashlib.sha1).digest()
    expected = base64.b64encode(digest).decode()
    return hmac.compare_digest(expected, signature or '')


# Infobip replies carry ?key=... that only we and Infobip know
def infobip_key_ok(key):
    secret = setting('SMS_WEBHOOK_KEY')
    if secret == '':
        return False
    return hmac.compare_digest(secret, key or '')


# delivery words from the providers -> our words
def delivery_status(word):
    word = str(word or '').lower()
    if word in ('delivered', 'delivered_to_handset'):
        return 'delivered'
    if word in ('failed', 'undelivered', 'undeliverable', 'rejected', 'expired', 'canceled'):
        return 'failed'
    if word in ('sent', 'sending', 'accepted', 'queued', 'pending'):
        return 'sent'
    return ''
