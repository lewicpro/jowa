import { Component, OnInit } from '@angular/core';
import { RestframeworkService } from '../apiservice/restframework.service';

@Component({
  selector: 'app-bmwakala-profile',
  templateUrl: './bmwakala-profile.component.html',
  styleUrls: ['./bmwakala-profile.component.css']
})
export class BmwakalaProfileComponent implements OnInit {
  all;
  constructor(public restapi:RestframeworkService) {
    this.restapi.getWakalaOverallTransactionData().then(data=>{
      this.all=data;
    })
   }

  ngOnInit() {
  }

}
