import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-order-working-dashboard',
    templateUrl: './order-working-dashboard.component.html',
    styleUrls: ['./order-working-dashboard.component.css'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class OrderWorkingDashboardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
