import { Pipe, PipeTransform } from '@angular/core';
import { SettingsService } from './settings.service';

// {{ amount | money }}
// shows an amount in TSh or USD, as chosen in the settings
// examples:
//   {{ form.Balance | money }}                -> tsh 1,000.00
//   {{ form.kiasi | money: 'raw' }}           -> 1000 (as before), or USD 0.37
//   {{ m.Profit | money: 'raw' : 'tsh ' }}    -> tsh 1000 (as before), or USD 0.37
@Pipe({ name: 'money', standalone: false, pure: false })
export class MoneyPipe implements PipeTransform {

  constructor(public settings: SettingsService) {
  }

  transform(value, fmt = 'tsh ', prefix = '', suffix = '') {
    return this.settings.formatMoney(value, fmt, prefix, suffix);
  }
}


// {{ 'Wateja wote' | t }}
// shows the text in Kiswahili or English, as chosen in the settings
@Pipe({ name: 't', standalone: false, pure: false })
export class TranslatePipe implements PipeTransform {

  constructor(public settings: SettingsService) {
  }

  transform(text) {
    return this.settings.t(text);
  }
}
