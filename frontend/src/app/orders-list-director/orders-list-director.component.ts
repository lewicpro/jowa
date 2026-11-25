import { Component, OnInit } from '@angular/core';
import { RestframeworkService } from '../apiservice/restframework.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-orders-list-director',
  templateUrl: './orders-list-director.component.html',
  styleUrls: ['./orders-list-director.component.css']
})
export class OrdersListDirectorComponent implements OnInit {
  all;
  userData={pk:''}
  constructor(public rest_framework:RestframeworkService, public router:Router) {
    this.getdata()
   }

   getdata(){
    this.rest_framework.getDirectorOrderListsAll(localStorage.getItem('director')).then(data=>{

      this.all = data;
    });

  }
 

  ngOnInit() {
  }
   onselected(){
    // this.router.navigate(['/Orders/Directors-dashboard'])
  }
  Accept(n){
    this.rest_framework.getLoginPosts(this.userData, 'Director-Accept/' + n.user + '/'+ n.pk + '/')
    this.getdata()
    this.rest_framework.getManagerOrderLists(localStorage.getItem('director')).then(data=>{

      this.all = data;
    });
  }

}
