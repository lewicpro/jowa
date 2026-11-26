import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { RestframeworkService } from '../apiservice/restframework.service';

@Component({
    selector: 'app-wakala-mmiliki-director-profile',
    templateUrl: './wakala-mmiliki-director-profile.component.html',
    styleUrls: ['./wakala-mmiliki-director-profile.component.css'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class WakalaMmilikiDirectorProfileComponent implements OnInit {
  all;
  constructor(public rest_framework: RestframeworkService,) {
    this.rest_framework.getListsOveralDirector().then(data=>{
      this.all=data
    })
   }

  ngOnInit() {
  }

}
