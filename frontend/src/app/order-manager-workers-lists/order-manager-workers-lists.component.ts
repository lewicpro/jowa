import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { RestframeworkService } from '../apiservice/restframework.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-order-manager-workers-lists',
    templateUrl: './order-manager-workers-lists.component.html',
    styleUrls: ['./order-manager-workers-lists.component.css'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class OrderManagerWorkersListsComponent implements OnInit {
  all;
  constructor(public rest_framework:RestframeworkService, public router:Router) {
    this.rest_framework.getOrderManagerWorkers(localStorage.getItem('manager')).then(data=>{

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
