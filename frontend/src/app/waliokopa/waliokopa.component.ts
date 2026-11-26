import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { RestframeworkService } from '../apiservice/restframework.service';

@Component({
    selector: 'app-waliokopa',
    templateUrl: './waliokopa.component.html',
    styleUrls: ['./waliokopa.component.css'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class WaliokopaComponent implements OnInit {
  malipo;
  users;

  constructor(public restframework: RestframeworkService) {
    this.restframework.getMkopos().then(data => {
      this.malipo = data;
    });
    this.restframework.getLists().then(datas => {
      this.users = datas;
    });

  }


ngOnInit() {}


}

