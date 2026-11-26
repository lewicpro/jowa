import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { RestframeworkService } from '../apiservice/restframework.service';

@Component({
    selector: 'app-info-nyumba',
    templateUrl: './info-nyumba.component.html',
    styleUrls: ['./info-nyumba.component.css'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class InfoNyumbaComponent implements OnInit {
  malip;
  users;

  constructor(public restframework: RestframeworkService) {
    this.restframework.getInfoNyumba().then(data => {
      this.malip = data;
    });
    this.restframework.getMieziToaNyumba().then(datas => {
      this.users = datas;
    });
  }

  ngOnInit() {
  }

}
