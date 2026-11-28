import { Component, OnInit, OnDestroy, ChangeDetectionStrategy, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RestframeworkService } from '../apiservice/restframework.service';
import { SettingsService } from '../settings/settings.service';

// "Mazungumzo": SMS chat with one customer.
// Left: people we have talked to, and a search over all customers.
// Right: the messages with the chosen person, and a box to write a new one.
// The page asks the server for new replies every 10 seconds while it is open.
//
// It can be opened on one person: Waliojulishwa/Chat?phone=0712345678&name=Juma&customer=12

@Component({
    selector: 'app-sms-chat',
    templateUrl: './sms-chat.component.html',
    styleUrls: ['./sms-chat.component.css'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class SmsChatComponent implements OnInit, OnDestroy {
  @ViewChild('thread') thread: ElementRef;

  // { provider, live, sender, missing, replies } from the server
  status = null;
  // 401 = logged out, 0 = server not running
  errorCode = null;

  threads = [];
  customers = [];
  search = '';

  // the person whose chat is open: { phone, name, customer }
  open = null;
  messages = [];
  loadingChat = false;

  text = '';
  sending = false;
  sendError = '';

  timer = null;

  constructor(public restframework: RestframeworkService, public settings: SettingsService,
              public route: ActivatedRoute, public router: Router) {
  }

  ngOnInit() {
    this.loadStatus();
    this.loadThreads();
    this.restframework.getLists().then(data => {
      const list = [];
      if (Array.isArray(data)) {
        for (const c of data) {
          if (String(c.Simu || '').trim() !== '') {
            list.push(c);
          }
        }
      }
      this.customers = list;
    });

    // opened from a reminder card: go straight to that person
    const q = this.route.snapshot.queryParamMap;
    if (q.get('phone')) {
      this.choose({ phone: q.get('phone'), name: q.get('name') || '', customer: q.get('customer') });
    }

    this.timer = setInterval(() => this.refresh(), 10000);
  }

  ngOnDestroy() {
    if (this.timer != null) {
      clearInterval(this.timer);
    }
  }

  loadStatus() {
    this.restframework.getSmsStatus().then(data => {
      this.status = data;
      this.errorCode = null;
    }).catch(code => {
      this.errorCode = code;
    });
  }

  loadThreads() {
    this.restframework.getSmsThreads().then(data => {
      if (Array.isArray(data)) {
        this.threads = data;
      }
    }).catch(code => {
      this.errorCode = code;
    });
  }

  // new replies: the list on the left and the open chat
  refresh() {
    if (this.errorCode != null) {
      return;
    }
    this.loadThreads();
    if (this.open != null && !this.sending) {
      this.loadChat(false);
    }
  }

  // ---------- the list on the left ----------

  // people we talked to, filtered by the search box
  shownThreads() {
    const word = this.search.trim().toLowerCase();
    if (word === '') {
      return this.threads;
    }
    const list = [];
    for (const t of this.threads) {
      if (String(t.name || '').toLowerCase().includes(word) || String(t.phone).includes(word)) {
        list.push(t);
      }
    }
    return list;
  }

  // customers we never wrote to, shown only while searching
  shownCustomers() {
    const word = this.search.trim().toLowerCase();
    if (word.length < 2) {
      return [];
    }
    const list = [];
    for (const c of this.customers) {
      const name = String(c.jina || '').toLowerCase();
      const phone = String(c.Simu || '');
      const account = String(c.Account_no || '').toLowerCase();
      if (name.includes(word) || phone.includes(word) || account.includes(word)) {
        if (!this.hasThread(phone)) {
          list.push(c);
        }
      }
      if (list.length >= 20) {
        break;
      }
    }
    return list;
  }

  // "0712 345 678" and "+255712345678" are the same person
  samePhone(a, b) {
    const x = String(a || '').replace(/[^0-9]/g, '').slice(-9);
    const y = String(b || '').replace(/[^0-9]/g, '').slice(-9);
    return x.length === 9 && x === y;
  }

  hasThread(phone) {
    for (const t of this.threads) {
      if (this.samePhone(t.phone, phone)) {
        return true;
      }
    }
    return false;
  }

  isOpen(phone) {
    return this.open != null && this.samePhone(this.open.phone, phone);
  }

  chooseThread(t) {
    this.choose({ phone: t.phone, name: t.name, customer: t.customer });
  }

  chooseCustomer(c) {
    this.search = '';
    this.choose({ phone: c.Simu, name: c.jina, customer: c.pk });
  }

  choose(person) {
    this.open = person;
    this.messages = [];
    this.text = '';
    this.sendError = '';
    this.loadChat(true);
  }

  // back to the list (small screens show one side at a time)
  closeChat() {
    this.open = null;
    this.router.navigate([], { relativeTo: this.route, queryParams: {} });
  }

  // ---------- the chat on the right ----------

  loadChat(first) {
    const person = this.open;
    if (first) {
      this.loadingChat = true;
    }
    this.restframework.getSmsChat(person.phone).then(data => {
      // another person was chosen meanwhile
      if (this.open !== person) {
        return;
      }
      this.loadingChat = false;
      const rows = data['messages'];
      const grew = rows.length !== this.messages.length;
      this.messages = rows;
      if (grew) {
        this.scrollDown();
      }
    }).catch(code => {
      this.loadingChat = false;
      if (code === 400) {
        this.sendError = 'bad_phone';
      } else {
        this.errorCode = code;
      }
    });
  }

  send() {
    const body = this.text.trim();
    if (body === '' || this.sending || this.open == null) {
      return;
    }
    this.sending = true;
    this.sendError = '';
    const person = this.open;
    this.restframework.sendSms([{ ref: 1, phone: person.phone, body: body, customer: person.customer, name: person.name }]).then(data => {
      this.sending = false;
      const result = data['results'][0];
      if (result.status === 'failed' && result.id == null) {
        // not saved at all: the number or the text is wrong
        this.sendError = result.error;
        return;
      }
      this.text = '';
      // the server writes the number as +255...: keep that one so the chat matches
      this.open.phone = result.phone;
      this.loadChat(false);
      this.loadThreads();
    }).catch(code => {
      this.sending = false;
      this.errorCode = code;
    });
  }

  // Enter sends, Shift+Enter starts a new line
  onKey(event) {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      this.send();
    }
  }

  scrollDown() {
    setTimeout(() => {
      if (this.thread != null) {
        const box = this.thread.nativeElement;
        box.scrollTop = box.scrollHeight;
      }
    }, 0);
  }

  // ---------- words on the page ----------

  statusLabel(m) {
    if (m.direction === 'in') {
      return '';
    }
    if (m.status === 'test') {
      return 'Majaribio · haijatumwa';
    }
    if (m.status === 'delivered') {
      return 'Imefika';
    }
    if (m.status === 'failed') {
      return 'Imeshindwa';
    }
    if (m.status === 'sent') {
      return 'Imetumwa';
    }
    return 'Inasubiri';
  }

  errorText(code) {
    if (code === 'bad_phone') {
      return 'Namba ya simu si sahihi';
    }
    if (code === 'too_long') {
      return 'Ujumbe ni mrefu mno';
    }
    if (code === 'empty') {
      return 'Andika ujumbe kwanza';
    }
    return code;
  }

  providerName() {
    if (this.status == null) {
      return '';
    }
    if (this.status.provider === 'twilio') {
      return 'Twilio';
    }
    if (this.status.provider === 'infobip') {
      return 'Infobip';
    }
    return '';
  }

  // one SMS holds 160 letters; longer ones are sent in parts of 153
  parts() {
    const length = this.text.length;
    if (length <= 160) {
      return 1;
    }
    return Math.ceil(length / 153);
  }

  initials(name) {
    const words = String(name || '').trim().split(/\s+/);
    let letters = '';
    for (const w of words) {
      if (w !== '' && letters.length < 2) {
        letters += w.charAt(0).toUpperCase();
      }
    }
    if (letters === '') {
      return '#';
    }
    return letters;
  }

  // "today 14:05", or the date for older messages
  when(iso) {
    const d = new Date(iso);
    if (isNaN(d.getTime())) {
      return '';
    }
    const time = d.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' });
    const today = new Date();
    if (d.toDateString() === today.toDateString()) {
      return time;
    }
    return d.toLocaleDateString('en-GB') + ' ' + time;
  }
}
