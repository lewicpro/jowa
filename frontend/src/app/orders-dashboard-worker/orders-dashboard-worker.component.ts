import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-orders-dashboard-worker',
    templateUrl: './orders-dashboard-worker.component.html',
    styleUrls: ['./orders-dashboard-worker.component.css'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class OrdersDashboardWorkerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
