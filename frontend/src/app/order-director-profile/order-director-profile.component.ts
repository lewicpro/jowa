import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { RestframeworkService } from '../apiservice/restframework.service';

@Component({
    selector: 'app-order-director-profile',
    templateUrl: './order-director-profile.component.html',
    styleUrls: ['./order-director-profile.component.css'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class OrderDirectorProfileComponent implements OnInit {
  all;
  constructor(public restapi:RestframeworkService) {
    this.restapi.getWakalaOverallTransactionData().then(data=>{
      this.all=data;
    })
   }

  ngOnInit() {
  }

}
