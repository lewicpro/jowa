import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { RestframeworkService } from '../apiservice/restframework.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-order-director-report',
    templateUrl: './order-director-report.component.html',
    styleUrls: ['./order-director-report.component.css'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class OrderDirectorReportComponent implements OnInit {
  all;
  constructor(public rest_framework:RestframeworkService, public router:Router) {
    this.rest_framework.getDirectorsLists().then(data=>{

      this.all = data;
    });
   }

  ngOnInit() {
  }
   onselected(){
    // this.router.navigate(['/Orders/Directors-dashboard'])
  }

}
