import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-account-info',
    templateUrl: './account-info.component.html',
    styleUrls: ['./account-info.component.css'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class AccountInfoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
