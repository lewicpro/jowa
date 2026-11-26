import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-navigation',
    templateUrl: './navigation.component.html',
    styleUrls: ['./navigation.component.css'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class NavigationComponent implements OnInit {
  company_name;

  constructor() {
    this.company_name = localStorage.getItem('company_prog')
    // console.log(this.company_name)
   }

  ngOnInit() {
  }

}
