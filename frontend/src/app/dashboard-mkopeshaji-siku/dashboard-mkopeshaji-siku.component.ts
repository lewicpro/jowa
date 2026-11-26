import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { RestframeworkService } from '../apiservice/restframework.service';

@Component({
    selector: 'app-dashboard-mkopeshaji-siku',
    templateUrl: './dashboard-mkopeshaji-siku.component.html',
    styleUrls: ['./dashboard-mkopeshaji-siku.component.css'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class DashboardMkopeshajiSikuComponent implements OnInit {
  Sikus;

  constructor(public apiservice:RestframeworkService) {
    this.apiservice.getSikuMicrofinance().then(results =>{
      this.Sikus=results;
    })
   }

  ngOnInit() {
  }

}
