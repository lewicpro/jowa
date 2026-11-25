import { Component, OnInit } from '@angular/core';
import { RestframeworkService } from '../apiservice/restframework.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order-workers-wote',
  templateUrl: './order-workers-wote.component.html',
  styleUrls: ['./order-workers-wote.component.css']
})
export class OrderWorkersWoteComponent implements OnInit {
  all;
  constructor(public rest_framework:RestframeworkService, public router:Router) {
    this.rest_framework.getOrderWorkers().then(data=>{

      this.all = data;
    });
   }

  ngOnInit() {
  }
  onselected(n){
    localStorage.setItem('Orderworker', n.user)
    this.router.navigate(['/Orders/Worker-dashboard/Profile'])
  }

}
