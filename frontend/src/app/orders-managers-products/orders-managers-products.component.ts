import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { RestframeworkService } from '../apiservice/restframework.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-orders-managers-products',
    templateUrl: './orders-managers-products.component.html',
    styleUrls: ['./orders-managers-products.component.css'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class OrdersManagersProductsComponent implements OnInit {
  all;
  constructor(public rest_framework:RestframeworkService, public router:Router) {
    this.rest_framework.getOrderManagerProducts(localStorage.getItem('manager')).then(data=>{

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
