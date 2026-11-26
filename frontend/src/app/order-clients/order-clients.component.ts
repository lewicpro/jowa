import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { RestframeworkService } from '../apiservice/restframework.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-order-clients',
    templateUrl: './order-clients.component.html',
    styleUrls: ['./order-clients.component.css'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class OrderClientsComponent implements OnInit {
  all;
  constructor(public rest_framework:RestframeworkService, public router:Router) {
    
    this.rest_framework.getOrderClientLists(localStorage.getItem('manager')).then(data=>{

      this.all = data;
    });
   }

  ngOnInit() {
  }
  onselected(){
    this.router.navigate(['/Orders/Worker-dashboard/SuccessfulOrders/'])
  }

}
