import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { RestframeworkService } from '../apiservice/restframework.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-orders-dashboard-bidhaa-zote',
    templateUrl: './orders-dashboard-bidhaa-zote.component.html',
    styleUrls: ['./orders-dashboard-bidhaa-zote.component.css'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class OrdersDashboardBidhaaZoteComponent implements OnInit {
  all;
  constructor(public rest_framework:RestframeworkService, public router:Router) {
    this.rest_framework.getOrderManagerProducts('all').then(data=>{

      this.all = data;
    });
   }

  ngOnInit() {
  }
  onselected(n){
    // localStorage.setItem('Orderworker', n.user)
    // this.router.navigate(['/Orders/Worker-dashboard/Profile'])
  }

}
