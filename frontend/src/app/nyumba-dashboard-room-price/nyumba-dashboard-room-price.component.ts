import { Component, OnInit } from '@angular/core';
import { RestframeworkService } from '../apiservice/restframework.service';

@Component({
  selector: 'app-nyumba-dashboard-room-price',
  templateUrl: './nyumba-dashboard-room-price.component.html',
  styleUrls: ['./nyumba-dashboard-room-price.component.css']
})
export class NyumbaDashboardRoomPriceComponent implements OnInit {
  username;
  all;
  jinalote;
  Daily;
  responseData;
  Rent_budget;
  Time_interval;
  Created;
  hour;
  times;
  sec;
  min;
  mou;
  mwzi;
  d = new Date();
  moxt;

  constructor(public restapi:RestframeworkService) {
    this.min = this.d.getMinutes();
    this.hour = this.d.getHours()
    this.sec = this.d.getSeconds()
    this.mwzi = this.d.getMonth()
    this.moxt = parseInt(this.mwzi) + 1
    this.mou = this.d.getFullYear()+"-"+this.moxt+"-"+this.d.getDate()+" "+this.hour+":"+this.min+":"+"56.752978"+"+00"+":"+"00"
    this.times = this.mou
    // this.Created.date = this.times;
    this.getdata()
    
   }

   getdata(){
    this.restapi.getUserRent().then(data=>{
      this.all = data;
      for (const m of this.all){
        this.jinalote = m.user;
        console.log(this.jinalote)


      }

    })
   }

  ngOnInit() {
  }

  postRent(){
    this.Created={Time_interval:this.Time_interval, Rent_budget:this.Rent_budget, user:this.jinalote, status:'Active',  Daily:this.Daily, date:this.times }
    // this.ngProgress.start();
    // console.log('passed');
    this.restapi.wapangajiPost(this.Created, 'rent/').then((result) => {
      this.responseData = result;
      // this.nyumba.getvalue();
      // this.nyumbaall.getval();
      this.getdata()
      // this.UserCreates();
      // console.log(this.responseData);
      // console.log(this.Created);
      // alert(this.userData.username)
  
      // localStorage.setItem('userData2', this.responseData);
      // this.router.navigate(['/Admindash/Ongeza-mkopo']);
      // this.ngProgress.done();
      }, (err) => {
        alert('ended on creating wapangaji');
 
      });
      

  }

}
