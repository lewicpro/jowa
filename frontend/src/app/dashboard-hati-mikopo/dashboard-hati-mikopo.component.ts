import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { RestframeworkService } from '../apiservice/restframework.service';

@Component({
    selector: 'app-dashboard-hati-mikopo',
    templateUrl: './dashboard-hati-mikopo.component.html',
    styleUrls: ['./dashboard-hati-mikopo.component.css'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class DashboardHatiMikopoComponent implements OnInit {
  malipo;
  users;

  constructor(public restframework: RestframeworkService) {
    this.restframework.getAliekopa().then(data => {
      this.malipo = data;
    });
    // this.restframework.getLists().then(datas => {
    //   this.users = datas;
    // });

  }


ngOnInit() {}


}

