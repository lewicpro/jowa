import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { RestframeworkService } from '../apiservice/restframework.service';
import { WorkersDashboardComponent } from '../workers-dashboard/workers-dashboard.component';

@Component({
  selector: 'app-worker-page-returns',
  templateUrl: './worker-page-returns.component.html',
  styleUrls: ['./worker-page-returns.component.css']
})
export class WorkerPageReturnsComponent implements OnInit {
  options=['Nmb', 'Nbc', 'Mpesa', 'Tigopesa', 'Selcom', 'TPB']
  userData;
  malipouser;
  next1;
  tambulisha;



  Tigopesa=0;
  Tigopas;
  allg;
  Mpesa_Float=0;
  MpesaWorking_Balance=0;
  TPB=0;
  Equity=0;
  KCB=0;
  Airtel_Money=0;
  Halopesa_SuperAgent=0;
  Halopesa_SubSuperAgent=0;
  Vodacom_SuperAgent=0;
  Vodacom_Agent2=0;
  NBC=0;
  CRDB=0;
  NMB=0;
  DTB=0;
  TigopesaValue;
  Halopesa=0;
  TTCL_Money=0;
  TPBValue;
  // TTCL_Money=0;
  Nbc;
  SELCOM=0;
  halopexa;
  Mkononi=0;
  totol;
  mpesa_working_acc;



  filtertext;
  alldata;
  selectedData;
  crdb;
  momo;
  halopesa;
  jum: number;
  modalRef: BsModalRef;
  message: string;
  prev1;
  Tigopesaclone;
  Halopesa_SuperAgentclone;
  Halopesa_SubSuperAgentclone;
  Vodacom_SuperAgentclone;
  Vodacom_Agent2clone;
  DTBclone;
  CRDBclone;
  malipouser2;
  mkopo;
  mpesa_float;
  day;
  Balancem;
  ttcl_money
  lservice_officer;
  mwezi;
  infosw;
  Faida;
  fpesa_float;
  riba;
  date;
  tpb;
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
  access_bank;



  tpbclone;
  Selcomclone;

  Mpesa_Floatclone;
  MpesaWorking_Balanceclone;
  nmbclone;
  Mkononiclone;
  Access_Bankclone;
  Equityclone;
  KCBclone;
  Airtel_Moneyclone;
  TTCL_Moneyclone;
  State_output
  Wakala_name;
  Halopesaclone;
  Mtaji;
  alls;
  status;



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
  all;
  stored;
  moxt;
  infos;
  mwzi;
  hour;
  nbcclone;
  times
  sec;
  min;
  dtb;
  allz;
  results;
  // halopesa;
  mxoxt;
  username: any;
  // DTB: any;
  Mpesa: any;
  Access_Bank=0;
  Selcom: any;
  // Halopesa: any;
  Director_name: any;
  // TTCL_Money: any;
  Nmb: any;
  airtel_money: any;
  kcb: any;
  equity: any;
  salopesa_supersgent: any;
  halopesa_subsuperagent: any;
  vodacom_superAgent: any;
  vodacom_agent2: any;
  halopesa_supersgent: any;
  halopesa_superagent: any;
  // Nbc: any;


  constructor(private modalService: BsModalService, public restframework:RestframeworkService, public overall:WorkersDashboardComponent) {
    localStorage.removeItem('process')
    localStorage.setItem('process', 'Kuweka')
    this.worker = localStorage.getItem('worker-dir')
    this.Wakala_name =  localStorage.getItem('wakala')
    // this.Directors_name = localStorage.getItem('Director')
    // this.Officer_worker = localStorage.getItem('worker-dir')
    // this.userData.Process = 'Kuweka'
    this.getalldata();
    this.getdatavisible();
    this.min = this.d.getMinutes();
    this.hour = this.d.getHours()
    this.sec = this.d.getSeconds()
    this.mwzi = this.d.getMonth()
    this.moxt = parseInt(this.mwzi) + 1
    this.times = this.d.getFullYear() + "-" + this.moxt + "-" + this.d.getDate() + "  " + this.hour + ":" + this.min + ":" + this.sec
    this.Tarehe = this.times


    this.restframework.getMtajiLists(this.Wakala_name).then(datagiven=>{
      this.results =datagiven
      this.alldata=this.results.results;
      this.next1 = this.results.next
      this.prev1 = this.results.previous
      for(const m of this.alldata){
        this.Mtaji=m.Mtaji
        console.log('mtajiiii : '+ this.Mtaji)

      }


    }, (err) => {
      alert(err);

    });

   }

   getalldata(){
    this.restframework.getKilichobakilist(this.worker).then(data=>{
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
   calculate(){
  if(this.Tigopesa){
    this.Tigopesaclone = this.Tigopesa;




  }else{
    this.Tigopesaclone = 0;

  }
  if(this.TPB){
    this.tpbclone = this.TPB;



  }else{
    this.tpbclone = 0;

  }
  if(this.NBC){
    this.nbcclone = this.NBC;



  }else{
    this.nbcclone = 0;

  }
  if(this.NMB){
    console.log('imepita if nmb')
    this.nmbclone = this.NMB;



  }else{
    this.nmbclone = 0;
    console.log('imepita else nmb')

  }
  if(this.SELCOM){
    this.Selcomclone = this.SELCOM;



  }else{
    this.Selcomclone = 0;

  }
  if(this.Mkononi){
    this.Mkononiclone = this.Mkononi;



  }else{
    this.Mkononiclone = 0;

  }
  if(this.Mpesa_Float){
    this.Mpesa_Floatclone = this.Mpesa_Float;



  }else{
    this.Mpesa_Floatclone = 0;

  }
  if(this.MpesaWorking_Balance){
    this.MpesaWorking_Balanceclone = this.MpesaWorking_Balance;



  }else{
    this.MpesaWorking_Balanceclone = 0;

  }

  if(this.Access_Bank){
    this.Access_Bankclone = this.Access_Bank;



  }else{
    this.Access_Bankclone = 0;

  }
  if(this.CRDB){
    this.CRDBclone = this.CRDB;



  }else{
    this.CRDBclone = 0;

  }
  if(this.DTB){
    this.DTBclone = this.DTB;



  }else{
    this.DTBclone = 0;

  }

  if(this.Halopesa){
    this.Halopesaclone = this.Halopesa;



  }else{
    this.Halopesaclone = 0;

  }
  if(this.TTCL_Money){
    this.TTCL_Moneyclone = this.TTCL_Money;



  }else{
    this.TTCL_Moneyclone = 0;

  }
  if(this.Airtel_Money){
    this.Airtel_Moneyclone = this.Airtel_Money;



  }else{
    this.Airtel_Moneyclone = 0;

  }
  if(this.KCB){
    this.KCBclone = this.KCB;



  }else{
    this.KCBclone = 0;

  }
  if(this.Equity){
    this.Equityclone = this.Equity;



  }else{
    this.Equityclone = 0;

  }
  if(this.Halopesa_SuperAgent){
    this.Halopesa_SuperAgentclone = this.Halopesa_SuperAgent;



  }else{
    this.Halopesa_SuperAgentclone = 0;

  }
  if(this.Halopesa_SubSuperAgent){
    this.Halopesa_SubSuperAgentclone = this.Halopesa_SubSuperAgent;



  }else{
    this.Halopesa_SubSuperAgentclone = 0;

  }
  if(this.Vodacom_SuperAgent){
    this.Vodacom_SuperAgentclone = this.Vodacom_SuperAgent;



  }else{
    this.Vodacom_SuperAgentclone = 0;

  }
  if(this.Vodacom_Agent2){
    this.Vodacom_Agent2clone = this.Vodacom_Agent2;



  }else{
    this.Vodacom_Agent2clone = 0;

  }
  console.log('Mtaji :' + this.Mtaji)
  this.totol = this.Mpesa_Floatclone + this.MpesaWorking_Balanceclone + this.Tigopesaclone + this.tpbclone + this.nbcclone + this.nmbclone + this.Selcomclone + this.Mkononiclone + this.Access_Bankclone + this.DTBclone + this.CRDBclone + this.Halopesaclone + this.TTCL_Moneyclone + this.KCBclone + this.Equityclone + this.Airtel_Moneyclone + this.Vodacom_Agent2clone + this.Vodacom_SuperAgentclone + this.Halopesa_SubSuperAgentclone + this.Halopesa_SuperAgentclone

  this.State_output = this.totol - this.Mtaji
  if(parseInt(this.Mtaji) > parseInt(this.totol)){
    this.status='Loss'

  }
  else if (parseInt(this.Mtaji) < parseInt(this.totol)) {
    this.status='Profit'

  } else if(parseInt(this.Mtaji) === parseInt(this.totol)){

  }






    }
    getdatavisible(){
      this.restframework.getInputMtandao(localStorage.getItem('wakala')).then(data=>{
        this.alls=data;
        this.allg = this.alls.results;
        this.next1 = this.alls.next
        this.prev1 = this.alls.previous

        for(const j of this.allg){
          this.username=j.username
          this.dtb=j.DTB
          this.Tigopas=j.Tigopesa
          this.mpesa_working_acc=j.Mpesa
          this.mpesa_float=j.Mpesa_Float
          this.access_bank=j.Access_Bank
          this.Selcom=j.Selcom
          this.halopesa_superagent=j.Halopesa_SuperAgent
          this.halopesa_subsuperagent=j.Halopesa_SubSuperAgent
          this.vodacom_superAgent=j.Vodacom_SuperAgent
          this.vodacom_agent2=j.Vodacom_Agent2
          this.halopexa=j.Halopesa
          this.airtel_money=j.Airtel_Money
          this.kcb=j.KCB
          this.equity=j.Equity
          this.Director_name=j.Director_name
          this.Wakala_name=j.Wakala_name
          this.ttcl_money=j.TTCL_Money
          this.tpb=j.TPB
          this.Nbc=j.Nbc
          this.crdb=j.CRDB
          this.Nmb=j.NMB

        }
      })
    }


  ngOnInit() {
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, {class: 'modal-sm'});
  }

  confirm(): void {
    this.tuma();
    // this.message = 'Confirmed!';
    this.modalRef.hide();
  }

  tuma() {
    this.userData={
      Tarehe: this.times,
      MpesaWorking_Balance: this.MpesaWorking_Balanceclone,
      Mpesa_Float: this.Mpesa_Floatclone,
      Tigopesa: this.Tigopesa,
      Halopesa: this.Halopesa,
      TTCL_Money: this.TTCL_Money,
      TPB: this.TPB,
      CRDB: this.CRDB,
      DTB: this.DTB,
      NBC: this.NBC,
      Halopesa_SuperAgent: this.Halopesa_SuperAgent,
      Halopesa_SubSuperAgent: this.Halopesa_SubSuperAgent,
      Vodacom_SuperAgent: this.Vodacom_SuperAgent,
      Vodacom_Agent2: this.Vodacom_Agent2,
      Equity: this.Equity,
      KCB: this.KCB,
      Airtel_Money: this.Airtel_Money,
      Access_Bank: this.Access_Bank,
      NMB: this.NMB,
      SELCOM: this.SELCOM,
      Wakala_name: localStorage.getItem('wakala'),
      Officer_worker: localStorage.getItem('worker-dir'),
      Directors_name: '',
      Mkononi: this.Mkononi,
      Status: this.status,
      body: '',
      }

      console.log('mpesa float :'+this.Mpesa_Floatclone)
    this.restframework.TransactionsWorkerPosts(this.userData,'KilichobakiPost/').then((result) => {
      this.responseDat = result;
      // alert(this.userData.username)
      // localStorage.setItem('userData2', this.responseData);
     //  localStorage.setItem('user', this.userData.Username);
     //  this.UserCreate();
     //  this.UserInfo();
    //  this.overall.getdata()
    this.getalldata();
    //  this.clean();

      // this.ngProgress.done();
      }, (err) => {
        alert('error');

      });


  }


  decline(): void {
    // this.message = 'Declined!';
    this.modalRef.hide();
  }


  prev(){
    // console.log(this.prev1)
    this.restframework.getTransactionlistWorker1(this.prev1).then(data=>{
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
    this.restframework.getTransactionlistWorker1(this.next1).then(data=>{
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

}
