import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { RestframeworkService } from '../apiservice/restframework.service';
import { NgProgress } from 'ngx-progressbar';

@Component({
    selector: 'app-ongeza-wakala',
    templateUrl: './ongeza-wakala.component.html',
    styleUrls: ['./ongeza-wakala.component.css'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class OngezaWakalaComponent implements OnInit {
  userData = {'user': '',
  'jina': '', 'tarehe': '',
   'Total_pay': '',
    'recept_no': '',
     'Balance': '',
      'wilaya': '',
       'mkoa': '',
        'kipindi': '',
          'Birth': '',
            'kata': '',
              'mwaka': '',
                'service_officer': '',
                  'Simu': '',
                    'Account_no': '',
                      'mmiliki': '',
                      'Registration_no': '',
                        'company': '',
                          'Tin_no': '',
                            'privs': 'wakala',
              
           };
 responseData;
 Created;
 text = '';
 possible = 'qwertyuiop{}lkjhgasdfghjklzxcvbnm<>?1234567890!@#$%^&*()'

 mopa='false';
 giveoout;
 accountee;
 all;
 Infos;


 ldate;
 simu_dalali;
 restframework;
 malipo: number;
 jina_mdhamini;
 baki;
 nyumba_number;
 kulipia;
 date;
 eneo;
 ulipoajiriwa;
 last_date;
 nyumbaid;
 anwani;

 muda;
 idara;
 status;
 miezi2;
 mwezi1;
 nyumbaname;
 year;
 kata;
 message: string;
 wilaya;
 miezi;
 miezi3;
 cheo;
 min;
 hour;
 sec;
 times;
 mdaa;
 mopai;
 mwzi;
 moxt;
 d = new Date();

 constructor(public router: Router, public rest_framework: RestframeworkService, public ngProgress:NgProgress) {

  this.rest_framework.getMmilikiList().then(data=>{
    this.all = data;
  });
  this.min = this.d.getMinutes();
  this.hour = this.d.getHours()
  this.sec = this.d.getSeconds()
  this.mwzi = this.d.getMonth()
  this.moxt = parseInt(this.mwzi) + 1
  this.userData.tarehe = this.d.getDate() + "/" + this.moxt + "/" +this.d.getFullYear() + "  ||  " + this.hour + ":" + this.min + ":" + this.sec
  // this.mdaa = this.times
  }

 ngOnInit() {
 }


 validate(){
   

 }

//  account(){
//    this.rest_framework.getLists().then(data=>{

//      this.all = data;
//      // console.log('come first')
//      for(const m of this.all){
//        // console.log('comes sec')
       

//        if(m.Account_no === this.userData.Account_no){
         
//          this.accountee= m.Account_no
//          //.log(this.giveoout)

       
//        }
        

//      }

//    })

//  }


 Register() {
   this.ngProgress.ref().start();
   // console.log('passed');
   this.rest_framework.getLoginPosts(this.userData, 'wakala/').then((result) => {
     this.responseData = result;
     // alert(this.userData.username)
     // localStorage.setItem('userData2', this.responseData);
     // localStorage.setItem('user', this.userData.Username);
    //  this.UserCreate();
    //  this.UserInfo();
     this.router.navigate(['/wakala/wakala-wote']);
     
     }, (err) => {
       alert('error');

     });

    //  this.Created ={
    //    username: this.userData.Username,
    //    email:'lewicpro@yahoo.com',
    //    password:this.userData.Password,
    //    password2:this.userData.Password,


    //  }

     this.Infos ={
      //  user: this.userData.Username,


     }
     this.ngProgress.ref().complete();

 }

 UserCreate() {
   // this.ngProgress.ref().start();
   // console.log('passed');
   this.rest_framework.getLoginPosts(this.Created, 'UserCreate/').then((result) => {
     this.responseData = result;
     // console.log(this.responseData);
     // console.log(this.userData.Username);
     // alert(this.userData.username)
     // localStorage.setItem('userData2', this.responseData);
     // localStorage.setItem('user', this.userData.Username);
     this.router.navigate(['/Admindash/Ongeza-mkopo']);
     // this.ngProgress.ref().complete();
     }, (err) => {
       alert('error');

     });

 }
 UserInfo() {
   // this.ngProgress.ref().start();
   //.log('passed');
   this.rest_framework.getLoginPosts(this.Infos, 'Info/').then((result) => {
     this.responseData = result;
     // console.log(this.responseData);
     // console.log(this.userData.Username);
     // alert(this.userData.username)
     // localStorage.setItem('userData2', this.responseData);
     // localStorage.setItem('user', this.userData.Username);
     this.router.navigate(['/Admindash/Ongeza-mkopo']);
     // this.ngProgress.ref().complete();
     }, (err) => {
       alert('error');

     });

 }

}
