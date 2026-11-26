import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-nyumba-report',
    templateUrl: './nyumba-report.component.html',
    styleUrls: ['./nyumba-report.component.css'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class NyumbaReportComponent implements OnInit {
  users;
  filtertext;

  constructor() { }

  ngOnInit() {
  }

}
