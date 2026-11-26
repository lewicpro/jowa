import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-history',
    templateUrl: './history.component.html',
    styleUrls: ['./history.component.css'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class HistoryComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
