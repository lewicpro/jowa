import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-open-snacker',
    templateUrl: './open-snacker.component.html',
    styleUrls: ['./open-snacker.component.css'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class OpenSnackerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
