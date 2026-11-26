import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { RestframeworkService } from '../apiservice/restframework.service';

@Component({
    selector: 'app-orders-dashboard-malipo',
    templateUrl: './orders-dashboard-malipo.component.html',
    styleUrls: ['./orders-dashboard-malipo.component.css'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class OrdersDashboardMalipoComponent implements OnInit {
  all;
  constructor(public rest_framework:RestframeworkService) {
    this.rest_framework.getDirectorWakalaWorkersLists().then(data=>{

      this.all = data;
    });
   }

  ngOnInit() {
  }

}
