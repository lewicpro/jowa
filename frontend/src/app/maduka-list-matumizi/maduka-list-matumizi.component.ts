import { Component, OnInit, TemplateRef } from '@angular/core';
import { RestframeworkService } from '../apiservice/restframework.service';
import { Router } from '@angular/router';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-maduka-list-matumizi',
  templateUrl: './maduka-list-matumizi.component.html',
  styleUrls: ['./maduka-list-matumizi.component.css']
})
export class MadukaListMatumiziComponent implements OnInit {
  options;
  process=['Kutoa','Kuweka']
  userData={
    'Tarehe': '',
    'user': '',
    'Amount': '',
    'Jina_Mteja': '',
    'Description': '',
    'company': '',
  
    // 'TotalAmount': '',
    // 'body': '',
    }
    malipouser;
    next1;
    tambulisha;
    filtertext;
    modalRef: BsModalRef;
    allx;
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
    all;
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
    mxoxt;
  

  constructor(private modalService: BsModalService, public restframework:RestframeworkService, public router:Router) {
    this.min = this.d.getMinutes();
    this.hour = this.d.getHours()
    this.sec = this.d.getSeconds()
    this.mwzi = this.d.getMonth()
    this.moxt = parseInt(this.mwzi) + 1
    this.times = this.d.getFullYear() + "-" + this.moxt + "-" + this.d.getDate() + "  " + this.hour + ":" + this.min + ":" + this.sec
    this.userData.Tarehe = this.times
    // this.userData.user = localStorage.getItem('DirectorDuka')
    this.userData.company = localStorage.getItem('company')
    this.getdata()

   
    

   }
   getdata(){
    this.restframework.getDukWeb2Matumizi(localStorage.getItem('company')).then(data=>{
      this.all=data;
    })

   }

 

 
 
    
    

  ngOnInit() {
  }


 

  // }
  tuma() {
    this.restframework.TransactionsWorkerPosts(this.userData,'DukaMatumizi/'+ localStorage.getItem('duka') + '/').then((result) => {
      this.responseDat = result;
      this.getdata()

      }, (err) => {
        alert('error');
 
      });
  

  }
  
 
  // decline(): void {
  //   // this.message = 'Declined!';
  //   this.modalRef.hide();
  // }


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
  approve(){}


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
  // async presentToast(message, show_button, position, duration) {
  //   const toast = await this.toastCtrl.create({
  //     message: message,
  //     showCloseButton: show_button,
  //     position: position,
  //     duration: duration
  //   });
  //   toast.present();

  // }




  register() {

  }


  logout(){
    this.router.navigate(['login'])
  }
  doRefresh(event) {
    console.log('Begin async operation');

    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
      this.getdata();
    }, 2000);
  }


  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, {class: 'modal-sm'});
  }

  confirm(): void {
   this.tuma()
    this.modalRef.hide();
  }
 
  decline(): void {
    this.modalRef.hide();
  }
  
 
  


}