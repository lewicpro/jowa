import { Component, OnInit, EventEmitter, TemplateRef, ChangeDetectionStrategy } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ReceiptComponent } from '../receipt/receipt.component';
import { NgProgress } from 'ngx-progressbar';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DetailsViewComponent } from '../details-view/details-view.component';
import { AdminDashboardComponent } from '../admin-dashboard/admin-dashboard.component';
import { RestframeworkService } from '../apiservice/restframework.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-dasboard-mkopeshaji-history',
    templateUrl: './dasboard-mkopeshaji-history.component.html',
    styleUrls: ['./dasboard-mkopeshaji-history.component.css'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class DasboardMkopeshajiHistoryComponent implements OnInit {

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
  selectedData;
  jum: number;
  modalRef: BsModalRef;
  message: string;
  company_user;
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
  sec;
  times;
  mwzi;
  moxt

  constructor(private modalService: BsModalService, public receiptComponet:ReceiptComponent, public ngProgress: NgProgress, public snackbar: MatSnackBar, public detailsview:DetailsViewComponent, public pubdetailsview:AdminDashboardComponent, public restframework: RestframeworkService, public router: Router) {
    this.ngProgress.ref().start()
    this.company_user = localStorage.getItem('company_username')
    // console.log(this.company_user)
    this.lservice_officer= localStorage.getItem('lservice_officer')
    // console.log('user: ' + this.lservice_officer)
    this.dataget();
    this.mona();
    this.mwzi = this.d.getMonth()
    this.moxt = parseInt(this.mwzi) + 1
    this.min = this.d.getMinutes();
    this.hour = this.d.getHours()
    this.sec = this.d.getSeconds()
    this.times = this.d.getDate() + "/" + this.moxt + "/" +this.d.getFullYear() + "  ||  " + this.hour + ":" + this.min + ":" + this.sec
    // this.mdaa = this.times
  
    this.ngProgress.ref().complete()


   }

   dataget(){
     //  alert('Ready');
  // console.log(this.array1.reduce(this.reducer));
  
    this.restframework.getLists().then(data => {
      this.users = data;
      for ( const n of this.users) {
        // console.log('nafika');
        this.datar = localStorage.getItem('id');
        if (String(n.pk) === String(this.datar)) {
          if (true) {
            this.username = n.Username;
            // this.user = n.Username;
            this.jinalote = n.jina;
            this.Simu = n.Simu;
            this.account = n.Account_no;
            this.wilaya = n.wilaya;
            this.mkoa = n.mkoa;
            this.pin = n.pin;
            // this.userData.user = n.Username;
            // this.userData.jina = n.jina;

          }
        }


      this.restframework.getPayments().then(datat => {
        this.malipouser = datat;
        for (const m of this.malipouser) {
          // console.log(this.malipouser.length - 1);
          if ( this.username === m.user) {
            this.tambulisha = m.user;
            // console.log(m.user);
            if (true) {
              
              this.user = m.user;
              this.jina = m.jina;
              this.tarehe = m.tarehe;
              this.Total_pay = m.Total_pay;
              this.loan_repay = m.loan_repay;
              this.Balance = m.Balance;
              this.kilichokopwa = m.kilichokopwa;
              this.morem.color = m.rangi;
              this.awamu = m.awamu;

              // this.restframework.UserInfo().then(dats =>{
              //   this.infosw = dats;
              //   for(const n of this.infosw){
              //     this.datar = localStorage.getItem('id');
              //     if(n.user === this.user){
              //       // console.log(n.user);
              //       // this.riba = n.Riba;
              //       this.Balancem = n.Balance;
              //       // this.mwezi = n.mwezi;
              //       // this.mkopo = n.mkopo;
              //       // this.Faida = n.Faida;
              //       // this.Rejesho_mwezi = n.Rejesho_mwezi;
              //       // this.date = this.d.getMonth() + 1;
            
              //     }
            
              //   }
              // });
              
              
        

          }
        }}

   });



      this.restframework.getPayments2().then(datat2 => {
        this.malipouser2 = datat2;

   });



  }

    });
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
    this.restframework.getLists().then(data => {
      this.users = data;
      // this.dataget()
      for ( const n of this.users) {
        // console.log('nafika');
        this.datar = localStorage.getItem('id');
        if (String(n.pk) === String(this.datar)) {
          if (true) {
            this.username = n.Username;
            // this.jinalote = n.jina

          }
        }
      this.restframework.getPayments2().then(datat2 => {
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

    });

  }



  tuma() {
    this.ngProgress.ref().start()
    
    // console.log('passed');
    

    this.restframework.getLoginPosts(this.userData, 'Malipo/').then((result) => {
      this.responseData = result;
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
      
      this.thisfunct();
      this.mona()
      this.ngProgress.ref().complete();
      
      }, (err) => {
        this.openSnackbarerror()

      });

      this.ngProgress.ref().complete()

  }

  openSnackbar() {
    this.snackbar.open('Muamala wa malipo ya ' + this.username + ' umefanikiwa');
  }

  openSnackbarerror() {
    this.snackbar.open('Muamala wa malipo ya ' + this.username + ' Umeshindikana');
  }

  mona(){
    this.detailsview.fuck();
    this.pubdetailsview.fuck();
    this.bwoy = null;
  }



  calculate() {
    console.log('cala:'+this.company_user)

      this.time();
      // this.ngProgress.ref().start();
    if(this.mopai){
      console.log('remainder1: '+ this.times)
      this.mdaa = this.mopai;

    }else{
      this.mdaa = this.times;
      console.log('remainder2: '+ this.times)
    }
      // this.thisfunct() ;
      this.loan1 = null;
      this.Interest = null;
      this.userData = null;

      this.loan1 = this.v1;
      this.Interest = this.v2;
      // console.log(this.awamu);
      if (this.men) {
        this.bwoy = this.men
        // this.v3 = null;
      } else {
        if (this.momba !== 0) {
          this.bwoy = this.awamu * 1 - 1
 

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
        
        if (this.momba === 0) {
          this.bwoy = 0;

        }
        this.dataget()
      }



      this.userData = {
              'user': this.user,
              'jina': this.jina,
              'Total_pay': this.loan1,
              'loan_repay': this.loan1,
              'Interest_pay': this.Interest,
              'Balance': this.momba,
              'kipindi': this.no,
              'Account_no': this.account,
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
              'company': this.company_user,
              'day': this.day,
              'tarehe': this.mdaa,
              'info': 'delete',
              'route': 'weka',
        };


  }

  run(){
    
    this.Create={
      jina:this.jina,
      Total_pay:this.loan1,
      Simu:this.Simu,
      wilaya:this.wilaya,
      info :'deleted',
      user:this.user,
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
    console.log('value: '+this.selectedData.pk)
    // this.receiptComponet.showreceipt();
    this.router.navigate(['/Admindash/Details/receipt'])

  }

}
