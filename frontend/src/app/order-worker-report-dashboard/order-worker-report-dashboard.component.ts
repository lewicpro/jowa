import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { RestframeworkService } from '../apiservice/restframework.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-order-worker-report-dashboard',
    templateUrl: './order-worker-report-dashboard.component.html',
    styleUrls: ['./order-worker-report-dashboard.component.css'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class OrderWorkerReportDashboardComponent implements OnInit {
  all;
  constructor(public rest_framework:RestframeworkService, public router:Router) {
    this.rest_framework.getWorkerLists().then(data=>{

      this.all = data;
    });
   }

  ngOnInit() {
  }
  onselected(){
    this.router.navigate(['/Orders/Worker-dashboard/SuccessfulOrders/'])
  }

}
