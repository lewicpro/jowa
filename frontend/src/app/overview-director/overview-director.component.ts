import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-overview-director',
    templateUrl: './overview-director.component.html',
    styleUrls: ['./overview-director.component.css'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class OverviewDirectorComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
