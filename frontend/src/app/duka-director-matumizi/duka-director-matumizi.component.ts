import { Component, OnInit, TemplateRef, ChangeDetectionStrategy } from '@angular/core';
import { RestframeworkService } from '../apiservice/restframework.service';
import { Router } from '@angular/router';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { BsModalService } from 'ngx-bootstrap/modal';

@Component({
    selector: 'app-duka-director-matumizi',
    templateUrl: './duka-director-matumizi.component.html',
    styleUrls: ['./duka-director-matumizi.component.css'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class DukaDirectorMatumiziComponent implements OnInit {
  options;
  process=['Kutoa','Kuweka']
  advancd="False"
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
    getata;
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
    pk;
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
    responseData1;
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
    Total_expenses: any;
  total_stock_profit: any;
  total_borrowed_quantity: any;
  given: number;
  dom: number;
  sum: number;


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
    this.TotalDatacheck()




   }
   showOptions(){
     console.log('passed close1')
     if(this.advancd="False"){
      console.log('passed close2')
       this.advancd="True"

     }else{
      console.log('passed close3')
       this.advancd="False"
     }

   }
   hideOptions(){
     this.TotalDatacheck()

      this.advancd="False"
   }
   TotalDatacheck(){
    this.restframework.getTotalExpenses('?company='+localStorage.getItem('company')).then(res=>{
      this.responseData1=res;
      this.Total_expenses = this.responseData1.total_Expenses
      // this.total_stock_profit = this.responseData1.total_stock_profit
      // this.total_borrowed_quantity = this.responseData1.total_stock_borrowed_quantity


    })

  }
  // runservice(start, end){

  //   this.restframework.getDuka('dategiven'+'/?company='+localStorage.getItem('company')+'&'+'start='+start+'&'+'end='+end).then(res=>{
  //     this.getata=res
  //   })
  // }
  runservice(start, end){

    this.restframework.getUsersSearch(localStorage.getItem('company'), start, end ).then(res=>{
      this.getata=res
      this.sum =0;
      for(let j=0; j < this.getata.length; j++){
        this.dom = j;
        this.sum = this.sum*1 + this.getata[j].Amount*1
      }
    })
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
    this.restframework.TransactionsWorkerPosts(this.userData,'DukaWeb2Matumizi/'+ localStorage.getItem('company') + '/').then((result) => {
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

  openModal2(template2: TemplateRef<any>, pk) {
    this.pk=pk
    this.modalRef = this.modalService.show(template2, {class: 'modal-sm'});
  }

  confirm2(): void {
   this.delete()
    this.modalRef.hide();
  }

  decline2(): void {
    this.modalRef.hide();
  }

  delete(){
    this.restframework.deletePost('expensesdel/'+this.pk+'/').then(res=>{
      this.getdata()

    })

  }




}
