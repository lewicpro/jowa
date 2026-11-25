import { Component, OnInit } from '@angular/core';
import { RestframeworkService } from '../apiservice/restframework.service';

@Component({
  selector: 'app-dashboard-mkopeshaji-siku-toa',
  templateUrl: './dashboard-mkopeshaji-siku-toa.component.html',
  styleUrls: ['./dashboard-mkopeshaji-siku-toa.component.css']
})
export class DashboardMkopeshajiSikuToaComponent implements OnInit {
  Sikutoa;

  constructor(public apiservice:RestframeworkService) {
    this.apiservice.getSikuKopeshaMicrofinance().then(results =>{
      this.Sikutoa=results;
    })
   }

  ngOnInit() {
  }

}
