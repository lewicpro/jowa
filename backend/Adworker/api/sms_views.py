# SMS: send to one customer or many, read a chat, and receive replies from Twilio / Infobip.
#
#   GET  sms/status/                 which provider is set up (never the keys)
#   POST sms/send/                   {"messages": [{"customer", "body"} or {"phone", "body"}], "company"}
#                                    with "customer" (Register pk) the registered phone is used, never another one
#   GET  sms/threads/?company=       one row per phone: the last message
#   GET  sms/chat/?phone=            every message with one phone number
#   POST sms/webhook/twilio/         replies and delivery reports from Twilio
#   POST sms/webhook/infobip/?key=   replies and delivery reports from Infobip
#
# Sending costs money, so everything except the webhooks needs a logged-in user.

from django.http import HttpResponse
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework import status as http

from ..models import SmsMessage, Register
from .. import sms

# the most messages one "send all" may carry
MAX_BULK = 1000
# about 6 SMS parts; longer texts cost a lot and some phones cut them
MAX_LENGTH = 960


def message_json(m):
    return {
        'id': m.id,
        'phone': m.phone,
        'name': m.name,
        'customer': m.customer,
        'body': m.body,
        'direction': m.direction,
        'status': m.status,
        'error': m.error,
        'provider': m.provider,
        'sent_by': m.sent_by,
        'created': m.created.isoformat(),
    }


# the customer who owns a phone number (a reply only gives us the number)
def find_customer(phone):
    for reg in Register.objects.exclude(Simu__isnull=True).exclude(Simu='').only('id', 'jina', 'Simu', 'company_username'):
        if sms.normalize_phone(reg.Simu) == phone:
            return reg
    return None


class SmsStatusView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        return Response(sms.status())


class SmsSendView(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request):
        items = request.data.get('messages')
        if not isinstance(items, list) or len(items) == 0:
            return Response({'error': 'No messages'}, status=http.HTTP_400_BAD_REQUEST)
        if len(items) > MAX_BULK:
            return Response({'error': 'At most ' + str(MAX_BULK) + ' messages at a time'}, status=http.HTTP_400_BAD_REQUEST)

        company = str(request.data.get('company') or '')
        provider = sms.provider_name()
        results = []
        for item in items:
            if not isinstance(item, dict):
                continue
            body = str(item.get('body') or '').strip()
            ref = item.get('ref')
            name = str(item.get('name') or '')[:120]
            company_of_customer = company

            customer = item.get('customer')
            try:
                customer = int(customer)
            except (TypeError, ValueError):
                customer = None

            # the number saved when the customer was registered is the only one we use
            if customer is not None:
                reg = Register.objects.filter(pk=customer).first()
                if reg is None:
                    results.append({'ref': ref, 'status': 'failed', 'error': 'no_customer'})
                    continue
                if str(reg.Simu or '').strip() == '':
                    results.append({'ref': ref, 'status': 'failed', 'error': 'no_phone'})
                    continue
                phone = sms.normalize_phone(reg.Simu)
                if name.strip() == '':
                    name = (reg.jina or '')[:120]
                company_of_customer = reg.company_username or company
            else:
                phone = sms.normalize_phone(item.get('phone'))

            if body == '':
                results.append({'ref': ref, 'status': 'failed', 'error': 'empty'})
                continue
            if len(body) > MAX_LENGTH:
                results.append({'ref': ref, 'status': 'failed', 'error': 'too_long'})
                continue
            if phone == '':
                results.append({'ref': ref, 'status': 'failed', 'error': 'bad_phone'})
                continue

            state, provider_id, error = sms.send(phone, body)
            saved = SmsMessage.objects.create(
                company=company_of_customer, customer=customer, name=name,
                phone=phone, body=body, direction='out', status=state,
                provider=provider, provider_id=provider_id, error=error,
                sent_by=request.user.get_username())
            row = message_json(saved)
            row['ref'] = ref
            results.append(row)

        counts = {'sent': 0, 'test': 0, 'failed': 0}
        for r in results:
            if r['status'] in counts:
                counts[r['status']] += 1
        return Response({'provider': provider, 'counts': counts, 'results': results})


class SmsThreadsView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        messages = SmsMessage.objects.all()
        company = request.query_params.get('company')
        if company:
            messages = messages.filter(company=company)

        # newest first: the first message we meet for a phone is its last one
        threads = {}
        order = []
        for m in messages.order_by('-created', '-id')[:5000]:
            t = threads.get(m.phone)
            if t is None:
                t = message_json(m)
                t['count'] = 0
                t['replies'] = 0
                threads[m.phone] = t
                order.append(m.phone)
            t['count'] += 1
            if m.direction == 'in':
                t['replies'] += 1
            # the name may only be on an older message
            if not t['name'] and m.name:
                t['name'] = m.name
            if t['customer'] is None and m.customer is not None:
                t['customer'] = m.customer

        result = []
        for phone in order:
            result.append(threads[phone])
        return Response(result)


class SmsChatView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        phone = sms.normalize_phone(request.query_params.get('phone'))
        if phone == '':
            return Response({'error': 'bad_phone'}, status=http.HTTP_400_BAD_REQUEST)
        messages = SmsMessage.objects.filter(phone=phone).order_by('-created', '-id')[:500]
        rows = []
        for m in reversed(list(messages)):
            rows.append(message_json(m))
        return Response({'phone': phone, 'messages': rows})


# ---------- webhooks: the providers call these, not the dashboard ----------

def save_reply(phone_raw, body, provider, provider_id):
    phone = sms.normalize_phone(phone_raw)
    if phone == '' or str(body or '').strip() == '':
        return
    # the same reply sent twice by the provider is saved once
    if provider_id and SmsMessage.objects.filter(provider=provider, provider_id=provider_id, direction='in').exists():
        return
    reg = find_customer(phone)
    SmsMessage.objects.create(
        company=(reg.company_username if reg else '') or '',
        customer=reg.id if reg else None,
        name=(reg.jina if reg else '') or '',
        phone=phone, body=str(body)[:2000], direction='in', status='received',
        provider=provider, provider_id=provider_id or '')


def update_delivery(provider, provider_id, word, error=''):
    state = sms.delivery_status(word)
    if state == '' or not provider_id:
        return
    for m in SmsMessage.objects.filter(provider=provider, provider_id=provider_id, direction='out'):
        # a late "sent" must not undo "delivered"
        if m.status == 'delivered' and state == 'sent':
            continue
        m.status = state
        if state == 'failed' and error:
            m.error = str(error)[:500]
        m.save(update_fields=['status', 'error'])


class TwilioWebhookView(APIView):
    permission_classes = [AllowAny]
    authentication_classes = []

    def post(self, request):
        params = {}
        for key in request.POST.keys():
            params[key] = request.POST.get(key)

        public = sms.setting('SMS_PUBLIC_URL')
        if public != '':
            url = public.rstrip('/') + request.get_full_path()
        else:
            url = request.build_absolute_uri()
        if not sms.twilio_signature_ok(url, params, request.headers.get('X-Twilio-Signature')):
            return HttpResponse('Bad signature', status=403)

        if params.get('MessageStatus') and params.get('SmsStatus') != 'received':
            # a delivery report for a message we sent
            update_delivery('twilio', params.get('MessageSid'), params.get('MessageStatus'), params.get('ErrorMessage') or params.get('ErrorCode'))
        else:
            # a reply from a customer
            save_reply(params.get('From'), params.get('Body'), 'twilio', params.get('MessageSid'))
        # Twilio wants TwiML back; an empty answer means "don't reply automatically"
        return HttpResponse('<?xml version="1.0" encoding="UTF-8"?><Response></Response>', content_type='text/xml')


class InfobipWebhookView(APIView):
    permission_classes = [AllowAny]
    authentication_classes = []

    def post(self, request):
        if not sms.infobip_key_ok(request.query_params.get('key')):
            return HttpResponse('Bad key', status=403)

        results = request.data.get('results') if isinstance(request.data, dict) else None
        if not isinstance(results, list):
            return Response({'ok': True})
        for r in results:
            if not isinstance(r, dict):
                continue
            if 'text' in r or 'cleanText' in r:
                # a reply from a customer
                save_reply(r.get('from'), r.get('cleanText') or r.get('text'), 'infobip', r.get('messageId'))
            elif 'status' in r:
                # a delivery report for a message we sent
                st = r.get('status') or {}
                err = (r.get('error') or {}).get('description', '')
                update_delivery('infobip', r.get('messageId'), st.get('groupName'), err)
        return Response({'ok': True})
