import { Directive, ElementRef, HostListener, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

// Put "alecoAmount" on an amount box that uses ngModel:
//   <input type="text" inputmode="numeric" alecoAmount [ngModel]="Kiasi" (ngModelChange)="Kiasi = $event">
//
// While typing, the box shows commas between thousands: 1200000 -> 1,200,000
// The page code still gets the plain number as text ("1200000"), exactly as before,
// so no calculation and nothing saved to the server changes.
// Letters and other signs are dropped; one "." is allowed for cents.
@Directive({
  selector: 'input[alecoAmount]',
  standalone: false,
  providers: [{ provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => AmountInputDirective), multi: true }]
})
export class AmountInputDirective implements ControlValueAccessor {
  onChange = (value) => {};
  onTouched = () => {};

  constructor(public el: ElementRef) {
  }

  // the page gave the box a value (e.g. the calculator filled it): show it with commas
  writeValue(value) {
    let text = '';
    if (value !== null && value !== undefined) {
      text = String(value);
    }
    this.el.nativeElement.value = this.withCommas(this.plain(text));
  }

  registerOnChange(fn) {
    this.onChange = fn;
  }

  registerOnTouched(fn) {
    this.onTouched = fn;
  }

  setDisabledState(disabled) {
    this.el.nativeElement.disabled = disabled;
  }

  // the user typed, deleted or pasted
  @HostListener('input')
  onInput() {
    const box = this.el.nativeElement;
    let caret = box.value.length;
    if (box.selectionStart !== null && box.selectionStart !== undefined) {
      caret = box.selectionStart;
    }

    // how many digits are left of the cursor: the cursor goes back after the same digit
    const keptBefore = this.plain(box.value.slice(0, caret)).length;
    const plain = this.plain(box.value);
    const shown = this.withCommas(plain);
    box.value = shown;

    let position = 0;
    let kept = 0;
    while (position < shown.length && kept < keptBefore) {
      if (shown.charAt(position) !== ',') {
        kept = kept + 1;
      }
      position = position + 1;
    }
    if (document.activeElement === box) {
      box.setSelectionRange(position, position);
    }

    this.onChange(plain);
  }

  @HostListener('blur')
  onBlur() {
    this.onTouched();
  }

  // "1,2a00.5.0" -> "1200.50": digits and the first "." only
  plain(text) {
    let result = '';
    let hasDot = false;
    for (const ch of String(text)) {
      if (ch >= '0' && ch <= '9') {
        result = result + ch;
      } else if (ch === '.' && !hasDot) {
        result = result + ch;
        hasDot = true;
      }
    }
    return result;
  }

  // "1200000.5" -> "1,200,000.5"
  withCommas(plain) {
    if (plain === '') {
      return '';
    }
    const dot = plain.indexOf('.');
    let whole = plain;
    let rest = '';
    if (dot >= 0) {
      whole = plain.slice(0, dot);
      rest = plain.slice(dot);
    }
    whole = whole.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    return whole + rest;
  }
}
