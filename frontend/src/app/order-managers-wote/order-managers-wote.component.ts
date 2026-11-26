import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { RestframeworkService } from '../apiservice/restframework.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-order-managers-wote',
    templateUrl: './order-managers-wote.component.html',
    styleUrls: ['./order-managers-wote.component.css'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class OrderManagersWoteComponent implements OnInit {
  all;
  constructor(public rest_framework:RestframeworkService, public router:Router) {
    this.rest_framework.getManagerLists().then(data=>{
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
