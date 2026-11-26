import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-workers-info-monthly',
    templateUrl: './workers-info-monthly.component.html',
    styleUrls: ['./workers-info-monthly.component.css'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class WorkersInfoMonthlyComponent implements OnInit {
  malipo;
  users;

  constructor() { }

  ngOnInit() {
  }

}
