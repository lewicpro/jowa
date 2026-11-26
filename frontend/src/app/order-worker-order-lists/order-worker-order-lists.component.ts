import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { RestframeworkService } from '../apiservice/restframework.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-order-worker-order-lists',
    templateUrl: './order-worker-order-lists.component.html',
    styleUrls: ['./order-worker-order-lists.component.css'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class OrderWorkerOrderListsComponent implements OnInit {
  all;
  userData={pk:''}
  constructor(public rest_framework:RestframeworkService, public router:Router) {
    this.getdata()
   }

   getdata(){
    this.rest_framework.getWorkerOrderLists(localStorage.getItem('Orderworker')).then(data=>{

      this.all = data;
    });

  }
 

  ngOnInit() {
  }
   onselected(){
    // this.router.navigate(['/Orders/Directors-dashboard'])
  }
  Approve(n){
    this.rest_framework.getLoginPosts(this.userData, 'Approve/' + n.user + '/'+ n.pk + '/')
    this.getdata()
    this.rest_framework.getManagerOrderLists(localStorage.getItem('manager')).then(data=>{

      this.all = data;
    });
  }

}