import { Component, OnInit } from '@angular/core';
import { RestframeworkService } from '../apiservice/restframework.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order-director-matumizi',
  templateUrl: './order-director-matumizi.component.html',
  styleUrls: ['./order-director-matumizi.component.css']
})
export class OrderDirectorMatumiziComponent implements OnInit {
  all;
  constructor(public rest_framework:RestframeworkService, public router:Router) {
    this.rest_framework.getDirectorsMatumiziLists(localStorage.getItem('director')).then(data=>{

      this.all = data;
    });
   }

  ngOnInit() {
  }
   onselected(){
    // this.router.navigate(['/Orders/Directors-dashboard'])
  }

}
