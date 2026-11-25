import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material';
import { RestframeworkService } from '../apiservice/restframework.service';


@Component({
  selector: 'app-wadaiwamwezi',
  templateUrl: './wadaiwamwezi.component.html',
  styleUrls: ['./wadaiwamwezi.component.css']
})
export class WadaiwamweziComponent {
  malipo;
  users;
  monthes = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December', 'January', 'February', 'Mach', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  mwezi;
  d = new Date(); 
  constructor(public restframework: RestframeworkService) {
    this.restframework.getMkopos().then(data => {
      this.malipo = data;
      this.mwezi = this.monthes[this.d.getMonth()];
      // console.log(this.mwezi)
    });
    this.restframework.getLists().then(datas => {
      this.users = datas;
    });

  }


}

