import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-orders-dashboard-manager',
    templateUrl: './orders-dashboard-manager.component.html',
    styleUrls: ['./orders-dashboard-manager.component.css'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class OrdersDashboardManagerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
