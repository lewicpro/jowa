import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-wakala-worker-dashboard',
    templateUrl: './wakala-worker-dashboard.component.html',
    styleUrls: ['./wakala-worker-dashboard.component.css'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class WakalaWorkerDashboardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
