import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-industry',
    templateUrl: './industry.component.html',
    styleUrls: ['./industry.component.css'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class IndustryComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
