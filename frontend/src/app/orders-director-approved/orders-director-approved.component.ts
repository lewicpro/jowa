import { Component, OnInit } from '@angular/core';
import { RestframeworkService } from '../apiservice/restframework.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-orders-director-approved',
  templateUrl: './orders-director-approved.component.html',
  styleUrls: ['./orders-director-approved.component.css']
})
export class OrdersDirectorApprovedComponent implements OnInit {
  all;
  userData={pk:''}
  constructor(public rest_framework:RestframeworkService, public router:Router) {
    this.getdata()
   }

   getdata(){
    this.rest_framework.getDirectorOrderLists(localStorage.getItem('director')).then(data=>{

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
