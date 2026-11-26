import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { RestframeworkService } from '../apiservice/restframework.service';

@Component({
    selector: 'app-maduka-list-profile',
    templateUrl: './maduka-list-profile.component.html',
    styleUrls: ['./maduka-list-profile.component.css'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class MadukaListProfileComponent implements OnInit {
  all;
  duka;
  status='done'
  Director;
  constructor(public restapi:RestframeworkService) {
    // this.restapi.getOverAllWorkerData().then(data=>{
      this.Director=localStorage.getItem('DirectorDuka')
      this.duka=localStorage.getItem('duka')
    //   this.all=data;
    // })

    this.restapi.getWorkerDukaProfile(localStorage.getItem('duka')).then(data=>{
      this.all=data;
    })


   }

  ngOnInit() {
  }

  Edit(){
    this.status = 'Edit'
    
  }
  Done(){
    this.status = 'done'

  }

}
