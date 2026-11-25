import { Component, OnInit, ViewChild , ElementRef, AfterViewInit} from '@angular/core';
import { Router } from '@angular/router';
import * as $ from 'jquery';
import { RestframeworkService } from '../apiservice/restframework.service';

declare const CanvasJS: any;
@Component({
  selector: 'app-duka-director-report',
  templateUrl: './duka-director-report.component.html',
  styleUrls: ['./duka-director-report.component.css']
})
export class DukaDirectorReportComponent implements OnInit {
  @ViewChild('barChart')
  // barChart: ElementRef<HTMLCanvasElement>;
  canvas: any;
  ctx: any;
  @ViewChild('barChart') barChart:ElementRef;
  bars:any;
  all;
  malipouser;
  next1;
  yeare="2021"
  showbar="True"
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
  wowo;
  title="graph"
  shown="table"
  // title="graph"
  day;
  category="False"
  Balancem;
  lservice_officer;
  netprofitval="False"
  expenseval="False"
  profitval="False"
  borrowersval="False"
  yearval="True"
  variantval="False"
  mwezi;
  infosw;
  prof;
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
  // shown="False"
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
  gemon;
  mxoxt;
  UserData={'Tarehe':'', 'user':'', 'Amount':'', 'Description':''}
  ended: any;
  started: any;
  constructor(public rest_framework:RestframeworkService, public router:Router, private elementRef: ElementRef) {

    this.yearval="False"
    this.getscrol()
    this.pieChartBrowser()
    this.getdataavailable()
    this.min = this.d.getMinutes();
    this.hour = this.d.getHours()
    this.sec = this.d.getSeconds()
    this.mwzi = this.d.getMonth()
    this.moxt = parseInt(this.mwzi) + 1
    this.times = this.d.getFullYear() + "-" + this.moxt + "-" + this.d.getDate() + "  " + this.hour + ":" + this.min + ":" + this.sec
    this.Director=localStorage.getItem('DirectorDuka')
    // this.Daily()
    // this.createBarChart();
   }

   ngOnInit(){
    $(document).ready(function() {
      var chart = new CanvasJS.Chart("chartContainer",
      {
        title:{
          text: "Price History, In Pounds"
        },
        animationEnabled: true,
        axisY:{
          titleFontFamily: "arial",
          titleFontSize: 12,
          includeZero: false
        },
        toolTip: {
          shared: true
        },
      data: [
                {

          type: "spline",
          name: "ticketbis",
          showInLegend: true,
              dataPoints: [
          {label:"6-02-16", y: 254.02},
          {label: "7-02-16", y: 264.99},
          {label: "8-02-16", y: 264.99},
          {label: "9-02-16", y: 290.00},
          {label: "10-02-16", y: 285.00},
          {label: "11-02-16", y: 369.00},
          {label: "12-02-16", y: 329.30}
      ]
        },
                {

          type: "spline",
          name: "livefootball",
          showInLegend: true,
              dataPoints: [
          {label:"6-02-16", y: 237.50},
          {label: "7-02-16", y: 237.50},
          {label: "8-02-16", y: 237.50},
          {label: "9-02-16", y: 237.50},
          {label: "10-02-16", y: 237.50},
          {label: "11-02-16", y: 0},
          {label: "12-02-16", y: 469.25}
      ]
        },
                {

          type: "spline",
          name: "Kix",
          showInLegend: true,
              dataPoints: [
          {label:"6-02-16", y: 220},
          {label: "7-02-16", y: 220},
          {label: "8-02-16", y: 220},
          {label: "9-02-16", y: 320},
          {label: "10-02-16", y: 320},
          {label: "11-02-16", y: 320},
          {label: "12-02-16", y: 320}
      ]
        },
                {

          type: "spline",
          name: "Sports Events 365",
          showInLegend: true,
              dataPoints: [
          {label:"6-02-16", y: 357},
          {label: "7-02-16", y: 356},
          {label: "8-02-16", y: 356},
          {label: "9-02-16", y: 357},
          {label: "10-02-16", y: 363},
          {label: "11-02-16", y: 404},
          {label: "12-02-16", y: 410}
      ]
        },
                {

          type: "spline",
          name: "FootballTicketpad",
          showInLegend: true,
              dataPoints: [
          {label:"6-02-16", y: 823.53},
          {label: "7-02-16", y: 823.53},
          {label: "8-02-16", y: 823.53},
          {label: "9-02-16", y: 823.53},
          {label: "10-02-16", y: 941.18},
          {label: "11-02-16", y: 0},
          {label: "12-02-16", y: 47.07}
      ]
        },
                {

          type: "spline",
          name: "HotFootballTickets",
          showInLegend: true,
              dataPoints: [
          {label:"6-02-16", y: 290},
          {label: "7-02-16", y: 324},
          {label: "8-02-16", y: 314},
          {label: "9-02-16", y: 330},
          {label: "10-02-16", y: 330},
          {label: "11-02-16", y: 402},
          {label: "12-02-16", y: 402}
      ]
        },
                {

          type: "spline",
          name: "guaranteetickets",
          showInLegend: true,
              dataPoints: [
          {label:"6-02-16", y: 299.71},
          {label: "7-02-16", y: 299.71},
          {label: "8-02-16", y: 300.10},
          {label: "9-02-16", y: 300.88},
          {label: "10-02-16", y: 308.65},
          {label: "11-02-16", y: 305.72},
          {label: "12-02-16", y: 305.72}
      ]
        },
                {

          type: "spline",
          name: "ticket2",
          showInLegend: true,
              dataPoints: [
          {label:"6-02-16", y: 465.34},
          {label: "7-02-16", y: 463.92},
          {label: "8-02-16", y: 463.92},
          {label: "9-02-16", y: 464.01},
          {label: "10-02-16", y: 464.01},
          {label: "11-02-16", y: 503.68},
          {label: "12-02-16", y: 503.57}
      ]
        },
          ],
        legend:{
          cursor:"pointer",
          itemclick:function(e){
            if(typeof(e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
              e.dataSeries.visible = false;
            }
            else {
              e.dataSeries.visible = true;
            }
            chart.render();
          }
        }
      });

  chart.render();
  });
  }

  calculate(){

  }
  public context: CanvasRenderingContext2D;
  createBarChart() {


    console.log('imefikia : 1 ')
        console.log('imefikia :  ')
  }

  getdataavailable(){
    this.rest_framework.getProductLists(localStorage.getItem('company')).then(data=>{

      this.all = data;

    });
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


      // }
      this.allz = this.all.results;
      this.prev1 = this.all.previous
      this.next1 = this.all.next

    })

  }
  start(momo){
    this.started = momo
  }
  remained(boc){



  }
  end(momo){
    this.ended = momo

  }
  submitdate(){
    this.rest_framework.getUsersDateData2(localStorage.getItem('company'), this.started, this.ended ).then(sub=>{
      this.all=sub
      this.sum =0;
      this.prof=0;
      this.given =0;
      for(let j=0; j < this.all.length; j++){
        this.dom = j;
        if(this.all[j].info !== 'returned'){
          this.sum = this.sum*1 + this.all[j].Total*1
          this.prof = this.prof*1 + this.all[j].Profit*1
        }

      }
    })
  }

  Yealy(){

    this.table="year"
    this.rest_framework.getPartReport(localStorage.getItem('company'), this.table, this.times).then(result=>{
      this.all= result;
      this.sum =0;
      this.prof=0;
      this.given =0;
      for(let j=0; j < this.all.length; j++){
        this.dom = j;
        if(this.all[j].info !== 'returned'){
          this.sum = this.sum*1 + this.all[j].Total*1
          this.prof = this.prof*1 + this.all[j].Profit*1



        }

      }
    })

  }
  getscrol(){
    this.rest_framework.getdata('monthlydata/'+'?company='+localStorage.getItem('company')).then(data=>{
      this.wowo=data

    })
  }
  submitselected(momo){
    this.rest_framework.getdata('monthlydata/'+'?company='+localStorage.getItem('company')+'&'+'category='+this.category).then(data=>{
      this.wowo=data

    })
  }
  Monthly(){

    this.table="month"
    this.rest_framework.getPartReport(localStorage.getItem('company'),this.table, this.times).then(result=>{
      this.all= result;
      this.sum =0;
      this.prof=0;
      this.given =0;

      for(let j=0; j < this.all.length; j++){
        this.dom = j;
        if(this.all[j].info !== 'returned'){
          this.sum = this.sum*1 + this.all[j].Total*1
          this.prof = this.prof*1 + this.all[j].Profit*1



        }



      }
    })

  }
  dom;
  sum;
  given;
  Daily(){

    this.table="day"
    this.rest_framework.getPartReport(localStorage.getItem('company'),this.table, this.times).then(result=>{
      this.all= result;
      this.sum =0;
      this.prof=0;
      this.given =0;
      for(let j=0; j < this.all.length; j++){
        this.dom = j;
        if(this.all[j].info !== 'returned'){
          this.sum = this.sum*1 + this.all[j].Total*1
          this.prof = this.prof*1 + this.all[j].Profit*1



        }


      }











    })

  }
  submit(){


  }
  rmemo(boc){
    this.gemon = boc

  }

  variant(){

    this.variantval="True"
    this.yearval="False"
    this.getdataavailable()
    this.table='False'
    this.expenseval="False"
    this.borrowersval="False"
    this.profitval="False"
    this.netprofitval="False"


  }
  year(){
    this.showbar="True"
    this.yearval="True"
    this.variantval="False"
    this.table='custom'
    this.expenseval="False"
    this.borrowersval="False"
    this.profitval="False"
    this.netprofitval="False"
  }
  shownclick(){
    this.pieChartBrowser()
    if(this.shown=='graph'){
      this.shown="table"
      this.title="graph"

    }else{
      this.shown="graph"
      this.title="table"

    }


  }
  expenses(){
    this.showbar="False"
    this.yearval="False"
    this.variantval="False"
    this.expenseval="True"
    // this.shown="table"
    this.table='False'
    this.category='expense'
    this.borrowersval="False"
    this.profitval="False"
    this.netprofitval="False"
    this.rest_framework.getdata('monthlydata/'+'?company='+localStorage.getItem('company')+'&'+'category='+this.category).then(data=>{
      this.wowo=data
      this.sum =0;
      this.prof=0;
      this.given =0;
      for(let j=0; j < this.wowo.length; j++){
        this.dom = j;

        this.sum = this.sum*1 + this.wowo[j].sum*1
        this.prof = 0






      }

    })


  }
  expensestask(month){

    this.yearval="False"
    this.variantval="False"
    this.expenseval="True"
    // this.shown="table"
    this.table='False'
    this.category='expense'
    this.borrowersval="False"
    this.profitval="False"
    this.netprofitval="False"
    this.rest_framework.getdata('getmonthlycalc/'+'?company='+localStorage.getItem('company')+'&'+'category='+this.category+'&'+'month='+month+'&'+'year='+this.yeare).then(data=>{
      localStorage.setItem('graphlink', 'getmonthlycalc/'+'?company='+localStorage.getItem('company')+'&'+'category='+this.category+'&'+'month='+month+'&'+'year='+this.yeare)
      // this.router.navigate(['DukaMmilikiDashboard/Graph'])
      this.wowo=data
      this.sum =0;
      this.prof=0;
      this.given =0;
      for(let j=0; j < this.wowo.length; j++){
        this.dom = j;

        this.sum = this.sum*1 + this.wowo[j].sum*1
        this.prof = 0






      }

    })


  }
  borrowers(){
    this.showbar="False"
    this.yearval="False"
    this.variantval="False"
    this.expenseval="False"
    this.borrowersval="True"
    this.category='borrowers'
    this.table='False'
    this.profitval="False"
    this.netprofitval="False"
    this.rest_framework.getdata('monthlydata/'+'?company='+localStorage.getItem('company')+'&'+'category='+this.category).then(data=>{
      this.wowo=data
      this.sum =0;
      this.prof=0;
      this.given =0;
      for(let j=0; j < this.wowo.length; j++){
        this.dom = j;
        if(this.wowo[j].info !== 'returned'){
          this.sum = this.sum*1 + this.wowo[j].sum*1
          this.prof = 0



        }


      }

    })

  }
  borrowersvalues(month){
    this.yearval="False"
    this.variantval="False"
    this.expenseval="False"
    this.borrowersval="True"
    this.category='borrowers'
    this.table='False'
    this.profitval="False"
    this.netprofitval="False"
    this.rest_framework.getdata('getmonthlycalc/'+'?company='+localStorage.getItem('company')+'&'+'category='+this.category+'&'+'month='+month+'&'+'year='+this.yeare).then(data=>{
      this.wowo=data
      this.sum =0;
      this.prof=0;
      this.given =0;
      for(let j=0; j < this.wowo.length; j++){
        this.dom = j;
        this.sum = this.sum*1 + this.wowo[j].sum*1
        this.prof = 0






      }

    })

  }
  profit(){
    this.showbar="False"
    this.yearval="False"
    this.variantval="False"
    this.expenseval="False"
    this.category='profits'
    this.borrowersval="False"
    this.profitval="True"
    this.table='False'
    this.netprofitval="False"
    this.rest_framework.getdata('monthlydata/'+'?company='+localStorage.getItem('company')+'&'+'category='+this.category).then(data=>{
      this.wowo=data
      this.sum =0;
      this.prof=0;
      this.given =0;
      for(let j=0; j < this.wowo.length; j++){
        this.dom = j;
        this.sum = this.sum*1 + this.wowo[j].sum*1
        this.prof = 0






      }

    })

  }

  profitmonth(month){
    this.yearval="False"
    this.variantval="False"
    this.expenseval="False"
    this.category='profits'
    this.borrowersval="False"
    this.profitval="True"
    this.table='False'
    this.netprofitval="False"
    this.rest_framework.getdata('getmonthlycalc/'+'?company='+localStorage.getItem('company')+'&'+'category='+this.category+'&'+'month='+month+'&'+'year='+this.yeare).then(data=>{
      this.wowo=data
      this.sum =0;
      this.prof=0;
      this.given =0;
      for(let j=0; j < this.wowo.length; j++){
        this.dom = j;

        this.sum = this.sum*1 + this.wowo[j].sum*1
        this.prof = 0






      }

    })

  }
  netprofit(){
    this.yearval="False"
    this.variantval="False"
    this.expenseval="False"
    this.borrowersval="False"
    this.category='netprofits'
    this.profitval="False"
    this.table='False'
    this.netprofitval="True"
    this.rest_framework.getdata('monthlydata/'+'?company='+localStorage.getItem('company')+'&'+'category='+this.category).then(data=>{
      this.wowo=data
      this.sum =0;
      this.prof=0;
      this.given =0;
      for(let j=0; j < this.wowo.length; j++){
        this.dom = j;
        if(this.wowo[j].info !== 'returned'){
          this.sum = this.sum*1 + this.wowo[j].Total*1
          this.prof = this.prof*1 + this.wowo[j].Profit*1



        }


      }

    })

  }

  pieChartBrowser(): void {


  }



}
