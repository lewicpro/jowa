import { Component, OnInit, TemplateRef, ChangeDetectionStrategy } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { RestframeworkService } from '../apiservice/restframework.service';

@Component({
    selector: 'app-worker-madeni',
    templateUrl: './worker-madeni.component.html',
    styleUrls: ['./worker-madeni.component.css'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class WorkerMadeniComponent implements OnInit {
  all;
  jum;
  mdaa;
  bwoy;
  momba;
  UserData={
    'Tarehe': '',
    'user': '',
    'Jina': '',
    'Amount': '',
    'Transaction_id': '',
    'Salio': '',
    'Wakala_name': '',
    'Officer_worker': '',
    'Directors_name': '',
    'Description': '',

  }
  modalRef: BsModalRef;
  worker; 
  stored;
  moxt;
  infos;
  mwzi;
  hour;
  times
  sec;
  min;
    
  responseData;
  mopai;
  kilichokopwa;
  d = new Date();
  Simu;
  mwaka;
  monthes = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December', 'January', 'February', 'Mach', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  wilaya;



  constructor(public restapi:RestframeworkService, private modalService: BsModalService,) {
    this.worker=localStorage.getItem('worker-dir')
    this.UserData.Officer_worker = localStorage.getItem('worker-dir')
    this.restapi.getWorkerMadeniLists(localStorage.getItem('worker-dir')).then(data=>{
      this.all=data;
    })
    this.min = this.d.getMinutes();
    this.hour = this.d.getHours()
    this.sec = this.d.getSeconds()
    this.mwzi = this.d.getMonth()
    this.moxt = parseInt(this.mwzi) + 1
    this.times = this.d.getFullYear() + "-" + this.moxt + "-" + this.d.getDate() + "  " + this.hour + ":" + this.min + ":" + this.sec
    this.UserData.Tarehe = this.times
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
  } }
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
   
  decline(): void {
    // this.message = 'Declined!';
    this.modalRef.hide();
  }
  pay(){



  }

  tuma() {
    this.restapi.TransactionsWorkerPosts(this.UserData, 'MadeniwkalaWorker/' + localStorage.getItem('worker-dir') + '/').then((result) => {
      // this.responseDat = result;
      // alert(this.userData.username)
      // localStorage.setItem('userData2', this.responseData);
     //  localStorage.setItem('user', this.userData.Username);
     //  this.UserCreate();
     //  this.UserInfo();
     this.restapi.getWorkerMadeniLists(localStorage.getItem('worker-dir')).then(data=>{
      this.all=data;
    })
    //  this.clean();
  
      // this.ngProgress.ref().complete();
      }, (err) => {
        alert('error');
 
      });
  

  }

}
