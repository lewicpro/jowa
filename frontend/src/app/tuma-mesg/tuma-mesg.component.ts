import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { DatePipe } from '@angular/common';
import { RestframeworkService } from '../apiservice/restframework.service';
import { SettingsService } from '../settings/settings.service';

// "Tuma meseji": writes a payment reminder for every customer who still owes money,
// either on this month's installment or on an installment whose due date has passed.
// The system has no SMS provider yet, so each message can be copied,
// or opened in the phone's SMS app with the number and text already filled in.
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

  constructor(public restframework: RestframeworkService, public settings: SettingsService) {
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
    let name = String(inst.jina || '').trim();
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

  hasPhone(inst) {
    return String(inst.Simu || '').trim() !== '';
  }

  // opens the phone's SMS app with the number and the message
  smsLink(inst) {
    const phone = String(inst.Simu || '').replace(/[^0-9+]/g, '');
    return 'sms:' + phone + '?body=' + encodeURIComponent(this.messageFor(inst));
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
