import { Component, OnInit } from '@angular/core';
import { RestframeworkService } from '../apiservice/restframework.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order-director-order-list',
  templateUrl: './order-director-order-list.component.html',
  styleUrls: ['./order-director-order-list.component.css']
})
export class OrderDirectorOrderListComponent implements OnInit {
  all;
  constructor(public rest_framework:RestframeworkService, public router:Router) {
    this.rest_framework.getDirectorsLists().then(data=>{

      this.all = data;
    });
   }

  ngOnInit() {
  }
   onselected(){
    this.router.navigate(['/Orders/Directors-dashboard'])
  }

}
