import { Component, OnInit } from '@angular/core';
import { LowlayerComponent } from '../lowlayer/lowlayer.component';
import { ActivatedRoute, Router } from '@angular/router';
import { RestframeworkService } from '../apiservice/restframework.service';

@Component({
  selector: 'app-maduka-yote-bidhaa-zote',
  templateUrl: './maduka-yote-bidhaa-zote.component.html',
  styleUrls: ['./maduka-yote-bidhaa-zote.component.css']
})
export class MadukaYoteBidhaaZoteComponent {
  all;
  UserData={'Tarehe':'', 'user':'', 'Amount':'', 'Description':''}
  constructor(public rest_framework:RestframeworkService, public router:Router) {
    this.rest_framework.getProductLists(localStorage.getItem('duka')).then(data=>{

      this.all = data;
    });
   }

  ngOnInit() {
  }
  calculate(){
    
  }

  PostData(){
    this.rest_framework.getLoginPosts(this.UserData, 'Order-Matumizi/' + localStorage.getItem('Orderworker') + '/').then((result)=>{

    })
  }
   onselected(){
    // this.router.navigate(['/Orders/Directors-dashboard'])
  }

}
