import { Component, OnInit } from '@angular/core';
import { RestframeworkService } from '../apiservice/restframework.service';

@Component({
  selector: 'app-malipo',
  templateUrl: './malipo.component.html',
  styleUrls: ['./malipo.component.css']
})
export class MalipoComponent implements OnInit {
  malipo;
  users;

  constructor(public restframework: RestframeworkService) {
    // console.log('hapaaa')
    this.restframework.getPayments2().then(data => {
      this.malipo = data;
    });
    this.restframework.getLists().then(datas => {
      this.users = datas;
    });
  }

  ngOnInit() {
  }

}
