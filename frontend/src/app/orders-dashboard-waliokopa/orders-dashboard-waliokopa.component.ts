import { Component, OnInit } from '@angular/core';
import { RestframeworkService } from '../apiservice/restframework.service';

@Component({
  selector: 'app-orders-dashboard-waliokopa',
  templateUrl: './orders-dashboard-waliokopa.component.html',
  styleUrls: ['./orders-dashboard-waliokopa.component.css']
})
export class OrdersDashboardWaliokopaComponent implements OnInit {
  all;
  constructor(public rest_framework:RestframeworkService) {
    this.rest_framework.getDirectorWakalaWorkersLists().then(data=>{

      this.all = data;
    });
   }

  ngOnInit() {
  }

}
