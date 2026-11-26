import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { RestframeworkService } from '../apiservice/restframework.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-orders-customers-lists',
    templateUrl: './orders-customers-lists.component.html',
    styleUrls: ['./orders-customers-lists.component.css'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class OrdersCustomersListsComponent implements OnInit {
  all;
  customer;
  servicer;
  constructor(public rest_framework:RestframeworkService, public router:Router) {
    
    this.rest_framework.getOrderCustomersLists(localStorage.getItem('Orderworker')).then(data=>{

      this.all = data;
    });
   }

  ngOnInit() {
  }
  onselected(m){
    this.customer=m.user
    this.servicer=m.service_officer
    this.customer=m.user
    this.customer=m.user
    this.router.navigate(['/Orders/Worker-dashboard/SetOrders/'], {queryParams:{customer:this.customer, jina:m.jina_kamili, service_officer_phone:m.service_officer_phone, Phone:m.Phone, service_officer:m.service_officer, Director:m.Director, kata:m.kata, mkoa:m.mkoa, wilaya:m.wilaya, Manager:m.Manager, Longitude:m.Longitude, Latitude:m.Latitude}})
  }

}
