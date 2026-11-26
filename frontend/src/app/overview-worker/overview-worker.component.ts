import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-overview-worker',
    templateUrl: './overview-worker.component.html',
    styleUrls: ['./overview-worker.component.css'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class OverviewWorkerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
