import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { RestframeworkService } from '../apiservice/restframework.service';

@Component({
    selector: 'app-mwezihuumeseji',
    templateUrl: './mwezihuumeseji.component.html',
    styleUrls: ['./mwezihuumeseji.component.css'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class MwezihuumesejiComponent implements OnInit {
  meseji;
  filtertext;
  constructor(public restframework:RestframeworkService) { 
    // this.restframework.getPayments2().then(data => {
    //   this.meseji = data;
    // });
    this.restframework.getMesseji().then(datas => {
      this.meseji = datas;
    });
  }

  ngOnInit() {
  }

}
