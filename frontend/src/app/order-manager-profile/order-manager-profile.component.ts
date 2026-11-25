import { Component, OnInit } from '@angular/core';
import { RestframeworkService } from '../apiservice/restframework.service';

@Component({
  selector: 'app-order-manager-profile',
  templateUrl: './order-manager-profile.component.html',
  styleUrls: ['./order-manager-profile.component.css']
})
export class OrderManagerProfileComponent implements OnInit {
  all;
  constructor(public restapi:RestframeworkService) {
    this.restapi.getOrderDashboard(localStorage.getItem('manager')).then(data=>{
      this.all=data;
    })
   }

  ngOnInit() {
  }

}
