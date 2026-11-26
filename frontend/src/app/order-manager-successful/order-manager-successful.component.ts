import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { RestframeworkService } from '../apiservice/restframework.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-order-manager-successful',
    templateUrl: './order-manager-successful.component.html',
    styleUrls: ['./order-manager-successful.component.css'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class OrderManagerSuccessfulComponent implements OnInit {
  all;
  constructor(public rest_framework:RestframeworkService, public router:Router) {
    this.rest_framework.getReportSuccessLists(localStorage.getItem('Orderworker')).then(data=>{

      this.all = data;
    });
   }

  ngOnInit() {
  }
  onselected(){
    this.router.navigate(['/Orders/Worker-dashboard/SuccessfulOrders/'])
  }

}
