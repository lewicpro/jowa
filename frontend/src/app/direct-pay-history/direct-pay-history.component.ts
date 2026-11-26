import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-direct-pay-history',
    templateUrl: './direct-pay-history.component.html',
    styleUrls: ['./direct-pay-history.component.css'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class DirectPayHistoryComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
