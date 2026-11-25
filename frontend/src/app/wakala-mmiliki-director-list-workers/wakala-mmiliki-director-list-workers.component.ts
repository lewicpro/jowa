import { Component, OnInit } from '@angular/core';
import { RestframeworkService } from '../apiservice/restframework.service';

@Component({
  selector: 'app-wakala-mmiliki-director-list-workers',
  templateUrl: './wakala-mmiliki-director-list-workers.component.html',
  styleUrls: ['./wakala-mmiliki-director-list-workers.component.css']
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
