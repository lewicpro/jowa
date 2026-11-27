import { Injectable } from '@angular/core';
import { EN, SW } from './translations';

// Settings of the dashboard: language, currency and cents.
// They are saved in the browser (localStorage) so they stay after a refresh.
//
// lang:     'sw' (Kiswahili) or 'en' (English)
// currency: 'tsh' (shillings, as saved in the database) or 'USD' (converted with today's rate)
// decimals: true shows ".00", false hides it

@Injectable({ providedIn: 'root' })
export class SettingsService {
  prefs = { lang: 'sw', currency: 'tsh', decimals: true };

  // today's dollar rate: { rate: 2670.5, updated: '...', fetchedAt: 1700000000000 }
  rateInfo = null;
  rateLoading = false;
  rateError = false;

  constructor() {
    this.loadPrefs();
    this.loadRate();
    document.documentElement.lang = this.prefs.lang;

    if (this.prefs.currency === 'USD') {
      this.refreshRate(false);
    }
  }


  // ---------- read the settings (the html calls these) ----------

  lang() {
    return this.prefs.lang;
  }

  currency() {
    return this.prefs.currency;
  }

  decimals() {
    return this.prefs.decimals;
  }

  fx() {
    return this.rateInfo;
  }

  fxLoading() {
    return this.rateLoading;
  }

  fxError() {
    return this.rateError;
  }


  // ---------- change the settings ----------

  setLang(lang) {
    this.prefs.lang = lang;
    document.documentElement.lang = lang;
    this.savePrefs();
  }

  setCurrency(currency) {
    this.prefs.currency = currency;
    this.savePrefs();
    if (currency === 'USD') {
      this.refreshRate(false);
    }
  }

  setDecimals(decimals) {
    this.prefs.decimals = decimals;
    this.savePrefs();
  }

  reset() {
    this.prefs = { lang: 'sw', currency: 'tsh', decimals: true };
    document.documentElement.lang = 'sw';
    this.savePrefs();
  }


  // ---------- translate a text ----------
  // Kiswahili is the language of the site, so in Kiswahili the text comes back as it is.
  // A "*" in front and ":" "." "-" at the end are kept.
  t(text) {
    if (text == null) {
      return text;
    }
    // Kiswahili chosen: text written in English in the pages is turned into Kiswahili
    if (this.prefs.lang === 'sw') {
      return this.toSwahili(text);
    }
    const raw = String(text);

    // the whole text first (some sentences end with "." in the word list)
    const whole = this.findEnglish(raw);
    if (whole != null) {
      return whole;
    }

    // split "* Jina:" into "* " + "Jina" + ":"
    const parts = raw.match(/^(\s*\*?\s*)([\s\S]*?)([\s:.\-]*)$/);
    if (parts == null) {
      return raw;
    }
    const front = parts[1];
    const word = parts[2];
    const back = parts[3];

    let english = this.findEnglish(word);

    // "Please provide Jina" -> "Please provide Name"
    if (english == null) {
      const please = word.match(/^(please provide)\s+(.+)$/i);
      if (please != null) {
        const rest = this.findEnglish(please[2]);
        english = please[1] + ' ' + (rest != null ? rest : please[2]);
      }
    }

    // "Mwezi 11" -> "Month 11"
    if (english == null) {
      const month = word.match(/^mwezi\s*(\d{1,2})$/i);
      if (month != null) {
        english = 'Month ' + month[1];
      }
    }

    // no translation: show the Kiswahili text
    if (english == null) {
      return raw;
    }
    return front + this.sameCase(word, english) + back;
  }

  // English text in the pages -> Kiswahili (the SW word list). Unknown text stays as it is.
  toSwahili(text) {
    const raw = String(text);
    const whole = this.findIn(SW, raw);
    if (whole != null) {
      return whole;
    }
    const parts = raw.match(/^(\s*\*?\s*)([\s\S]*?)([\s:.\-]*)$/);
    if (parts == null) {
      return raw;
    }
    const swahili = this.findIn(SW, parts[2]);
    if (swahili == null) {
      return raw;
    }
    return parts[1] + this.sameCase(parts[2], swahili) + parts[3];
  }

  // look for a text in a word list, first exactly, then in small letters
  findIn(list, word) {
    const key = String(word).trim();
    if (key === '') {
      return null;
    }
    if (list[key] != null) {
      return list[key];
    }
    const small = key.toLowerCase();
    for (const k of Object.keys(list)) {
      if (k.toLowerCase() === small) {
        return list[k];
      }
    }
    return null;
  }

  // look for the word in the dictionary, first exactly, then in small letters
  findEnglish(word) {
    const key = word.trim();
    if (key === '') {
      return null;
    }
    if (EN[key] != null) {
      return EN[key];
    }
    const small = key.toLowerCase();
    for (const k of Object.keys(EN)) {
      if (k.toLowerCase() === small) {
        return EN[k];
      }
    }
    return null;
  }

  // give the English word the same capital letters as the Kiswahili word
  // "WATEJA" -> "CUSTOMERS", "wateja" -> "customers", "Wateja" -> "Customers"
  sameCase(kiswahili, english) {
    const letters = kiswahili.replace(/[^A-Za-z]/g, '');
    if (letters.length > 1 && letters === letters.toUpperCase()) {
      return english.toUpperCase();
    }
    const first = kiswahili.charAt(0);
    if (first >= 'a' && first <= 'z') {
      return english.charAt(0).toLowerCase() + english.slice(1);
    }
    if (first >= 'A' && first <= 'Z') {
      return english.charAt(0).toUpperCase() + english.slice(1);
    }
    return english;
  }


  // ---------- show an amount of money ----------
  // Amounts in the database are always in shillings.
  //
  // In TSh the amount looks exactly like before:
  //   fmt = the old symbol, like 'tsh ' or 'Tsh '   -> "tsh 1,000.00"
  //   fmt = 'raw'                                    -> the number as it was printed before
  //   prefix / suffix = a word that was written next to the number, like "tsh " or "TSH"
  // In USD the amount is divided by today's rate: "USD 0.37"
  formatMoney(value, fmt = 'tsh ', prefix = '', suffix = '') {
    const empty = (value === null || value === undefined || value === '');

    let number = NaN;
    if (!empty) {
      if (typeof value === 'number') {
        number = value;
      } else {
        number = Number(String(value).replace(/,/g, '').trim());
      }
    }

    // dollars: only when we have a rate and a real number
    if (this.prefs.currency === 'USD' && this.rateInfo != null && !isNaN(number)) {
      const dollars = number / this.rateInfo.rate;
      let text = 'USD ' + this.withCommas(Math.abs(dollars));
      if (dollars < 0) {
        text = '-' + text;
      }
      return text;
    }

    // shillings, the number as it was printed before
    if (fmt === 'raw') {
      if (empty) {
        if (prefix !== '' || suffix !== '') {
          return prefix + suffix;
        }
        return null;
      }
      return prefix + String(value) + suffix;
    }

    // shillings, with the symbol, like "tsh 1,000.00"
    if (empty) {
      return null;
    }
    if (isNaN(number)) {
      return String(value);
    }
    let sign = '';
    if (number < 0) {
      sign = '-';
    }
    return prefix + sign + fmt + this.withCommas(Math.abs(number)) + suffix;
  }

  // 1234567 -> "1,234,567.00" (or "1,234,567" when cents are hidden)
  withCommas(number) {
    let digits = 0;
    if (this.prefs.decimals) {
      digits = 2;
    }
    return number.toLocaleString('en-US', { minimumFractionDigits: digits, maximumFractionDigits: digits });
  }


  // ---------- today's dollar rate ----------
  // We ask a free website (open.er-api.com) how many shillings make 1 dollar.
  // We use plain fetch so the login token of the app is never sent to that website.
  // The rate is kept for 6 hours.
  refreshRate(force) {
    const sixHours = 6 * 60 * 60 * 1000;
    if (!force && this.rateInfo != null && Date.now() - this.rateInfo.fetchedAt < sixHours) {
      return;
    }
    if (this.rateLoading) {
      return;
    }

    this.rateLoading = true;
    this.rateError = false;

    fetch('https://open.er-api.com/v6/latest/USD', { credentials: 'omit' })
      .then(res => res.json())
      .then(data => {
        this.rateLoading = false;
        if (data.result === 'success' && data.rates && data.rates.TZS > 0) {
          this.rateInfo = {
            rate: Number(data.rates.TZS),
            updated: data.time_last_update_utc,
            fetchedAt: Date.now()
          };
          localStorage.setItem('aleco.fx', JSON.stringify(this.rateInfo));
        } else {
          this.rateError = true;
        }
      })
      .catch(err => {
        // no internet: we keep the last rate we had
        this.rateLoading = false;
        this.rateError = true;
      });
  }


  // ---------- save and load from the browser ----------

  savePrefs() {
    localStorage.setItem('aleco.settings', JSON.stringify(this.prefs));
  }

  loadPrefs() {
    const saved = localStorage.getItem('aleco.settings');
    if (saved == null) {
      return;
    }
    try {
      const data = JSON.parse(saved);
      if (data.lang === 'en') {
        this.prefs.lang = 'en';
      }
      if (data.currency === 'USD') {
        this.prefs.currency = 'USD';
      }
      if (data.decimals === false) {
        this.prefs.decimals = false;
      }
    } catch (e) {
      // the saved text is broken: keep the defaults
    }
  }

  loadRate() {
    const saved = localStorage.getItem('aleco.fx');
    if (saved == null) {
      return;
    }
    try {
      const data = JSON.parse(saved);
      if (data.rate > 0) {
        this.rateInfo = data;
      }
    } catch (e) {
      // the saved text is broken: we will fetch a new rate
    }
  }
}
