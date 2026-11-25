import { Component, OnInit } from '@angular/core';
import { RestframeworkService } from '../apiservice/restframework.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-orders-approuved',
  templateUrl: './orders-approuved.component.html',
  styleUrls: ['./orders-approuved.component.css']
})
export class OrdersApprouvedComponent implements OnInit {
  all;
  constructor(public rest_framework:RestframeworkService, public router:Router) {
    this.rest_framework.getOrderApprovaReport(localStorage.getItem('Orderworker')).then(data=>{
      this.all=data;

      // this.all = data;
    });
   }

  ngOnInit() {
  }
  onselected(){
    this.router.navigate(['/Orders/Worker-dashboard/SuccessfulOrders/'])
  }

}
