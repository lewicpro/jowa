import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-admin-history',
    templateUrl: './admin-history.component.html',
    styleUrls: ['./admin-history.component.css'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class AdminHistoryComponent implements OnInit {
  filtertext;
  users;

  constructor() { }

  ngOnInit() {
  }

}
