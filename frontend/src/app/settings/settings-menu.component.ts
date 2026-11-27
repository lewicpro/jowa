import { Component, ElementRef, HostListener } from '@angular/core';
import { SettingsService } from './settings.service';

// The "Mipangilio" button at the top of the dashboard.
// Clicking it opens a small window to choose the language and the currency.
@Component({
  selector: 'app-settings-menu',
  templateUrl: './settings-menu.component.html',
  styleUrls: ['./settings-menu.component.css'],
  standalone: false
})
export class SettingsMenuComponent {
  open = false;

  langs = [
    { id: 'sw', label: 'Kiswahili' },
    { id: 'en', label: 'English' }
  ];

  currencies = [
    { id: 'tsh', label: 'TSh' },
    { id: 'USD', label: 'USD' }
  ];

  // the amount shown in "Mfano" (example)
  sample = 20919970;

  constructor(public settings: SettingsService, public host: ElementRef) {
  }

  toggle() {
    this.open = !this.open;
  }

  close() {
    this.open = false;
  }

  // a click anywhere outside the window closes it
  @HostListener('document:click', ['$event'])
  onDocumentClick(event) {
    if (this.open && !this.host.nativeElement.contains(event.target)) {
      this.close();
    }
  }

  // the Esc key closes it
  @HostListener('document:keydown.escape')
  onEscape() {
    this.close();
  }
}
