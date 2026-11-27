import { Directive, ElementRef, HostListener } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

// Put "alecoBack" on a button to close a form and go back:
//   <button type="button" alecoBack>Ghairi</button>
// Add "escapeCloses" to also close with the Esc key (only on one button per form):
//   <button type="button" alecoBack escapeCloses>x</button>
// It only goes back to the page before; it does not touch the form.
@Directive({ selector: '[alecoBack]', standalone: false })
export class CloseFormDirective {

  constructor(public location: Location, public router: Router, public route: ActivatedRoute, public el: ElementRef) {
  }

  // the button was clicked
  @HostListener('click')
  close() {
    // Angular counts the pages opened in the app; more than 1 means there is a page to go back to
    const state = window.history.state;
    if (state != null && state.navigationId > 1) {
      this.location.back();
    } else {
      // the form was opened straight from a link: go to the page above it
      this.router.navigate(['..'], { relativeTo: this.route });
    }
  }

  // the Esc key was pressed
  @HostListener('document:keydown.escape', ['$event'])
  onEscape(event) {
    if (!this.el.nativeElement.hasAttribute('escapecloses')) {
      return;
    }
    if (event.defaultPrevented) {
      return;
    }
    // a dropdown or the settings window is open: Esc closes that first
    if (document.querySelector('.cdk-overlay-pane, app-settings-menu .panel') != null) {
      return;
    }
    this.close();
  }
}
