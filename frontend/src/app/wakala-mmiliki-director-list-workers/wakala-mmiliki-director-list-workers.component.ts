import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { RestframeworkService } from '../apiservice/restframework.service';

@Component({
    selector: 'app-wakala-mmiliki-director-list-workers',
    templateUrl: './wakala-mmiliki-director-list-workers.component.html',
    styleUrls: ['./wakala-mmiliki-director-list-workers.component.css'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class WakalaMmilikiDirectorListWorkersComponent implements OnInit {
  all;
  constructor(public rest_framework:RestframeworkService) {
    this.rest_framework.getDirectorWakalaWorkersLists().then(data=>{

      this.all = data;
    });
   }

  ngOnInit() {
  }

}
