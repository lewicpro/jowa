import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-loan',
    templateUrl: './loan.component.html',
    styleUrls: ['./loan.component.css'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class LoanComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
