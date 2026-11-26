import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { RestframeworkService } from '../apiservice/restframework.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-order-matumizi',
    templateUrl: './order-matumizi.component.html',
    styleUrls: ['./order-matumizi.component.css'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class OrderMatumiziComponent implements OnInit {
  all;
  UserData={'Tarehe':'', 'user':'', 'Amount':'', 'Description':''}
  constructor(public rest_framework:RestframeworkService, public router:Router) {
    this.rest_framework.getOrderReport(localStorage.getItem('user')).then(data=>{

      this.all = data;
    });
   }

  ngOnInit() {
  }
  calculate(){}

  PostData(){
    this.rest_framework.getLoginPosts(this.UserData, 'Order-Matumizi/' + localStorage.getItem('Orderworker') + '/').then((result)=>{

    })
  }
   onselected(){
    // this.router.navigate(['/Orders/Directors-dashboard'])
  }

}
