import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-mikopo-front',
    templateUrl: './mikopo-front.component.html',
    styleUrls: ['./mikopo-front.component.css'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class MikopoFrontComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
