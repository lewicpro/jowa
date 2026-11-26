import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { RestframeworkService } from '../apiservice/restframework.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-order-directors-wote',
    templateUrl: './order-directors-wote.component.html',
    styleUrls: ['./order-directors-wote.component.css'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class OrderDirectorsWoteComponent implements OnInit {
  all;
  constructor(public rest_framework:RestframeworkService, public router:Router) {
    this.rest_framework.getDirectorsLists().then(data=>{

      this.all = data;
    });
   }

  ngOnInit() {
  }
   onselected(n){

     localStorage.setItem('director', n.Director)
    this.router.navigate(['/Orders/Directors-dashboard/workers'])
  }

}
