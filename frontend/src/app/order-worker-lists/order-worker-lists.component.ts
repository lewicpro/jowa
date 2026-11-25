import { Component, OnInit } from '@angular/core';
import { RestframeworkService } from '../apiservice/restframework.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order-worker-lists',
  templateUrl: './order-worker-lists.component.html',
  styleUrls: ['./order-worker-lists.component.css']
})
export class OrderWorkerListsComponent implements OnInit {
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
