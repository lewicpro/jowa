import { Component, OnInit, TemplateRef, ChangeDetectionStrategy } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { ReceiptComponent } from '../receipt/receipt.component';
import { NgProgress } from 'ngx-progressbar';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DetailsViewComponent } from '../details-view/details-view.component';
import { AdminDashboardComponent } from '../admin-dashboard/admin-dashboard.component';
import { RestframeworkService } from '../apiservice/restframework.service';
import { Router } from '@angular/router';
import { EventEmitter } from 'protractor';
import { DasboardMkopeshajiComponent } from '../dasboard-mkopeshaji/dasboard-mkopeshaji.component';

@Component({
    selector: 'app-dashboard-mkopeshaji-mkopo-lipa',
    templateUrl: './dashboard-mkopeshaji-mkopo-lipa.component.html',
    styleUrls: ['./dashboard-mkopeshaji-mkopo-lipa.component.css'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class DashboardMkopeshajiMkopoLipaComponent implements OnInit {
  // @Output() OutputValues = new EventEmitter()
  users;
  datar;
  username;
  // morem = 'background:red';
  morem = {
    'color': '',
    'cursor': 'pointer'
    };
  malipouser;
  tambulisha;
  filtertext;
  dat;
  selectedData;
  all;
  jum: number;
  modalRef: BsModalRef;
  message: string;
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
  balnc;
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
  userData;
  responseData;
  kilichokopwa;
  d = new Date();
  Simu;
  mwaka;
  monthes = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December', 'January', 'February', 'Mach', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  wilaya;
  mkoa;
  account;
  pin;
  min;
  hour;
  company_username;
  sec;
  times;
  mwzi;
  moxt

  constructor(private modalService: BsModalService, public receiptComponet:ReceiptComponent, public ngProgress: NgProgress, public snackbar: MatSnackBar, public detailsview:DetailsViewComponent, public pubdetailsview:DasboardMkopeshajiComponent, public restframework: RestframeworkService, public router: Router) {
    this.ngProgress.ref().start()
    this.company_username = localStorage.getItem('company_username')

    this.datar = localStorage.getItem('id');
    this.lservice_officer= localStorage.getItem('lservice_officer')
    // console.log('user: ' + this.lservice_officer)
    this.dataget();
    this.mona();
    this.mwzi = this.d.getMonth()
    this.moxt = parseInt(this.mwzi) + 1
    this.min = this.d.getMinutes();
    this.hour = this.d.getHours()
    this.sec = this.d.getSeconds()
    this.times = this.d.getFullYear() + "-" + this.moxt + "-" + this.d.getDate() + "  " + this.hour + ":" + this.min + ":" + this.sec
    // this.mdaa = this.times




    this.ngProgress.ref().complete()


   }

   dataget(){
    this.ngProgress.ref().start()

     //  alert('Ready');
  console.log('first one');
  // localStorage.removeItem('id');
  this.datar = localStorage.getItem('id');
  this.restframework.getStoredLists().then(dataList=>{
    this.all = dataList;
    for(const m of this.all){
      // console.log('mops', m.user)

      this.username = m.Username;
      this.jinalote = m.jina;
      this.Simu = m.Simu;
      this.account = m.Account_no;
      this.wilaya = m.wilaya;
      this.mkoa = m.mkoa;
      this.pin = m.pin;
      console.log('ipe'+this.username)




    }
    this.ngProgress.ref().complete()

  })

  this.restframework.getMalipoSingle().then(datat2 => {
    this.malipouser2 = datat2;



});

this.balnc = localStorage.removeItem('Balance')
this.restframework.getBalnc().then(reslt=>{
  this.dat = reslt;
  for(const m of this.dat){
    console.log(m.Balance)
    this.Balance = m.Balance;

  }
})



   }

  ngOnInit() {

  }
  refresh(): void {
}





time(){
  this.mwaka = this.d.getFullYear();
  this.day = this.d.getDate()
  // console.log(this.day)
  for (let i = this.d.getMonth(); i <= this.monthes.length; i++) {
    this.mopa += this.monthes[i] + ',';
    this.array.push(this.monthes[i]);
    this.getMwezi=this.monthes[this.d.getMonth()]
    // console.log(this.mwaka)
}}



  thisfunct() {
    this.restframework.getMalipoSingle().then(datat2 => {
      this.malipouser2 = datat2;
      // this.router.navigate(['/Details/Ongeza-mkopo']);
      // this.router.navigate(['/Details/Mkopoadmin']);
      this.v1 = null;
      this.v2 = null;
      this.momba = null;
      this.loan1 = null;
      // this.userData.Balance = null;
        this.Interest = null;
      // this.Balance = null;

  });







  }



  tuma() {
    console.log('moja')
    this.ngProgress.ref().start()
    this.userData = {
      'user': this.username,
      'jina': this.jinalote,
      'Total_pay': this.loan1,
      'loan_repay': this.loan1,
      'Interest_pay': this.Interest,
      'Balance': this.momba,
      'kipindi': this.no,
      'Account_no': this.account,
      'company': this.company_username,
      'Simu': this.Simu,
      'kilichokopwa': this.kilichokopwa,
      'tangu': this.tarehe,
      'awamu': this.bwoy,
      'wilaya': this.wilaya,
      'mkoa': this.mkoa,
      'pin': this.pin,
      'service_officer': this.lservice_officer,
      'mwezi': this.getMwezi,
      'mwaka': this.mwaka,
      'day': this.day,
      'tarehe': this.mdaa,
      'info': 'delete',
      'route': 'weka',
};

    console.log('momoss :'+ this.userData.user)
    this.restframework.getLoginPosts(this.userData, 'Malipo/').then((result) => {
      this.responseData = result;
      console.log('mbili')
      // console.log(this.responseData);
      // console.log(this.userData);
      this.v3 = null;
      this.momba  = null;
      // window.location.reload();
      // this.throwvalues();
      // this.router.navigateByUrl('/');
      // alert(this.userData.username)
      // localStorage.setItem('userData2', this.responseData);
      // localStorage.setItem('user', this.userData.user);
      this.openSnackbar();

      this.mona()
      this.thisfunct();
      // this.dataget();
      // this.dataget();
      this.ngProgress.ref().complete();

      }, (err) => {
        this.openSnackbarerror()

      });




    // console.log('passed');




      this.ngProgress.ref().complete()

  }

  openSnackbar() {
    this.snackbar.open('Muamala wa malipo ya ' + this.username + ' umefanikiwa');
  }

  openSnackbarerror() {
    this.snackbar.open('Muamala wa malipo ya ' + this.username + ' Umeshindikana');
  }

  // throwvalues(){
  //   this.OutputValues.emit()
  // }
  mona(){
    this.detailsview.fuck();
    this.pubdetailsview.fuck();
    this.bwoy = null;
  }

  cross(){
    alert('masatuuuuu')
  }


  calculate() {

      this.time();
    if(this.mopai){
      this.mdaa = this.mopai;

    }else{
      this.mdaa = this.times;
    }
      this.loan1 = null;
      this.Interest = null;
      this.userData = null;

      this.loan1 = this.v1;
      this.Interest = this.v2;
      if (this.men) {
        this.bwoy = this.men
      } else {
        if (this.momba !== 0) {
          // console.log('awamu:'+ this.awamu)
          this.bwoy = parseInt(this.awamu) * 1 - 1 * 1
          // console.log('mope'+ this.bwoy)


        } else {
          this.bwoy = 0;

        }
      }
      if (this.v3) {
        this.momba = this.v3;
        this.jum = 0;
        this.loan1 =0;
        // this.v3 = null;
      } else {
        this.momba = this.Balance - this.loan1;
        this.bwoy = parseInt(this.awamu) * 1 - 1 * 1

        if (this.momba === 0) {
          this.bwoy = 0;

        }
        this.dataget()
      }






  }
  run1(k){
    console.log(k.user)
    this.restframework.getLoginPosts(this.Create, 'deletem1/' + k.user + '/').then((result) => {
      this.responseDat = result;
      // alert(this.userData.username)
      // localStorage.setItem('userData2', this.responseData);
     //  localStorage.setItem('user', this.userData.Username);
     //  this.UserCreate();
     //  this.UserInfo();
    //  this.clean();
      this.thisfunct();
      this.mona();
      // this.ngProgress.ref().complete();
      }, (err) => {
        alert('error');

      });

  }

  run(){

    this.Create={
      jina:this.jinalote,
      Total_pay:this.loan1,
      Simu:this.Simu,
      wilaya:this.wilaya,
      info :'deleted',
      user:this.username,
      service_officer:this.lservice_officer,
      mkoa:this.mkoa,
      mwezi: this.getMwezi,
      mwaka: this.mwaka,
      day: this.day,
      tarehe: this.mdaa,




    }
    this.restframework.getLoginPosts(this.Create, 'deletem/').then((result) => {
      this.responseDat = result;
      // alert(this.userData.username)
      // localStorage.setItem('userData2', this.responseData);
     //  localStorage.setItem('user', this.userData.Username);
     //  this.UserCreate();
     //  this.UserInfo();
    //  this.clean();
      this.thisfunct();
      this.mona();
      // this.ngProgress.ref().complete();
      }, (err) => {
        alert('error');

      });


  }


  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, {class: 'modal-sm'});
  }

  closeModal(){

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

  takepdf(k){
    localStorage.removeItem('receiptno');

    this.selectedData = k;
    localStorage.setItem('receiptno', this.selectedData.pk);
    // console.log('value: '+this.selectedData.pk)
    // this.receiptComponet.showreceipt();
    this.router.navigate(['/Admindash/Details/receipt'])

  }

}
