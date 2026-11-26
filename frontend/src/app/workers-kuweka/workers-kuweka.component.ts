import { Component, OnInit, TemplateRef, ChangeDetectionStrategy } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ReceiptComponent } from '../receipt/receipt.component';
import { NgProgress } from 'ngx-progressbar';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DetailsViewComponent } from '../details-view/details-view.component';
import { AdminDashboardComponent } from '../admin-dashboard/admin-dashboard.component';
import { RestframeworkService } from '../apiservice/restframework.service';
import { Router } from '@angular/router';
import { WorkersDashboardComponent } from '../workers-dashboard/workers-dashboard.component';

@Component({
    selector: 'app-workers-kuweka',
    templateUrl: './workers-kuweka.component.html',
    styleUrls: ['./workers-kuweka.component.css'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class WorkersKuwekaComponent implements OnInit {
  options;
  userData={
    'Tarehe': '',
    'Jina_Mteja': '',
    'Amount': '',
    'Transaction_id': '',
    'Salio': '',
    'Phone': '',
    'Mtandao_au_Benki': '',
    'Wakala_name': '',
    'Officer_worker': '',
    'Directors_name': '',
    'Process': '',
    }
    malipouser;
    next1;
    tambulisha;
    filtertext;
    selectedData;
    jum: number;
    modalRef: BsModalRef;
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
    all;
    stored;
    moxt;
    infos;
    mwzi;
    hour;
    times
    sec;
    min;
    allz;
    mxoxt;
  

  constructor(private modalService: BsModalService, public restframework:RestframeworkService, public overall:WorkersDashboardComponent) {
    localStorage.removeItem('process')
    localStorage.setItem('process', 'Kuweka')
    this.worker = localStorage.getItem('worker-dir')
    this.userData.Wakala_name = localStorage.getItem('wakala')
    this.userData.Directors_name = localStorage.getItem('Director')
    this.userData.Officer_worker = localStorage.getItem('worker-dir')
    this.userData.Process = 'Kuweka'
    this.restframework.getTransactionlistWorker().then(data=>{
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
    this.restframework.getMtandao(localStorage.getItem('wakala')).then(data=>{
      this.options=data;
    })
    this.min = this.d.getMinutes();
    this.hour = this.d.getHours()
    this.sec = this.d.getSeconds()
    this.mwzi = this.d.getMonth()
    this.moxt = parseInt(this.mwzi) + 1
    this.times = this.d.getFullYear() + "-" + this.moxt + "-" + this.d.getDate() + "  " + this.hour + ":" + this.min + ":" + this.sec
    this.userData.Tarehe = this.times
   }
   calculate(){
    // this.time();
    // this.ngProgress.ref().start();
  if(this.mopai){
    // console.log('remainder1: '+ this.times)
    this.mdaa = this.mopai;

  }else{
    this.mdaa = this.times;
    // console.log('remainder2: '+ this.times)
  }
    
    
  
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
    this.restframework.TransactionsWorkerPosts(this.userData, 'TransactionWorkers/' + this.worker + '/').then((result) => {
      this.responseDat = result;
      // alert(this.userData.username)
      // localStorage.setItem('userData2', this.responseData);
     //  localStorage.setItem('user', this.userData.Username);
     //  this.UserCreate();
     //  this.UserInfo();
     this.overall.getdata()
     this.restframework.getTransactionlistWorker().then(data=>{
      this.all=data;
      
    })
    //  this.clean();
  
      // this.ngProgress.ref().complete();
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
