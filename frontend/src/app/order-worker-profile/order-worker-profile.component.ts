import { Component, OnInit } from '@angular/core';
import { RestframeworkService } from '../apiservice/restframework.service';

@Component({
  selector: 'app-order-worker-profile',
  templateUrl: './order-worker-profile.component.html',
  styleUrls: ['./order-worker-profile.component.css']
})
export class OrderWorkerProfileComponent implements OnInit {
  all;
  constructor(public restapi:RestframeworkService) {
    this.restapi.getWakalaOverallTransactionData().then(data=>{
      this.all=data;
    })
   }

  ngOnInit() {
  }

}
