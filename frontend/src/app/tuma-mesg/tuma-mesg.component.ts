import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { DatePipe } from '@angular/common';
import { RestframeworkService } from '../apiservice/restframework.service';
import { SettingsService } from '../settings/settings.service';
import { Router, ActivatedRoute } from '@angular/router';

// "Tuma meseji": writes a payment reminder for every customer who still owes money,
// either on this month's installment or on an installment whose due date has passed.
// Messages go out through the SMS provider set on the server (Twilio or Infobip),
// one at a time or all at once. With no provider the server runs in test mode:
// messages are saved and shown in the chat, but not sent to the customer.
//
// In the message these words are replaced for each customer:
//   {jina}   -> the customer's name
//   {kiasi}  -> what is left to pay on this month's installment
//   {tarehe} -> the day the installment is due

@Component({
    selector: 'app-tuma-mesg',
    templateUrl: './tuma-mesg.component.html',
    styleUrls: ['./tuma-mesg.component.css'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class TumaMesgComponent implements OnInit {
  // all unpaid installments, split in two lists
  mweziHuu = [];
  waliochelewa = [];
  loading = true;

  // which list is shown: 'mwezi' (due this month) or 'chelewa' (due date passed)
  kundi = 'mwezi';

  // the message the admin writes (null = use the ready message in the chosen language)
  ujumbe = null;

  // the row whose message was just copied, to show "Imenakiliwa"
  copiedId = null;

  datePipe = new DatePipe('en-US');

  // which SMS provider the server uses: { provider, live, sender, missing, replies }
  smsStatus = null;
  // 401 = logged out, 0 = server not running
  smsError = null;

  // registered customers by their username: the phone always comes from here
  registered = {};

  // what happened to each message sent from this page, by installment id
  results = {};
  // the card being sent now
  sendingId = null;

  // "send all": how far it got, and the totals at the end
  bulkBusy = false;
  bulkDone = 0;
  bulkTotal = 0;
  bulkSummary = null;

  constructor(public restframework: RestframeworkService, public settings: SettingsService, public router: Router, public route: ActivatedRoute) {
    this.restframework.getSmsStatus().then(data => {
      this.smsStatus = data;
    }).catch(code => {
      this.smsError = code;
    });
    this.restframework.getLists().then(data => {
      const map = {};
      if (Array.isArray(data)) {
        for (const c of data) {
          if (c.Username) {
            map[c.Username] = c;
          }
        }
      }
      this.registered = map;
    });

    this.restframework.getInstallments().then(data => {
      this.loading = false;
      let installments = [];
      if (Array.isArray(data)) {
        installments = data;
      }
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      const thisMonth = [];
      const late = [];
      for (const inst of installments) {
        const due = this.toDate(inst.due_date);
        if (due == null) {
          continue;
        }
        // already paid in full: no reminder
        if (Number(inst.balance) <= 0) {
          continue;
        }
        if (due.getFullYear() === today.getFullYear() && due.getMonth() === today.getMonth()) {
          thisMonth.push(inst);
        } else if (due < today) {
          late.push(inst);
        }
      }
      // the oldest debt first
      late.sort((a, b) => String(a.due_date).localeCompare(String(b.due_date)));
      this.mweziHuu = thisMonth;
      this.waliochelewa = late;
    });
  }

  // the list shown now
  wateja() {
    if (this.kundi === 'chelewa') {
      return this.waliochelewa;
    }
    return this.mweziHuu;
  }

  // a message the admin wrote is kept for one list only
  chagua(kundi) {
    if (this.kundi !== kundi) {
      this.ujumbe = null;
    }
    this.kundi = kundi;
  }

  ngOnInit() {
  }

  toDate(value) {
    const date = new Date(String(value || '') + 'T00:00:00');
    if (isNaN(date.getTime())) {
      return null;
    }
    return date;
  }

  // the ready message, in Kiswahili or English
  // late customers get a different one, because their date has already passed
  readyMessage() {
    if (this.kundi === 'chelewa') {
      return this.settings.t('Habari {jina}, rejesho lako la mkopo la {kiasi} lililotakiwa tarehe {tarehe} bado halijalipwa. Tafadhali lipa mapema. Asante.');
    }
    return this.settings.t('Habari {jina}, unakumbushwa kulipa rejesho la mkopo la {kiasi} kabla ya {tarehe}. Asante.');
  }

  // the message shown in the box
  template() {
    if (this.ujumbe == null) {
      return this.readyMessage();
    }
    return this.ujumbe;
  }

  setTemplate(text) {
    this.ujumbe = text;
  }

  // go back to the ready message
  resetTemplate() {
    this.ujumbe = null;
  }

  // the message for one customer
  messageFor(inst) {
    let name = this.nameOf(inst).trim();
    if (name === '') {
      name = this.settings.t('Mteja');
    } else {
      // "lewis wanjara" -> "Lewis Wanjara"
      const words = name.toLowerCase().split(/\s+/);
      for (let i = 0; i < words.length; i++) {
        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
      }
      name = words.join(' ');
    }
    const amount = this.settings.formatMoney(inst.balance, 'tsh ');
    const date = this.datePipe.transform(inst.due_date, 'd/M/yyyy');
    let text = this.template();
    text = text.split('{jina}').join(name);
    text = text.split('{kiasi}').join(amount);
    text = text.split('{tarehe}').join(date);
    return text;
  }

  // one SMS holds 160 letters
  smsCount(inst) {
    const length = this.messageFor(inst).length;
    if (length <= 160) {
      return 1;
    }
    return Math.ceil(length / 153);
  }

  // the customer as registered (null when the loan belongs to nobody registered)
  customerOf(inst) {
    const c = this.registered[inst.user];
    if (c == null) {
      return null;
    }
    return c;
  }

  // the phone saved at registration; the phone on the loan is never used
  phoneOf(inst) {
    const c = this.customerOf(inst);
    if (c == null) {
      return '';
    }
    return String(c.Simu || '').trim();
  }

  // the name on the loan; the registered name only when the loan has none
  nameOf(inst) {
    if (String(inst.jina || '').trim() !== '') {
      return String(inst.jina);
    }
    const c = this.customerOf(inst);
    if (c != null && c.jina) {
      return String(c.jina);
    }
    return '';
  }

  hasPhone(inst) {
    return this.phoneOf(inst) !== '';
  }

  // how many in the list shown have a registered phone
  withPhone() {
    let count = 0;
    for (const inst of this.wateja()) {
      if (this.hasPhone(inst)) {
        count += 1;
      }
    }
    return count;
  }

  // ---------- sending through the system ----------

  // one card -> one message for the server
  outgoing(inst) {
    // the server looks the phone up from the registration (customer = Register pk)
    const c = this.customerOf(inst);
    return { ref: inst.id, customer: c.pk, name: this.nameOf(inst), body: this.messageFor(inst) };
  }

  resultFor(inst) {
    return this.results[inst.id];
  }

  sendOne(inst) {
    if (this.sendingId != null || this.bulkBusy) {
      return;
    }
    this.sendingId = inst.id;
    this.restframework.sendSms([this.outgoing(inst)]).then(data => {
      this.sendingId = null;
      this.results[inst.id] = data['results'][0];
    }).catch(code => {
      this.sendingId = null;
      this.smsError = code;
    });
  }

  // sends to everyone in the list shown, 100 at a time so the page can show progress
  sendAll() {
    const list = [];
    for (const inst of this.wateja()) {
      if (this.hasPhone(inst)) {
        list.push(inst);
      }
    }
    if (list.length === 0 || this.bulkBusy) {
      return;
    }
    let question = this.settings.t('Tuma ujumbe kwa wateja') + ' ' + list.length + '?';
    if (this.smsStatus != null && !this.smsStatus.live) {
      question += '\n' + this.settings.t('Hali ya majaribio: hakuna ujumbe utakaomfikia mteja.');
    }
    if (!window.confirm(question)) {
      return;
    }
    this.bulkBusy = true;
    this.bulkDone = 0;
    this.bulkTotal = list.length;
    this.bulkSummary = { sent: 0, test: 0, failed: 0 };
    this.sendChunk(list, 0);
  }

  sendChunk(list, start) {
    if (start >= list.length) {
      this.bulkBusy = false;
      return;
    }
    const part = [];
    for (let i = start; i < list.length && i < start + 100; i++) {
      part.push(this.outgoing(list[i]));
    }
    this.restframework.sendSms(part).then(data => {
      for (const r of data['results']) {
        this.results[r.ref] = r;
        if (this.bulkSummary[r.status] != null) {
          this.bulkSummary[r.status] += 1;
        }
      }
      this.bulkDone = start + part.length;
      this.sendChunk(list, start + 100);
    }).catch(code => {
      // stop here; what was sent stays sent
      this.bulkBusy = false;
      this.smsError = code;
    });
  }

  // the chat with this customer
  openChat(inst) {
    this.router.navigate(['../Chat'], { relativeTo: this.route, queryParams: { phone: this.phoneOf(inst), name: this.nameOf(inst), customer: this.customerOf(inst).pk } });
  }

  resultLabel(r) {
    if (r.status === 'test') {
      return 'Majaribio · haijatumwa';
    }
    if (r.status === 'sent') {
      return 'Imetumwa';
    }
    if (r.status === 'delivered') {
      return 'Imefika';
    }
    if (r.error === 'bad_phone') {
      return 'Namba ya simu si sahihi';
    }
    if (r.error === 'too_long') {
      return 'Ujumbe ni mrefu mno';
    }
    if (r.error === 'no_phone' || r.error === 'no_customer') {
      return 'Hakuna namba iliyosajiliwa';
    }
    return 'Imeshindwa';
  }

  copy(inst) {
    const text = this.messageFor(inst);
    navigator.clipboard.writeText(text).then(() => {
      this.copiedId = inst.id;
      setTimeout(() => {
        if (this.copiedId === inst.id) {
          this.copiedId = null;
        }
      }, 2000);
    });
  }

  // total still owed by everyone in the list shown
  totalOwed() {
    let total = 0;
    for (const inst of this.wateja()) {
      total += Number(inst.balance) || 0;
    }
    return total;
  }
}
