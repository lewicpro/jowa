import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { RestframeworkService } from '../apiservice/restframework.service';

@Component({
    selector: 'app-worker-profile',
    templateUrl: './worker-profile.component.html',
    styleUrls: ['./worker-profile.component.css'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class WorkerProfileComponent implements OnInit {
  all;
  constructor(public restapi:RestframeworkService) {
    this.restapi.getOverAllWorkerData().then(data=>{
      this.all=data;
    })
   }

  ngOnInit() {
  }

}
