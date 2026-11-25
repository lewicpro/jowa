import { Component, OnInit } from '@angular/core';
import { RestframeworkService } from '../apiservice/restframework.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order-manager-lists',
  templateUrl: './order-manager-lists.component.html',
  styleUrls: ['./order-manager-lists.component.css']
})
export class OrderManagerListsComponent implements OnInit {
  all;
  userData={pk:''}
  constructor(public rest_framework:RestframeworkService, public router:Router) {
    this.getdata()
   }

   getdata(){
    this.rest_framework.getManagerOrderLists(localStorage.getItem('manager')).then(data=>{

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
