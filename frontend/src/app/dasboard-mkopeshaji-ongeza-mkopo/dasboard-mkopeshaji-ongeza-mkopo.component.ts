import { Component, OnInit, TemplateRef, ChangeDetectionStrategy } from '@angular/core';
import { NgProgress } from 'ngx-progressbar';
import { AdminDashboardComponent } from '../admin-dashboard/admin-dashboard.component';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { DetailsViewComponent } from '../details-view/details-view.component';
import { RestframeworkService } from '../apiservice/restframework.service';
import { Router } from '@angular/router';
import { OpenSnackerComponent } from '../open-snacker/open-snacker.component';
import { OpenSnackserrorComponent } from '../open-snackserror/open-snackserror.component';
import { DasboardMkopeshajiComponent } from '../dasboard-mkopeshaji/dasboard-mkopeshaji.component';

@Component({
    selector: 'app-dasboard-mkopeshaji-ongeza-mkopo',
    templateUrl: './dasboard-mkopeshaji-ongeza-mkopo.component.html',
    styleUrls: ['./dasboard-mkopeshaji-ongeza-mkopo.component.css'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class DasboardMkopeshajiOngezaMkopoComponent implements OnInit {
  totalAmount: number;
  miezi: number;
  filtertext;
  mdaa;
  mopai;
  mopa  = '';
  d = new Date();
  array = [];
  ribaa: number;
  getMwezi;
  modalRef: BsModalRef;
  message: string;
  mboso;
  lservice_officer;
  company_user;
  Kiasi: number;
  mwaa;
  day;
  riba: number;
  mw1: number;
  tangu;
  monthes = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December', 'January', 'February', 'Mach', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  mw2;
  note;
  kipindi: '1';
  rangi = 'blue';
  mosa: number;
  // twobalacnce: number;
  mavi: number;
  mw3: number;
  loan_repay = 0;
  total_pay = 0;
  mw4: number;
  m1: number;
  m2: number;
  // balancem;
  m3: number;
  m4: number;
  m5: number;
  m6: number;
  m7: number;
  mwaka;
  m8: number;
  m9: number;
  m10: number;
  m11: number;
  m12: number;
  prev1;
  prev2;
  mkoa;
  wilaya;
  prev3;
  prev4;
  prev5;
  prev6;
  prev7;
  prev8;
  prev9;
  prev10;
  prev11;
  mw5: number;
  mw6: number;
  mw7: number;
  mw8: number;
  mw9: number;
  mw10: number;
  mw11: number;
  mw12: number;
  mwezi;
  mwezi1;
  mwezi2;
  mwezi3;
  mwezi4;
  mwezi5;
  mwezi6;
  miezi_Pesa;
  Kiasi_Pesa;
  mwezi7;
  mwezi8;
  mwezi9;
  mwezi10;
  mwezi11;
  mwezi12;

  users;
  mor2;
  momo: number;
  jumla: number;
  kilamwezi: number;
  userData = {};
  responseData;
  datar;
  mambos;
  user;
  jina;
  jomo;
  account;
  pin;
  Simu;
  min;
  hour;
  sec;
  mwzi;
  times;
  moxt;

  constructor(private modalService: BsModalService, public snackBar: MatSnackBar,
      public pubdetailsview:DasboardMkopeshajiComponent, public ngProgress:NgProgress, public detailsview:DetailsViewComponent, public restframework: RestframeworkService, public router: Router) {
        this.lservice_officer = localStorage.getItem('lservice_officer')


        this.restframework.getStoredLists().then(data => {
          this.datar = localStorage.getItem('id');
          this.users = data;
          for (const m of this.users) {

            this.user = m.Username;
            this.jina = m.jina;
            this.account = m.Account_no;
            this.pin = m.pin;
            this.wilaya = m.wilaya;
            this.mkoa = m.mkoa;
            this.Simu = m.Simu;
            // console.log('confirmed' + this.user);
            // console.log('jina' + this.jina);



          }


        });
        this.company_user = localStorage.getItem('company_username')
        this.min = this.d.getMinutes();
        this.hour = this.d.getHours()
        this.sec = this.d.getSeconds()
        this.mwzi = this.d.getMonth()
        this.moxt = parseInt(this.mwzi) + 1
        this.times = this.d.getFullYear() + "-" + this.moxt + "-" + this.d.getDate() + "  " + this.hour + ":" + this.min + ":" + this.sec
      // this.mdaa = this.times




          this.restframework.getPayments().then(datad => {

            this.jomo = datad;


            // console.log('come jomo' + this.jomo);
            for (const n of this.jomo) {
              // console.log('pk ' + n.user);
              this.datar = localStorage.getItem('id');
              if ( n.user === this.user) {
                // console.log('come come' + n.Balance);
                if (n.Balance != null) {
                  // console.log(n.Balance);
                }
                // this.balancem = n.Balance;
                // this.twobalacnce = this.jumla + this.balancem;
                // localStorage.setItem('balancem', n.Balance);
                // console.log('come go' + this.twobalacnce);


              }

            }
          });
  }

  ngOnInit() {
  }


  updateTotal() {
    this.time();
    if(this.mopai){
      // console.log('bak1: '+ this.times)
      this.mdaa = this.mopai;

    }else{
      this.mdaa = this.times;
      // console.log('remainder2: '+ this.times)
    }
    for (let i = this.d.getMonth(); i <= this.monthes.length; i++) {
      this.mopa += this.monthes[i] + ',';
      this.array.push(this.monthes[i]);

    }



    // console.log(this.monthes)
    // console.log(this.array);

      // console.log({bob: this.array[0], Hamisi: this.array[1], Hasani: this.array[2], Hosea: this.array[3]})

    if (this.miezi <= 1 ) {
      if(this.riba){
        this.ribaa = this.riba



      } else {
        this.ribaa = 10;
      }
      // console.log('imefka 2');

      this.totalAmount = Math.round(this.Kiasi * this.ribaa / 100);
      this.jumla = this.totalAmount * 1 + this.Kiasi * 1 ;
      this.kilamwezi = Math.round(this.jumla / 1);
      this.mwaka = this.d.getFullYear();
      if(this.d.getDate() > 21){

        // console.log(this.mwaka);
      } else{
        this.mw1 = null;
        this.mw2 = null;
        this.mw2 = null;
        this.mw3 = null;
        this.mw4 = null;
        this.mw5 = null;
        this.mw6 = null;
        this.mw7 = null;
        this.mw8 = null;
        this.mw9 = null;
        this.mwezi1 = this.array[0];

        // console.log(this.array[0]);
      }
      if (this.m1) {
        this.mw1 = this.m1;
        } else {
          this.mw1 = this.kilamwezi;
        }

    } else if (this.miezi <= 2) {
        if (this.miezi > 1) {
          if(this.riba){
            this.ribaa = this.riba


          } else {
            this.ribaa = 20;
          }

          this.totalAmount = Math.round(this.Kiasi * this.ribaa / 100);
          this.jumla = this.totalAmount * 1 + this.Kiasi * 1 ;
          // this.balancem = localStorage.getItem('balancem');
          // this.twobalacnce = this.jumla + this.balancem;
          // console.log(this.balancem);
          this.kilamwezi = Math.round(this.jumla / 2);


          this.mwaka = this.d.getFullYear();
          if(this.d.getDate() > 21){
            this.mw1 = null;
            this.mw2 = null;
            this.mw2 = null;
            this.mw3 = null;
            this.mw4 = null;
            this.mw5 = null;
            this.mw6 = null;
            this.mw7 = null;
            this.mw8 = null;
            this.mw9 = null;
            this.mwezi1 = this.array[1];
            this.mwezi2 = this.array[2];

            // console.log(this.mwaka);
          } else{
            this.mw1 = null;
            this.mw2 = null;
            this.mw2 = null;
            this.mw3 = null;
            this.mw4 = null;
            this.mw5 = null;
            this.mw6 = null;
            this.mw7 = null;
            this.mw8 = null;
            this.mw9 = null;
            this.mwezi1 = this.array[0];
            this.mwezi2 = this.array[1];

            // console.log(this.array[0]);
          }
          if (this.m1) {
            this.mw1 = this.m1;
            this.m2 = this.jumla - this.m1
            this.mw2 = this.jumla - this.m1
            // console.log(this.mw2)

            } else {
              this.mw1 = null;
              this.mw2 = null;
              this.mw2 = null;
              this.mw3 = null;
              this.mw4 = null;
              this.mw5 = null;
              this.mw6 = null;
              this.mw7 = null;
              this.mw8 = null;
              this.mw9 = null;
              this.mw1 = this.kilamwezi;
            }
          if (this.m2) {
            this.mw1 = null;
            this.mw2 = null;
            this.mw2 = null;
            this.mw3 = null;
            this.mw4 = null;
            this.mw5 = null;
            this.mw6 = null;
            this.mw7 = null;
            this.mw8 = null;
            this.mw9 = null;
            this.mw2 = this.m2;
            } else {
              this.mw2 = this.kilamwezi;
            }


        }

    } else if (this.miezi <= 3) {
      // console.log('sehem')

      if (this.miezi > 2) {
        // console.log('sehem ya 0')

        if(this.riba){
          // console.log('sehem ya 1')
          this.ribaa = this.riba


        } else {
          this.ribaa = 30;
        }
        // console.log('sehem ya 2')
        this.mor2 = this.mavi;

        this.totalAmount = Math.round(this.Kiasi * this.ribaa / 100);
        this.jumla = this.totalAmount * 1 + this.Kiasi * 1 ;
        this.kilamwezi = Math.round(this.jumla / 3);
        this.mwaka = this.d.getFullYear();
        if(this.d.getDate() > 21){
          // console.log('sehem ya 3')
          this.mw1 = null;
          this.mw2 = null;
          this.mw2 = null;
          this.mw3 = null;
          this.mw4 = null;
          this.mw5 = null;
          this.mw6 = null;
          this.mw7 = null;
          this.mw8 = null;
          this.mw9 = null;



          this.mwezi1 = this.array[1];
          this.mwezi2 = this.array[2];
          this.mwezi3 = this.array[3];

          // console.log(this.array[1]);
        } else{
          this.mw1 = null;
          this.mw2 = null;
          this.mw2 = null;
          this.mw3 = null;
          this.mw4 = null;
          this.mw5 = null;
          this.mw6 = null;
          this.mw7 = null;
          this.mw8 = null;
          this.mw9 = null;

          this.mwezi1 = this.array[0];
          this.mwezi2 = this.array[1];
          this.mwezi3 = this.array[2];


        }
        // this.mw1 = this.kilamwezi;
        if (this.m1) {
          // console.log('inapita hapan m1')
          this.mw1 = this.m1;

          this.prev1 = (this.jumla - this.m1) / 2

          this.prev2 = this.prev1

        } else {
          this.mw2 = this.kilamwezi;
        }
        if (this.m2) {
          // console.log('tupo hapa mw2')
          // this.prev1 = null;
          this.prev2 = null;

          this.mw2 = this.m2;
          this.prev1 = this.jumla *1 - (this.m1*1 + this.m2*1);


        } else {
          this.mw3 = this.kilamwezi;
        }
        if (this.m3) {
          // console.log('tupo hapa m3')
          this.mw3 = this.m3;

        } else {
          this.mw1 = this.kilamwezi;


        }



      }

    } else if (this.miezi <= 4) {
      if (this.miezi > 3) {
          if(this.riba){
            this.ribaa = this.riba


          } else {
            this.ribaa = 40;
          }


        this.totalAmount = Math.round(this.Kiasi * this.ribaa / 100);
        this.jumla = this.totalAmount * 1 + this.Kiasi * 1 ;
        this.kilamwezi = Math.round(this.jumla / 4);
        this.mwaka = this.d.getFullYear();
        if(this.d.getDate() > 21){
          this.mw1 = null;
          this.mw2 = null;
          this.mw2 = null;
          this.mw3 = null;
          this.mw4 = null;
          this.mw5 = null;
          this.mw6 = null;
          this.mw7 = null;
          this.mw8 = null;
          this.mw9 = null;
          this.mwezi1 = this.array[1];
          this.mwezi2 = this.array[2];
          this.mwezi3 = this.array[3];
          this.mwezi4 = this.array[4];


        } else{
          this.mw1 = null;
          this.mw2 = null;
          this.mw2 = null;
          this.mw3 = null;
          this.mw4 = null;
          this.mw5 = null;
          this.mw6 = null;
          this.mw7 = null;
          this.mw8 = null;
          this.mw9 = null;
          this.mwezi1 = this.array[0];
          this.mwezi2 = this.array[1];
          this.mwezi3 = this.array[2];
          this.mwezi4 = this.array[3];


        }

          if (this.m1) {
            this.prev1 = null;
            this.prev2 = null;
            this.prev3 = null;
            this.mw1 = this.m1;
            this.prev1 = (this.jumla - this.m1) / 3
            this.prev2 = this.prev1;
            this.prev3 = this.prev2;
          } else {
            this.mw1 = this.kilamwezi;

          }
          if (this.m2) {
            // console.log("imefika hapa ndugu")
            this.prev1 = null;
            this.prev2 = null;
            this.prev3 = null;
            this.mw2 = this.m2;
            this.prev1 = (this.jumla - (this.m1*1 + this.m2*1)) / 2;
            this.prev2 = this.prev1;


            // this.prev1 = (this.jumla *1 - (this.m1*1 + this.m2*1)) / 2;
            // this.prev2 = this.prev1 + 'ayee';
          } else {
            this.mw2 = this.kilamwezi;
          }

          if (this.m3) {
            this.prev1 = null;
            this.prev2 = null;
            this.prev3 = null;
            this.mw3 = this.m3;
            this.prev1 = (this.jumla - (this.m1*1 + this.m2*1 + this.m3*1)) / 1;
          } else {
            this.mw3 = this.kilamwezi;
          }

          if (this.m4) {
            this.prev1 = null;
            this.prev2 = null;
            this.prev3 = null;
            this.prev4 = null;
            this.mw4 = this.m4;

            } else {
              this.mw4 = this.kilamwezi;
            }




      }

    } else if (this.miezi <= 5) {
      if (this.miezi > 4) {
        if(this.riba){
          this.ribaa = this.riba


        } else {
          this.ribaa = 50;
        }
        // console.log('imefka 3');

        this.totalAmount = Math.round(this.Kiasi * this.ribaa / 100);
        this.jumla = this.totalAmount * 1 + this.Kiasi * 1 ;
        this.kilamwezi = Math.round(this.jumla / 5);
        this.mwaka = this.d.getFullYear();
        if(this.d.getDate() > 21){
          this.mw1 = null;
          this.mw2 = null;
          this.mw2 = null;
          this.mw3 = null;
          this.mw4 = null;
          this.mw5 = null;
          this.mw6 = null;
          this.mw7 = null;
          this.mw8 = null;
          this.mw9 = null;
          this.mwezi1 = this.array[1];
          this.mwezi2 = this.array[2];
          this.mwezi3 = this.array[3];
          this.mwezi4 = this.array[4];
          this.mwezi5 = this.array[5];

          // console.log(this.array[1]);
        } else{
          this.mw1 = null;
          this.mw2 = null;
          this.mw2 = null;
          this.mw3 = null;
          this.mw4 = null;
          this.mw5 = null;
          this.mw6 = null;
          this.mw7 = null;
          this.mw8 = null;
          this.mw9 = null;
          this.mwezi1 = this.array[0];
          this.mwezi2 = this.array[1];
          this.mwezi3 = this.array[2];
          this.mwezi4 = this.array[3];
          this.mwezi5 = this.array[4];


        }




        if (this.m1) {
          this.prev1 = null;
            this.prev2 = null;
            this.prev3 = null;
            this.prev4 = null;
            this.mw1 = this.m1;
            this.prev1 = (this.jumla - this.m1) / 4
            this.prev2 = this.prev1;
            this.prev3 = this.prev2;
            this.prev4 = this.prev3;
        } else {
          this.mw1 = this.kilamwezi;

        }

        if (this.m2) {
          this.mw2 = this.m2;
          this.prev1 = null;
          this.prev2 = null;
          this.prev3 = null;
          this.prev4 = null;
          this.mw2 = this.m2;
          this.prev1 = (this.jumla - (this.m1*1 + this.m2*1)) / 3;
          this.prev2 = this.prev1;
          this.prev3 = this.prev2;
        } else {
          this.mw2 = this.kilamwezi;
        }

        if (this.m3) {

          this.mw2 = this.m2;
          this.prev1 = null;
          this.prev2 = null;
          this.prev3 = null;
          this.prev4 = null;
          this.mw3 = this.m3;
          this.prev1 = (this.jumla - (this.m1*1 + this.m2*1 + this.m3*1)) / 2;
          this.prev2 = this.prev1;

        } else {
          this.mw3 = this.kilamwezi;
        }

        if (this.m4) {

          this.mw2 = this.m2;
          this.prev1 = null;
          this.prev2 = null;
          this.prev3 = null;
          this.prev4 = null;
          this.mw4 = this.m4;
          this.prev1 = this.jumla - (this.m1*1 + this.m2*1 + this.m3*1 + this.m4*1);

          } else {
            this.mw4 = this.kilamwezi;
          }

        if (this.m5) {
          this.prev1 = null;
          this.prev2 = null;
          this.prev3 = null;
          this.prev4 = null;
          this.mw5 = this.m5;
          } else {
            this.mw5 = this.kilamwezi;
          }




      }

    } else if (this.miezi <= 6) {
      if (this.miezi > 5) {
        if(this.riba){
          this.ribaa = this.riba


        } else {
          this.ribaa = 60;
        }
        // console.log('imefka 3');

        this.totalAmount = Math.round(this.Kiasi * this.ribaa / 100);
        this.jumla = this.totalAmount * 1 + this.Kiasi * 1 ;
        this.kilamwezi = Math.round(this.jumla / 6);
        this.mwaka = this.d.getFullYear();
        if(this.d.getDate() > 21){
          this.mw1 = null;
          this.mw2 = null;
          this.mw2 = null;
          this.mw3 = null;
          this.mw4 = null;
          this.mw5 = null;
          this.mw6 = null;
          this.mw7 = null;
          this.mw8 = null;
          this.mw9 = null;
          this.mwezi1 = this.array[1];
          this.mwezi2 = this.array[2];
          this.mwezi3 = this.array[3];
          this.mwezi4 = this.array[4];
          this.mwezi5 = this.array[5];
          this.mwezi6 = this.array[6];

          // console.log(this.array[1]);
        } else{
          this.mw1 = null;
          this.mw2 = null;
          this.mw2 = null;
          this.mw3 = null;
          this.mw4 = null;
          this.mw5 = null;
          this.mw6 = null;
          this.mw7 = null;
          this.mw8 = null;
          this.mw9 = null;
          this.mwezi1 = this.array[0];
          this.mwezi2 = this.array[1];
          this.mwezi3 = this.array[2];
          this.mwezi4 = this.array[3];
          this.mwezi5 = this.array[4];
          this.mwezi6 = this.array[5];


        }





          if (this.m1) {
            this.prev1 = null;
            this.prev2 = null;
            this.prev3 = null;
            this.prev5 = null;
            this.mw1 = this.m1;
            this.prev1 = (this.jumla - this.m1) / 5
            this.prev2 = this.prev1;
            this.prev3 = this.prev2;
            this.prev4 = this.prev3;
            this.prev5 = this.prev4;
          } else {
            this.mw1 = this.kilamwezi;
          }
          if (this.m2) {
            this.mw2 = this.m2;
            this.prev1 = null;
            this.prev2 = null;
            this.prev3 = null;
            this.prev4 = null;
            this.prev5 = null;
            this.mw2 = this.m2;
            this.prev1 = (this.jumla - (this.m1*1 + this.m2*1)) / 4;
            this.prev2 = this.prev1;
            this.prev3 = this.prev2;
            this.prev4 = this.prev3;
          } else {
            this.mw2 = this.kilamwezi;
          }
          if (this.m3) {
            this.mw2 = this.m2;
            this.prev1 = null;
            this.prev2 = null;
            this.prev3 = null;
            this.prev4 = null;
            this.prev5 = null;
            this.mw3 = this.m3;
            this.prev1 = (this.jumla - (this.m1*1 + this.m2*1 + this.m3*1)) / 3;
            this.prev2 = this.prev1;
            this.prev3 = this.prev2;
          } else {
            this.mw3 = this.kilamwezi;
          }
          if (this.m4) {
            this.mw2 = this.m2;
            this.prev1 = null;
            this.prev2 = null;
            this.prev3 = null;
            this.prev4 = null;
            this.prev5 = null;
            this.mw4 = this.m4;
            this.prev1 = (this.jumla - (this.m1*1 + this.m2*1 + this.m3*1 + this.m4*1)) / 2;
            this.prev2 = this.prev1;

            } else {
              this.mw4 = this.kilamwezi;
            }
          if (this.m5) {
            this.mw5 = this.m5;
            this.prev1 = null;
            this.prev2 = null;
            this.prev3 = null;
            this.prev4 = null;
            this.prev5 = null;
            this.mw4 = this.m4;
            this.prev1 = this.jumla - (this.m1*1 + this.m2*1 + this.m3*1 + this.m4*1 + this.m5*1);

            } else {
              this.mw5 = this.kilamwezi;
            }
          if (this.m6) {
            this.prev1 = null;
            this.prev2 = null;
            this.prev3 = null;
            this.prev4 = null;
            this.prev5 = null;

            this.mw6 = this.m6;
            } else {
              this.mw6 = this.kilamwezi;
            }


      }

    } else if (this.miezi <= 7) {
      if (this.miezi > 6) {
        if(this.riba){
          this.ribaa = this.riba


        } else {
          this.ribaa = 70;
        }
        // console.log('imefka 3');

        this.totalAmount = Math.round(this.Kiasi * this.ribaa / 100);
        this.jumla = this.totalAmount * 1 + this.Kiasi * 1 ;
        this.kilamwezi = Math.round(this.jumla / 7);
        this.mwaka = this.d.getFullYear();
        if(this.d.getDate() > 21){
          this.mw1 = null;
          this.mw2 = null;
          this.mw2 = null;
          this.mw3 = null;
          this.mw4 = null;
          this.mw5 = null;
          this.mw6 = null;
          this.mw7 = null;
          this.mw8 = null;
          this.mw9 = null;
          this.mwezi1 = this.array[1];
          this.mwezi2 = this.array[2];
          this.mwezi3 = this.array[3];
          this.mwezi4 = this.array[4];
          this.mwezi5 = this.array[5];
          this.mwezi6 = this.array[6];
          this.mwezi7 = this.array[7];

          // console.log(this.array[1]);
        } else{
          this.mw1 = null;
          this.mw2 = null;
          this.mw2 = null;
          this.mw3 = null;
          this.mw4 = null;
          this.mw5 = null;
          this.mw6 = null;
          this.mw7 = null;
          this.mw8 = null;
          this.mw9 = null;
          this.mwezi1 = this.array[0];
          this.mwezi2 = this.array[1];
          this.mwezi3 = this.array[2];
          this.mwezi4 = this.array[3];
          this.mwezi5 = this.array[4];
          this.mwezi6 = this.array[5];
          this.mwezi7 = this.array[6];


        }






        if (this.m1) {
          this.prev1 = null;
          this.prev2 = null;
          this.prev3 = null;
          this.prev5 = null;
          this.prev6 = null;
          this.mw1 = this.m1;
          this.prev1 = (this.jumla - this.m1) / 6
          this.prev2 = this.prev1;
          this.prev3 = this.prev2;
          this.prev4 = this.prev3;
          this.prev5 = this.prev4;
          this.prev6 = this.prev5;
        } else {
          this.mw1 = this.kilamwezi;
        }
        if (this.m2) {

          this.prev1 = null;
          this.prev2 = null;
          this.prev3 = null;
          this.prev4 = null;
          this.prev5 = null;
          this.prev6 = null;
          this.mw2 = this.m2;
          this.prev1 = (this.jumla - (this.m1*1 + this.m2*1)) / 5;
          this.prev2 = this.prev1;
          this.prev3 = this.prev2;
          this.prev4 = this.prev3;
          this.prev5 = this.prev4;

        } else {
          this.mw2 = this.kilamwezi;
        }
        if (this.m3) {

          this.prev1 = null;
          this.prev2 = null;
          this.prev3 = null;
          this.prev4 = null;
          this.prev5 = null;
          this.prev6 = null;
          this.mw3 = this.m3;
          this.prev1 = (this.jumla - (this.m1*1 + this.m2*1 + this.m3*1)) / 4;
          this.prev2 = this.prev1;
          this.prev3 = this.prev2;
          this.prev4 = this.prev3;
        } else {
          this.mw3 = this.kilamwezi;
        }
        if (this.m4) {

          this.prev1 = null;
          this.prev2 = null;
          this.prev3 = null;
          this.prev4 = null;
          this.prev5 = null;
          this.prev6 = null;
          this.mw4 = this.m4;
          this.prev1 = (this.jumla - (this.m1*1 + this.m2*1 + this.m3*1 + this.m4*1)) / 3;
          this.prev2 = this.prev1;
          this.prev3 = this.prev2;

          } else {
            this.mw4 = this.kilamwezi;
          }
        if (this.m5) {

          this.prev1 = null;
          this.prev2 = null;
          this.prev3 = null;
          this.prev4 = null;
          this.prev5 = null;
          this.prev6 = null;
          this.mw5 = this.m5;
          this.prev1 = (this.jumla - (this.m1*1 + this.m2*1 + this.m3*1 + this.m4*1 + this.m5*1)) / 2;
          this.prev2 = this.prev1;
          } else {
            this.mw5 = this.kilamwezi;
          }
        if (this.m6) {




          this.prev1 = null;
          this.prev2 = null;
          this.prev3 = null;
          this.prev4 = null;
          this.prev5 = null;
          this.prev6 = null;
          this.mw6 = this.m6;
          this.prev1 = this.jumla - (this.m1*1 + this.m2*1 + this.m3*1 + this.m4*1 + this.m5*1 + this.m6*1);

          } else {
            this.mw6 = this.kilamwezi;
          }
          if (this.m7) {
            this.prev1 = null;
            this.prev2 = null;
            this.prev3 = null;
            this.prev4 = null;
            this.prev5 = null;
            this.prev6 = null;
            this.mw7 = this.m7;
            } else {
              this.mw7 = this.kilamwezi;
            }
      }


      } else if (this.miezi <= 8) {
        if (this.miezi > 7) {
          if(this.riba){
            this.ribaa = this.riba


          } else {
            this.ribaa = 80;
          }
          // console.log('imefka 3');

          this.totalAmount = Math.round(this.Kiasi * this.ribaa / 100);
          this.jumla = this.totalAmount * 1 + this.Kiasi * 1 ;
          this.kilamwezi = Math.round(this.jumla / 8);
          this.mwaka = this.d.getFullYear();
          if(this.d.getDate() > 21){
            this.mw1 = null;
            this.mw2 = null;
            this.mw2 = null;
            this.mw3 = null;
            this.mw4 = null;
            this.mw5 = null;
            this.mw6 = null;
            this.mw7 = null;
            this.mw8 = null;
            this.mw9 = null;
            this.mwezi1 = this.array[1];
            this.mwezi2 = this.array[2];
            this.mwezi3 = this.array[3];
            this.mwezi4 = this.array[4];
            this.mwezi5 = this.array[5];
            this.mwezi6 = this.array[6];
            this.mwezi7 = this.array[7];
            this.mwezi8 = this.array[8];

            // console.log(this.array[1]);
          } else{
            this.mw1 = null;
            this.mw2 = null;
            this.mw2 = null;
            this.mw3 = null;
            this.mw4 = null;
            this.mw5 = null;
            this.mw6 = null;
            this.mw7 = null;
            this.mw8 = null;
            this.mw9 = null;
            this.mwezi1 = this.array[0];
            this.mwezi2 = this.array[1];
            this.mwezi3 = this.array[2];
            this.mwezi4 = this.array[3];
            this.mwezi5 = this.array[4];
            this.mwezi6 = this.array[5];
            this.mwezi7 = this.array[6];
            this.mwezi8 = this.array[7];


          }








          if (this.m1) {
              this.prev1 = null;
              this.prev2 = null;
              this.prev3 = null;
              this.prev5 = null;
              this.prev6 = null;
              this.prev7 = null;
              this.mw1 = this.m1;
              this.prev1 = (this.jumla - this.m1) / 7
              this.prev2 = this.prev1;
              this.prev3 = this.prev2;
              this.prev4 = this.prev3;
              this.prev5 = this.prev4;
              this.prev6 = this.prev5;
              this.prev7 = this.prev6;
          } else {
            this.mw1 = this.kilamwezi;
          }
          if (this.m2) {

              this.prev1 = null;
              this.prev2 = null;
              this.prev3 = null;
              this.prev4 = null;
              this.prev5 = null;
              this.prev6 = null;
              this.prev7 = null;
              this.mw2 = this.m2;
              this.prev1 = (this.jumla - (this.m1*1 + this.m2*1)) / 6;
              this.prev2 = this.prev1;
              this.prev3 = this.prev2;
              this.prev4 = this.prev3;
              this.prev5 = this.prev4;
              this.prev6 = this.prev5;

          } else {
            this.mw2 = this.kilamwezi;
          }
          if (this.m3) {

              this.prev1 = null;
              this.prev2 = null;
              this.prev3 = null;
              this.prev4 = null;
              this.prev5 = null;
              this.prev6 = null;
              this.prev7 = null;
              this.mw3 = this.m3;
              this.prev1 = (this.jumla - (this.m1*1 + this.m2*1 + this.m3*1)) / 5;
              this.prev2 = this.prev1;
              this.prev3 = this.prev2;
              this.prev4 = this.prev3;
              this.prev5 = this.prev4;
          } else {
            this.mw3 = this.kilamwezi;
          }
          if (this.m4) {

              this.prev1 = null;
              this.prev2 = null;
              this.prev3 = null;
              this.prev4 = null;
              this.prev5 = null;
              this.prev6 = null;
              this.prev7 = null;
              this.mw4 = this.m4;
              this.prev1 = (this.jumla - (this.m1*1 + this.m2*1 + this.m3*1 + this.m4*1)) / 4;
              this.prev2 = this.prev1;
              this.prev3 = this.prev2;
              this.prev4 = this.prev3;

            } else {
              this.mw4 = this.kilamwezi;
            }
          if (this.m5) {

              this.prev1 = null;
              this.prev2 = null;
              this.prev3 = null;
              this.prev4 = null;
              this.prev5 = null;
              this.prev6 = null;
              this.prev7 = null;
              this.mw5 = this.m5;
              this.prev1 = (this.jumla - (this.m1*1 + this.m2*1 + this.m3*1 + this.m4*1 + this.m5*1)) / 3;
              this.prev2 = this.prev1;
              this.prev3 = this.prev2;
            } else {
              this.mw5 = this.kilamwezi;
            }
          if (this.m6) {




              this.prev1 = null;
              this.prev2 = null;
              this.prev3 = null;
              this.prev4 = null;
              this.prev5 = null;
              this.prev6 = null;
              this.prev7 = null;
              this.mw6 = this.m6;
              this.prev1 = (this.jumla - (this.m1*1 + this.m2*1 + this.m3*1 + this.m4*1 + this.m5*1 + this.m6*1)) / 2;
              this.prev2 = this.prev1;
            } else {
              this.mw6 = this.kilamwezi;
            }

            if (this.m7) {
              this.prev1 = null;
              this.prev2 = null;
              this.prev3 = null;
              this.prev4 = null;
              this.prev5 = null;
              this.prev6 = null;
              this.prev7 = null;
              this.mw7 = this.m7;
              this.prev1 = this.jumla - (this.m1*1 + this.m2*1 + this.m3*1 + this.m4*1 + this.m5*1 + this.m6*1 + this.m7*1);

              } else {
                this.mw7 = this.kilamwezi;
              }
            if (this.m8) {
              this.prev1 = null;
              this.prev2 = null;
              this.prev3 = null;
              this.prev4 = null;
              this.prev5 = null;
              this.prev6 = null;
              this.prev7 = null;
              this.mw8 = this.m8;
              } else {
                this.mw8 = this.kilamwezi;
              }
        }


      } else if (this.miezi <= 9) {
        if (this.miezi > 8) {
          if(this.riba){
            this.ribaa = this.riba


          } else {
            this.ribaa = 90;
          }
          // console.log('imefka 3');

          this.totalAmount = Math.round(this.Kiasi * this.ribaa / 100);
          this.jumla = this.totalAmount * 1 + this.Kiasi * 1 ;
          this.kilamwezi = Math.round(this.jumla / 9);
          this.mwaka = this.d.getFullYear();

          if(this.d.getDate() > 21){
            this.mw1 = null;
            this.mw2 = null;
            this.mw2 = null;
            this.mw3 = null;
            this.mw4 = null;
            this.mw5 = null;
            this.mw6 = null;
            this.mw7 = null;
            this.mw8 = null;
            this.mw9 = null;
            this.mwezi1 = this.array[1];
            this.mwezi2 = this.array[2];
            this.mwezi3 = this.array[3];
            this.mwezi4 = this.array[4];
            this.mwezi5 = this.array[5];
            this.mwezi6 = this.array[6];
            this.mwezi7 = this.array[7];
            this.mwezi8 = this.array[8];
            this.mwezi9 = this.array[9];

            // console.log(this.array[1]);
          } else{
            this.mw1 = null;
            this.mw2 = null;
            this.mw2 = null;
            this.mw3 = null;
            this.mw4 = null;
            this.mw5 = null;
            this.mw6 = null;
            this.mw7 = null;
            this.mw8 = null;
            this.mw9 = null;
            this.mwezi1 = this.array[0];
            this.mwezi2 = this.array[1];
            this.mwezi3 = this.array[2];
            this.mwezi4 = this.array[3];
            this.mwezi5 = this.array[4];
            this.mwezi6 = this.array[5];
            this.mwezi7 = this.array[6];
            this.mwezi8 = this.array[7];
            this.mwezi9 = this.array[8];



          }








          if (this.m1) {
            this.prev1 = null;
            this.prev2 = null;
            this.prev3 = null;
            this.prev5 = null;
            this.prev6 = null;
            this.prev7 = null;
            this.prev8 = null;
            this.prev9 = null;
            this.mw1 = this.m1;
            this.prev1 = (this.jumla - this.m1) / 8
            this.prev2 = this.prev1;
            this.prev3 = this.prev2;
            this.prev4 = this.prev3;
            this.prev5 = this.prev4;
            this.prev6 = this.prev5;
            this.prev7 = this.prev6;
            this.prev8 = this.prev7;
        } else {
          this.mw1 = this.kilamwezi;
        }
        if (this.m2) {

            this.prev1 = null;
            this.prev2 = null;
            this.prev3 = null;
            this.prev4 = null;
            this.prev5 = null;
            this.prev6 = null;
            this.prev7 = null;
            this.prev8 = null;
            this.prev9 = null;
            this.mw2 = this.m2;
            this.prev1 = (this.jumla - (this.m1*1 + this.m2*1)) / 7;
            this.prev2 = this.prev1;
            this.prev3 = this.prev2;
            this.prev4 = this.prev3;
            this.prev5 = this.prev4;
            this.prev6 = this.prev5;
            this.prev7 = this.prev6;

        } else {
          this.mw2 = this.kilamwezi;
        }
        if (this.m3) {

            this.prev1 = null;
            this.prev2 = null;
            this.prev3 = null;
            this.prev4 = null;
            this.prev5 = null;
            this.prev6 = null;
            this.prev7 = null;
            this.prev8 = null;
            this.prev9 = null;
            this.mw3 = this.m3;
            this.prev1 = (this.jumla - (this.m1*1 + this.m2*1 + this.m3*1)) / 6;
            this.prev2 = this.prev1;
            this.prev3 = this.prev2;
            this.prev4 = this.prev3;
            this.prev5 = this.prev4;
            this.prev6 = this.prev5;
        } else {
          this.mw3 = this.kilamwezi;
        }
        if (this.m4) {

            this.prev1 = null;
            this.prev2 = null;
            this.prev3 = null;
            this.prev4 = null;
            this.prev5 = null;
            this.prev6 = null;
            this.prev7 = null;
            this.prev8 = null;
            this.prev9 = null;
            this.mw4 = this.m4;
            this.prev1 = (this.jumla - (this.m1*1 + this.m2*1 + this.m3*1 + this.m4*1)) / 5;
            this.prev2 = this.prev1;
            this.prev3 = this.prev2;
            this.prev4 = this.prev3;
            this.prev5 = this.prev4;

          } else {
            this.mw4 = this.kilamwezi;
          }
        if (this.m5) {

            this.prev1 = null;
            this.prev2 = null;
            this.prev3 = null;
            this.prev4 = null;
            this.prev5 = null;
            this.prev6 = null;
            this.prev7 = null;
            this.prev8 = null;
            this.prev9 = null;
            this.mw5 = this.m5;
            this.prev1 = (this.jumla - (this.m1*1 + this.m2*1 + this.m3*1 + this.m4*1 + this.m5*1)) / 4;
            this.prev2 = this.prev1;
            this.prev3 = this.prev2;
            this.prev4 = this.prev3;
          } else {
            this.mw5 = this.kilamwezi;
          }
        if (this.m6) {




            this.prev1 = null;
            this.prev2 = null;
            this.prev3 = null;
            this.prev4 = null;
            this.prev5 = null;
            this.prev6 = null;
            this.prev7 = null;
            this.prev8 = null;
            this.prev9 = null;
            this.mw6 = this.m6;
            this.prev1 = (this.jumla - (this.m1*1 + this.m2*1 + this.m3*1 + this.m4*1 + this.m5*1 + this.m6*1)) / 3;
            this.prev2 = this.prev1;
            this.prev3 = this.prev2;
          } else {
            this.mw6 = this.kilamwezi;
          }

          if (this.m7) {
            this.prev1 = null;
            this.prev2 = null;
            this.prev3 = null;
            this.prev4 = null;
            this.prev5 = null;
            this.prev6 = null;
            this.prev7 = null;
            this.prev8 = null;
            this.prev9 = null;
            this.mw7 = this.m7;
            this.prev1 = (this.jumla - (this.m1*1 + this.m2*1 + this.m3*1 + this.m4*1 + this.m5*1 + this.m6*1 + this.m7*1)) / 2;
            this.prev2 = this.prev1
            } else {
              this.mw7 = this.kilamwezi;
            }
            if (this.m8) {

              this.prev1 = null;
              this.prev2 = null;
              this.prev3 = null;
              this.prev4 = null;
              this.prev5 = null;
              this.prev6 = null;
              this.prev7 = null;
              this.prev8 = null;
              this.prev9 = null;
              this.mw8 = this.m8;
              this.prev1 = this.jumla - (this.m1*1 + this.m2*1 + this.m3*1 + this.m4*1 + this.m5*1 + this.m6*1 + this.m7*1 + this.m8*1);

              } else {
                this.mw8 = this.kilamwezi;
              }
            if (this.m9) {
              this.mw9 = this.m9;
              } else {
                this.mw9 = this.kilamwezi;
              }
        }


      } else if (this.miezi <= 10) {
        if (this.miezi > 9) {
          if(this.riba){
            this.ribaa = this.riba


          } else {
            this.ribaa = 100;
          }
          // console.log('imefka 3');

          this.totalAmount = Math.round(this.Kiasi * this.ribaa / 100);
          this.jumla = this.totalAmount * 1 + this.Kiasi * 1 ;
          this.kilamwezi = Math.round(this.jumla / 10);
          this.mwaka = this.d.getFullYear();
          if(this.d.getDate() > 21){
            this.mw1 = null;
            this.mw2 = null;
            this.mw2 = null;
            this.mw3 = null;
            this.mw4 = null;
            this.mw5 = null;
            this.mw6 = null;
            this.mw7 = null;
            this.mw8 = null;
            this.mw9 = null;
            this.mwezi1 = this.array[1];
            this.mwezi2 = this.array[2];
            this.mwezi3 = this.array[3];
            this.mwezi4 = this.array[4];
            this.mwezi5 = this.array[5];
            this.mwezi6 = this.array[6];
            this.mwezi7 = this.array[7];
            this.mwezi8 = this.array[8];
            this.mwezi9 = this.array[9];
            this.mwezi10 = this.array[10];

            // console.log(this.array[1]);
          } else{
            this.mw1 = null;
            this.mw2 = null;
            this.mw2 = null;
            this.mw3 = null;
            this.mw4 = null;
            this.mw5 = null;
            this.mw6 = null;
            this.mw7 = null;
            this.mw8 = null;
            this.mw9 = null;
            this.mw10 = null;
            this.mwezi1 = this.array[0];
            this.mwezi2 = this.array[1];
            this.mwezi3 = this.array[2];
            this.mwezi4 = this.array[3];
            this.mwezi5 = this.array[4];
            this.mwezi6 = this.array[5];
            this.mwezi7 = this.array[6];
            this.mwezi8 = this.array[7];
            this.mwezi9 = this.array[8];
            this.mwezi10 = this.array[9];


          }

            if (this.m1) {
              this.prev1 = null;
              this.prev2 = null;
              this.prev3 = null;
              this.prev5 = null;
              this.prev6 = null;
              this.prev7 = null;
              this.prev8 = null;
              this.mw1 = this.m1;
              this.prev1 = (this.jumla - this.m1) / 9
              this.prev2 = this.prev1;
              this.prev3 = this.prev2;
              this.prev4 = this.prev3;
              this.prev5 = this.prev4;
              this.prev6 = this.prev5;
              this.prev7 = this.prev6;
              this.prev8 = this.prev7;
              this.prev9 = this.prev8;
          } else {
            this.mw1 = this.kilamwezi;
          }
          if (this.m2) {

              this.prev1 = null;
              this.prev2 = null;
              this.prev3 = null;
              this.prev4 = null;
              this.prev5 = null;
              this.prev6 = null;
              this.prev7 = null;
              this.prev8 = null;
              this.prev9 = null;
              this.mw2 = this.m2;
              this.prev1 = (this.jumla - (this.m1*1 + this.m2*1)) / 8;
              this.prev2 = this.prev1;
              this.prev3 = this.prev2;
              this.prev4 = this.prev3;
              this.prev5 = this.prev4;
              this.prev6 = this.prev5;
              this.prev7 = this.prev6;
              this.prev8 = this.prev7;

          } else {
            this.mw2 = this.kilamwezi;
          }
          if (this.m3) {

              this.prev1 = null;
              this.prev2 = null;
              this.prev3 = null;
              this.prev4 = null;
              this.prev5 = null;
              this.prev6 = null;
              this.prev7 = null;
              this.prev8 = null;
              this.prev9 = null;
              this.mw3 = this.m3;
              this.prev1 = (this.jumla - (this.m1*1 + this.m2*1 + this.m3*1)) / 7;
              this.prev2 = this.prev1;
              this.prev3 = this.prev2;
              this.prev4 = this.prev3;
              this.prev5 = this.prev4;
              this.prev6 = this.prev5;
              this.prev7 = this.prev6;

          } else {
            this.mw3 = this.kilamwezi;
          }
          if (this.m4) {

              this.prev1 = null;
              this.prev2 = null;
              this.prev3 = null;
              this.prev4 = null;
              this.prev5 = null;
              this.prev6 = null;
              this.prev7 = null;
              this.prev8 = null;
              this.mw4 = this.m4;
              this.prev1 = (this.jumla - (this.m1*1 + this.m2*1 + this.m3*1 + this.m4*1)) / 6;
              this.prev2 = this.prev1;
              this.prev3 = this.prev2;
              this.prev4 = this.prev3;
              this.prev5 = this.prev4;
              this.prev6 = this.prev5;

            } else {
              this.mw4 = this.kilamwezi;
            }
          if (this.m5) {

              this.prev1 = null;
              this.prev2 = null;
              this.prev3 = null;
              this.prev4 = null;
              this.prev5 = null;
              this.prev6 = null;
              this.prev7 = null;
              this.prev8 = null;
              this.prev9 = null;
              this.mw5 = this.m5;
              this.prev1 = (this.jumla - (this.m1*1 + this.m2*1 + this.m3*1 + this.m4*1 + this.m5*1)) / 5;
              this.prev2 = this.prev1;
              this.prev3 = this.prev2;
              this.prev4 = this.prev3;
              this.prev5 = this.prev4;
            } else {
              this.mw5 = this.kilamwezi;
            }
          if (this.m6) {




              this.prev1 = null;
              this.prev2 = null;
              this.prev3 = null;
              this.prev4 = null;
              this.prev5 = null;
              this.prev6 = null;
              this.prev7 = null;
              this.prev8 = null;
              this.prev9 = null;
              this.mw6 = this.m6;
              this.prev1 = (this.jumla - (this.m1*1 + this.m2*1 + this.m3*1 + this.m4*1 + this.m5*1 + this.m6*1)) / 4;
              this.prev2 = this.prev1;
              this.prev3 = this.prev2;
              this.prev4 = this.prev3;
            } else {
              this.mw6 = this.kilamwezi;
            }

            if (this.m7) {
              this.prev1 = null;
              this.prev2 = null;
              this.prev3 = null;
              this.prev4 = null;
              this.prev5 = null;
              this.prev6 = null;
              this.prev7 = null;
              this.prev8 = null;
              this.prev9 = null;
              this.mw7 = this.m7;
              this.prev1 = (this.jumla - (this.m1*1 + this.m2*1 + this.m3*1 + this.m4*1 + this.m5*1 + this.m6*1 + this.m7*1)) / 3;
              this.prev2 = this.prev1
              this.prev3 = this.prev2
              } else {
                this.mw7 = this.kilamwezi;
              }
              if (this.m8) {

                this.prev1 = null;
                this.prev2 = null;
                this.prev3 = null;
                this.prev4 = null;
                this.prev5 = null;
                this.prev6 = null;
                this.prev7 = null;
                this.prev8 = null;
                this.prev9 = null;
                this.mw8 = this.m8;
                this.prev1 = (this.jumla - (this.m1*1 + this.m2*1 + this.m3*1 + this.m4*1 + this.m5*1 + this.m6*1 + this.m7*1 + this.m8*1)) / 2;
                this.prev2 = this.prev1
                } else {
                  this.mw8 = this.kilamwezi;
                }


                if (this.m9) {

                  this.prev1 = null;
                  this.prev2 = null;
                  this.prev3 = null;
                  this.prev4 = null;
                  this.prev5 = null;
                  this.prev6 = null;
                  this.prev7 = null;
                  this.prev8 = null;
                  this.prev9 = null;
                  this.mw9 = this.m9;
                  this.prev1 = this.jumla - (this.m1*1 + this.m2*1 + this.m3*1 + this.m4*1 + this.m5*1 + this.m6*1 + this.m7*1 + this.m8*1 + this.m9*1);

                  } else {
                    this.mw9 = this.kilamwezi;
                  }

                if (this.m10) {
                  this.prev1 = null;
                  this.prev2 = null;
                  this.prev3 = null;
                  this.prev4 = null;
                  this.prev5 = null;
                  this.prev6 = null;
                  this.prev7 = null;
                  this.prev8 = null;
                  this.prev9 = null;
                  this.mw10 = this.m10;
                  } else {
                    this.mw10 = this.kilamwezi;
                  }
        }




      } else if (this.miezi <= 11) {
        if (this.miezi > 10) {
          if(this.riba){
            this.ribaa = this.riba


          } else {
            this.ribaa = 110;
          }
          // console.log('imefka 3');

          this.totalAmount = Math.round(this.Kiasi * this.ribaa / 100);
          this.jumla = this.totalAmount * 1 + this.Kiasi * 1 ;
          this.kilamwezi = Math.round(this.jumla / 11);
          this.mwaka = this.d.getFullYear();
          if(this.d.getDate() > 21){
            this.mw1 = null;
            this.mw2 = null;
            this.mw2 = null;
            this.mw3 = null;
            this.mw4 = null;
            this.mw5 = null;
            this.mw6 = null;
            this.mw7 = null;
            this.mw8 = null;
            this.mw9 = null;
            this.mw10 = null;
            this.mwezi1 = this.array[1];
            this.mwezi2 = this.array[2];
            this.mwezi3 = this.array[3];
            this.mwezi4 = this.array[4];
            this.mwezi5 = this.array[5];
            this.mwezi6 = this.array[6];
            this.mwezi7 = this.array[7];
            this.mwezi8 = this.array[8];
            this.mwezi9 = this.array[9];
            this.mwezi10 = this.array[10];
            this.mwezi11 = this.array[11];

            // console.log(this.array[1]);
          } else{
            this.mw1 = null;
            this.mw2 = null;
            this.mw2 = null;
            this.mw3 = null;
            this.mw4 = null;
            this.mw5 = null;
            this.mw6 = null;
            this.mw7 = null;
            this.mw8 = null;
            this.mw9 = null;
            this.mw10 = null;
            this.mwezi1 = this.array[0];
            this.mwezi2 = this.array[1];
            this.mwezi3 = this.array[2];
            this.mwezi4 = this.array[3];
            this.mwezi5 = this.array[4];
            this.mwezi6 = this.array[5];
            this.mwezi7 = this.array[6];
            this.mwezi8 = this.array[7];
            this.mwezi9 = this.array[8];
            this.mwezi10 = this.array[9];
            this.mwezi11 = this.array[10];


          }
            if (this.m11) {
              this.mw11 = this.m11;
            } else {
              this.mw11 = this.kilamwezi;
            }
            if (this.m10) {
              this.mw10 = this.m10;
            } else {
              this.mw10 = this.kilamwezi;
            }
            if (this.m9) {
              this.mw9 = this.m9;
            } else {
              this.mw9 = this.kilamwezi;
            }
            if (this.m8) {
              this.mw8 = this.m8;
            } else {
              this.mw8 = this.kilamwezi;
            }
            if (this.m7) {
              this.mw7 = this.m7;
            } else {
              this.mw7 = this.kilamwezi;
            }
            if (this.m6) {
              this.mw6 = this.m6;
            } else {
              this.mw6 = this.kilamwezi;
            }
            if (this.m5) {
              this.mw5 = this.m5;
            } else {
              this.mw5 = this.kilamwezi;
            }
            if (this.m4) {
              this.mw4 = this.m4;
            } else {
              this.mw4 = this.kilamwezi;
            }
            if (this.m3) {
              this.mw3 = this.m3;
            } else {
              this.mw3 = this.kilamwezi;
            }
            if (this.m2) {
              this.mw2 = this.m2;
            } else {
              this.mw2 = this.kilamwezi;
            }
            if (this.m1) {
              this.mw1 = this.m1;
            } else {
              this.mw1 = this.kilamwezi;
            }


        }

      }
      // put every month's amount in the right place before the loan is prepared for sending
      this.fixSchedule();
      this.mambos = {
        user: this.user,
         jina: this.jina,
          Total_mkopo: this.jumla,
           Riba: this.ribaa,
           company_username: this.company_user,
           Account_no:this.account,
           pin:this.pin,
           Simu:this.Simu,
            jumla: this.jumla,
             RealMkopo: this.Kiasi,
             service_officer: this.lservice_officer,
              Faida: this.totalAmount,
               mw1 : this.mw1,
               Miezi: this.miezi,
                mw2: this.mw2,
                 mw3: this.mw3,
                  mw4: this.mw4,
                   mw5: this.mw5,
                    mw6: this.mw6,
                     mw7: this.mw7,
                      mw8: this.mw8,
                       mw9: this.mw9,
                        mw10: this.mw10,
                         mw11: this.mw11,
                          mw12: this.mw12,
                          mwezi1: this.mwezi1,
                          mwezi2: this.mwezi2,
                          mwezi3: this.mwezi3,
                          mwezi4: this.mwezi4,
                          mwezi5: this.mwezi5,
                          mwezi6: this.mwezi6,
                          mwezi7: this.mwezi7,
                          mwezi8: this.mwezi8,
                          mwezi9: this.mwezi9,
                          mwezi10: this.mwezi10,
                          mwezi11: this.mwezi11,
                          mwezi12: this.mwezi12,
                          mwaka: this.mwaka,
                          day:this.day,
                          tarehe:this.mdaa,
                          company: this.company_user
                       },
                       console.log('loan ni '+this.Kiasi)


        this.note = {
          user: this.user,
          jina: this.jina,
          Total_pay: this.total_pay,
          loan_repay: 0,
          Interest_pay: this.ribaa,
          awamu: this.miezi,
          Balance: this.jumla,
          service_officer: this.lservice_officer,
          pin: this.pin,
          kilichokopwa: this.Kiasi,
          // tangu: this.Tarehe,
          rangi: this.rangi,
          kipindi: this.kipindi,
          company: this.company_user,
          mwezi: this.getMwezi,
          mwaka:this.mwaa,
          Account_no:this.account,
          Simu:this.Simu,
          day:this.day,
          wilaya:this.wilaya,
          mkoa:this.mkoa,
          tarehe:this.mdaa,

          route:'toa'
        };

}

time(){
  this.day = this.d.getDate();
  this.mwaa = this.d.getFullYear();
  for (let i = this.d.getMonth(); i <= this.monthes.length; i++) {
    this.mopa += this.monthes[i] + ',';
    this.array.push(this.monthes[i]);
    this.getMwezi=this.monthes[this.d.getMonth()]
    // console.log(this.getMwezi)
    // console.log(this.mwaa)
}}

onriba() {
  this.totalAmount = this.Kiasi * this.riba / 100;
  this.jumla = this.totalAmount * 1 + this.Kiasi * 1 ;
  this.kilamwezi = Math.round(this.jumla / this.miezi);

}
// updatemimi() {
//   this.mavi = this.mor2;

// }


openSnacks() {

    this.snackBar.openFromComponent(OpenSnackerComponent, {
      duration: 5000,
      panelClass: ['blue-snackbar']
    });
  }
  openSnackserror(){
    this.snackBar.openFromComponent(OpenSnackserrorComponent, {
      duration: 5000,
      panelClass: ['blue-snackbar']
    });

  }



Register() {


  this.ngProgress.ref().start();

  this.restframework.getLoginPosts(this.mambos, 'Mkopo/').then((result) => {
    this.RecordNote();
    this.responseData = result;
    localStorage.setItem('userData2', this.responseData);


    this.openSnacks();
    this.moni()
    this.router.navigate(['/Sub/Details/Mkopoadmin'])
    this.ngProgress.ref().complete();
    }, (err) => {
      console.log(err)

    });

}


RecordNote() {

  // this.ngProgress.ref().start();
  //.log('passed Record note');
  this.restframework.getLoginPosts(this.note, 'Malipo/').then((result) => {
    this.responseData = result;
    // console.log(this.note);
    // console.log(this.userData);
    // alert(this.userData.username)
    // localStorage.setItem('userData2', this.responseData);
    // localStorage.setItem('user', this.userData.Username);
    // this.router.navigate(['/Admindash/Ongeza-mkopo']);
    // this.ngProgress.ref().complete();
    }, (err) => {
      alert('error');

    });

}


moni(){
  this.detailsview.fuck();
  this.pubdetailsview.fuck()
}


addall(){

  this.m2= null;
  this.m3 = null;

  this.m2 = this.prev1;
  this.m3 = this.prev1;
  this.updateTotal();
  // this.m2 = this.prev1;
}
fourall(){
  this.m2= null;
  this.m3 = null;
  this.m4 = null;
  this.m5 = null;

  this.m2 = this.prev1;
  this.m3 = this.prev1;
  this.m4 = this.prev1;
  this.m5 = this.prev1;
  this.updateTotal();

}



// ================= helpers for the new form layout (design 1) =================
// They only read what updateTotal() already calculated; the loan maths is not changed.

// Puts the schedule right before the loan is prepared for sending.
// - No month typed: every month pays "kila mwezi" (as before).
// - Some months typed: the other months share what is left, so the months add up to "Jumla".
// - Every month gets its name: from this month (next month after the 21st), going on past December.
// (The long code above mixed months up when only some were typed, e.g. if month 1 was empty it
//  filled month 2, and it left no name for a 1-month loan after the 21st or for month 12.)
fixSchedule() {
  const months = this.monthNumbers();
  if (months.length === 0) {
    return;
  }

  // month names
  const names = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const today = new Date();
  let first = today.getMonth();
  if (today.getDate() > 21) {
    first = first + 1;
  }
  for (const i of months) {
    this['mwezi' + i] = names[(first + i - 1) % 12];
  }

  // which months were typed, and how much they add up to
  let typedTotal = 0;
  const notTyped = [];
  for (const i of months) {
    const typed = this['m' + i];
    if (typed !== null && typed !== undefined && String(typed).trim() !== '') {
      this['mw' + i] = typed;
      typedTotal = typedTotal + Number(typed);
    } else {
      notTyped.push(i);
    }
  }

  // nothing typed: every month pays "kila mwezi"
  if (notTyped.length === months.length) {
    for (const i of months) {
      this['mw' + i] = this.kilamwezi;
    }
    return;
  }

  // some typed: the other months share what is left (the last one takes the rounding)
  const left = Number(this.jumla || 0) - typedTotal;
  if (notTyped.length > 0) {
    const share = Math.round(left / notTyped.length);
    for (let k = 0; k < notTyped.length; k++) {
      if (k === notTyped.length - 1) {
        this['mw' + notTyped[k]] = left - share * (notTyped.length - 1);
      } else {
        this['mw' + notTyped[k]] = share;
      }
    }
  }
}

// the months of the schedule: [1, 2, 3 ...] up to the number of months (max 12)
monthNumbers() {
  const list = [];
  let n = Math.round(Number(this.miezi));
  if (!(n > 0)) {
    return list;
  }
  if (n > 12) {
    n = 12;
  }
  for (let i = 1; i <= n; i++) {
    list.push(i);
  }
  return list;
}

// name of month i in the schedule ("December" ...)
monthName(i) {
  return this['mwezi' + i];
}

// the year of month i: the schedule can go on into next year (December -> January)
monthYear(i) {
  const names = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  let year = Number(this.mwaka) || new Date().getFullYear();
  // a loan made in late December starts in January of next year
  const today = new Date();
  if (names.indexOf(this.mwezi1) < today.getMonth()) {
    year = year + 1;
  }
  let last = names.indexOf(this.mwezi1);
  for (let k = 2; k <= i; k++) {
    const now = names.indexOf(this['mwezi' + k]);
    if (now < last) {
      year = year + 1;   // passed December
    }
    last = now;
  }
  return year;
}

// the amount that will be saved for month i (your own amount, or "kila mwezi")
monthPay(i) {
  return this['mw' + i];
}

// your own amount typed for month i (empty = use "kila mwezi")
getM(i) {
  return this['m' + i];
}

setM(i, value) {
  this['m' + i] = value;
  this.updateTotal();
}

// all the monthly amounts added together
scheduleTotal() {
  let total = 0;
  for (const i of this.monthNumbers()) {
    total = total + Number(this.monthPay(i) || 0);
  }
  return total;
}

// does the schedule add up to "Jumla"? (each month is rounded, so allow 1 shilling per month)
scheduleOk() {
  return Math.abs(this.scheduleTotal() - Number(this.jumla || 0)) <= this.monthNumbers().length;
}

// "Riba" shown: the one typed, or the normal one (10% for every month)
ribaShown() {
  if (this.ribaa) {
    return this.ribaa;
  }
  return Math.round(Number(this.miezi) || 0) * 10;
}

// the form can be sent when there is an amount and months
canSend() {
  return Number(this.Kiasi) > 0 && Number(this.miezi) > 0;
}

openModal(template: TemplateRef<any>) {
  this.modalRef = this.modalService.show(template, {class: 'modal-sm'});
}

confirm(): void {
  this.Register();
  // this.message = 'Confirmed!';
  this.modalRef.hide();
}

decline(): void {
  // this.message = 'Declined!';
  this.modalRef.hide();
}



kokotoa(){
  console.log('passed here')
  if(this.miezi_Pesa === '1'){
    this.Kiasi = this.Kiasi_Pesa / 1.1;
    this.miezi = 1
    this.ribaa = 10
    this.updateTotal();

  }
  else if(this.miezi_Pesa === '2'){
    this.Kiasi = this.Kiasi_Pesa / 1.2;
    this.miezi = 2
    this.ribaa = 20
    this.updateTotal();

  }
  else if(this.miezi_Pesa === '3'){
    this.Kiasi = this.Kiasi_Pesa / 1.3;
    this.miezi = 3
    this.ribaa = 30
    this.updateTotal();

  }
  else if(this.miezi_Pesa === '4'){
    this.Kiasi = this.Kiasi_Pesa / 1.4;
    this.miezi = 4
    this.ribaa = 40
    this.updateTotal();

  }
  else if(this.miezi_Pesa === '5'){
    this.Kiasi = this.Kiasi_Pesa / 1.5;
    this.miezi = 5
    this.ribaa = 50
    this.updateTotal();

  }
  else if(this.miezi_Pesa === '6'){
    this.Kiasi = this.Kiasi_Pesa / 1.6;
    this.miezi = 6
    this.ribaa = 60
    this.updateTotal();

  }
  else if(this.miezi_Pesa === '7'){
    this.Kiasi = this.Kiasi_Pesa / 1.7;
    this.miezi = 7
    this.ribaa = 70
    this.updateTotal();

  }
  else if(this.miezi_Pesa === '8'){
    this.Kiasi = this.Kiasi_Pesa / 1.8;
    this.miezi = 8
    this.ribaa = 80
    this.updateTotal();

  }
  else if(this.miezi_Pesa === '9'){
    this.Kiasi = this.Kiasi_Pesa / 1.9;
    this.miezi = 9
    this.ribaa = 90
    this.updateTotal();

  }
  else if(this.miezi_Pesa === '10'){
    this.Kiasi = this.Kiasi_Pesa / 2;
    this.miezi = 10
    this.ribaa = 100
    this.updateTotal();

  }
  else if(this.miezi_Pesa === '11'){
    this.Kiasi = this.Kiasi_Pesa / 2.1;
    this.miezi = 11
    this.ribaa = 110
    this.updateTotal();

  }
  else if(this.miezi_Pesa === '12'){
    this.Kiasi = this.Kiasi_Pesa / 2.2;
    this.miezi = 12
    this.ribaa = 120
    this.updateTotal();

  }
  else{
  }
}
}
