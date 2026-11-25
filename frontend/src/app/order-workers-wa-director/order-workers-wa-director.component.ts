import { Component, OnInit } from '@angular/core';
import { RestframeworkService } from '../apiservice/restframework.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order-workers-wa-director',
  templateUrl: './order-workers-wa-director.component.html',
  styleUrls: ['./order-workers-wa-director.component.css']
})
export class OrderWorkersWaDirectorComponent implements OnInit {
  all;
  constructor(public rest_framework:RestframeworkService, public router:Router) {
    this.rest_framework.getWorkersDirectorLists(localStorage.getItem('director')).then(data=>{
      this.all = data;
    });
   }

  ngOnInit() {
  }

  onselected(n){
    localStorage.setItem('manager', n.user)
    this.router.navigate(['/Orders/dashboard/workers'])

  }

}
