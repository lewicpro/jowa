import { Component, OnInit } from '@angular/core';
import { RestframeworkService } from '../apiservice/restframework.service';

@Component({
  selector: 'app-wakala-mmiliki-director-list-wakala',
  templateUrl: './wakala-mmiliki-director-list-wakala.component.html',
  styleUrls: ['./wakala-mmiliki-director-list-wakala.component.css']
})
export class WakalaMmilikiDirectorListWakalaComponent implements OnInit {
  users;
  constructor(public restframework:RestframeworkService) { 
    // console.log('IMEFIKA KWENY LOOP')
    this.restframework.getListsMmilikiWakala().then(data => {
      this.users = data;
      
    });
  }

  ngOnInit() {
  }



  getUsers() {
    

  }


}
