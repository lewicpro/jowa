import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { RestframeworkService } from '../apiservice/restframework.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-maduka-list-report',
    templateUrl: './maduka-list-report.component.html',
    styleUrls: ['./maduka-list-report.component.css'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class MadukaListReportComponent implements OnInit {
  all;
  malipouser;
  next1;
  tambulisha;
  filtertext;
  allx;
  table='day';
  selectedData;
  jum: number;
  showOTPInput: boolean = false;
  OTPmessage: string = 'An OTP is sent to your number. You should receive it in 15 s'
  OTP: string = '';
  message: string;
  prev1;
  malipouser2;
  mkopo;
  day;
  Balancem;
  lservice_officer;
  mwezi;
  infosw;
  Faida;
  riba;
  date;
  jina;
  Rejesho_mwezi;
  Tarehe;
  array1 = [1, 2, 3, 4];
  reducer = (accumulator, currentValue) => accumulator + currentValue;
  jinalote;
  awamu;
  getMwezi;
  mdaa;
  array =['moja', 'mbili'];
  men;
  mopa  = '';
  responseDat;
  info;
  Create;
  v1: number;
  bwoy;
  v2: number;
  tarehe;
  no: number;
  v3: number;
  loan1: number;
  values: number;
  user;
  Interest: number;
  momba: number;
  Total_pay;
  loan_repay;
  Balance: number;
  mopai;

  responseData;
  kilichokopwa;
  d = new Date();
  Simu;
  worker;
  mwaka;
  monthes = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December', 'January', 'February', 'Mach', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  wilaya;
  stored;
  moxt
  infos;
  mwzi;
  returne;
  hour;
  times
  sec;
  min;
  allz;
  Director;
  mxoxt;
  UserData={'Tarehe':'', 'user':'', 'Amount':'', 'Description':''}
  constructor(public rest_framework:RestframeworkService, public router:Router) {
    this.min = this.d.getMinutes();
    this.hour = this.d.getHours()
    this.sec = this.d.getSeconds()
    this.mwzi = this.d.getMonth()
    this.moxt = parseInt(this.mwzi) + 1
    this.times = this.d.getFullYear() + "-" + this.moxt + "-" + this.d.getDate() + "  " + this.hour + ":" + this.min + ":" + this.sec
    this.Director=localStorage.getItem('DirectorDuka')
    this.rest_framework.geReportLists(localStorage.getItem('duka')).then(data=>{
      this.all = data;
      console.log(this.all)
    });
    this.Daily()

    // this.rest_framework.getFullReport().then(results=>{

    // })
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

  prev(){
    // console.log(this.prev1)
    this.rest_framework.getTransactionlistWorker1(this.prev1).then(data=>{
      this.all=data;
      // for(const j of this.all){
      //   this.next1 = j.next;
      //   console.log('1: '+ this.next1)
      //   console.log('2: '+ j.next)

      // }
      this.allz = this.all.results;
      this.next1 = this.all.next
      this.prev1 = this.all.previous
      // for(const n of this.all.results){
      //   this.allz = n;

      // }
   
    })

  }
  next(){
    // console.log(this.next1)
    this.rest_framework.getTransactionlistWorker1(this.next1).then(data=>{
      this.all=data;
      // for(const j of this.all){
      //   this.next1 = j.next;
      //   console.log('1: '+ this.next1)
      //   console.log('2: '+ j.next)

      // }
      this.allz = this.all.results;
      this.prev1 = this.all.previous
      this.next1 = this.all.next
      // for(const n of this.all.results){
      //   this.allz = n;

      // }
   
    })

  }

  Yealy(){

    this.table="year"
    this.rest_framework.getPartReport(localStorage.getItem('company'), this.table, this.times).then(result=>{
      this.all= result;
    })

  }
  Monthly(){

    this.table="month"
    this.rest_framework.getPartReport(localStorage.getItem('company'),this.table, this.times).then(result=>{
      this.all= result;
    })
    
  }
  Daily(){

    this.table="day"
    this.rest_framework.getPartReport(localStorage.getItem('company'),this.table, this.times).then(result=>{
      this.all= result;

    })

  }
  submit(){

  }

}
