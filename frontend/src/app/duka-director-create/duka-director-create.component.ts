import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { RestframeworkService } from '../apiservice/restframework.service';
import { NgProgress } from 'ngx-progressbar';

@Component({
    selector: 'app-duka-director-create',
    templateUrl: './duka-director-create.component.html',
    styleUrls: ['./duka-director-create.component.css'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class DukaDirectorCreateComponent implements OnInit {
  userData={
    'tarehe': '',
      'user': '',
      'jina': '',
        'Account_no': '',
        'statuse': 'worker',
          'name_of_the_bank': '',
          'kata': '',
            'wilaya': '',
              'Registration_no': '',
              'mkoa': '',
                'Email': '',
                  'service_officer': '',
                    'Simu': '',
                    'age': '',
                      'Tin_no': '',
                        'expire': '',
                        'company':'',
                        'mydirector': '',

                          'privs': 'HouseOwner',
                            'Password': '',
                            'Jinsia': ''
            };
  responseData;
  Created;
  text = '';
  possible = 'qwertyuiop{}lkjhgasdfghjklzxcvbnm<>?1234567890!@#$%^&*()'

  mopa='false';
  giveoout;
  accountee;
  time;
  language="English"
  all;
  d = new Date();
  Infos;
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

  constructor(public router: Router, public rest_framework: RestframeworkService, public ngProgress:NgProgress) {
    for(let i = 0; i < 10; i++){
      this.text += this.possible.charAt(Math.floor(Math.random() * this.possible.length))

    }
    this.userData.Password = this.text;

    //.log(this.text)

    this.rest_framework.getLists().then(data=>{

      this.all = data;
      for(const m of this.all){

        if(m.user === this.userData.user){

        }

      }

    })
    }

 ngOnInit() {
 }


 validate(){
   this.rest_framework.dukaz().then(data=>{

     this.all = data;

     for(const m of this.all){



       if(m.user == this.userData.user){

         this.giveoout= m.user
        //  .log(this.giveoout)


       }


     }

   })

 }

 account(){
   this.rest_framework.getLists().then(data=>{

     this.all = data;
     // console.log('come first')
     for(const m of this.all){
       // console.log('comes sec')


       if(m.Account_no === this.userData.Account_no){

         this.accountee= m.Account_no
         //.log(this.giveoout)


       }


     }

   })

 }


 Register() {
  this.min = this.d.getMinutes();
  this.hour = this.d.getHours()
  this.sec = this.d.getSeconds()
  this.mwzi = this.d.getMonth()
  this.moxt = parseInt(this.mwzi) + 1
  this.times = this.d.getFullYear() + "-" + this.moxt + "-" + this.d.getDate() + "  " + this.hour + ":" + this.min + ":" + this.sec
  // this.userData.Tarehe = this.times
  this.userData.mydirector=localStorage.getItem('DirectorDuka')
  this.userData.company=localStorage.getItem('company')
  this.userData.service_officer=localStorage.getItem('DirectorDuka')
  this.userData.tarehe=this.times

   this.ngProgress.ref().start();
   // console.log('passed');
   this.rest_framework.getLoginPosts(this.userData, 'DukaInfo/'+localStorage.getItem('DirectorDuka')+'/').then((result) => {
     this.responseData = result;
     // alert(this.userData.username)
     // localStorage.setItem('userData2', this.responseData);
     // localStorage.setItem('user', this.userData.user);
     this.router.navigate(['/DukaMmilikiDashboard/Sales'])
     this.UserCreate();
     this.UserInfo();
    //  this.router.navigate(['/Nyumba-dash/Nyumba']);

     }, (err) => {
       alert('error');

     });

     this.Created ={
       username: this.userData.user,
       email:this.userData.Email,
       password:this.userData.Password,
       password2:this.userData.Password,


     }

     this.Infos ={
       user: this.userData.user,


     }
     this.ngProgress.ref().complete();

 }

 UserCreate() {
  this.Created ={
    username: this.userData.user,
    email:'sales@gmail.com',
    password:this.userData.Password,
    password2:this.userData.Password,


  }
   // this.ngProgress.ref().start();
   // console.log('passed');
   this.rest_framework.getLoginPosts(this.Created, 'UserCreate/').then((result) => {
     this.responseData = result;
     // console.log(this.responseData);
     // console.log(this.userData.user);
     // alert(this.userData.username)
     // localStorage.setItem('userData2', this.responseData);
     // localStorage.setItem('user', this.userData.user);
    //  this.router.navigate(['/Admindash/Ongeza-mkopo']);
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
     // console.log(this.userData.user);
     // alert(this.userData.username)
     // localStorage.setItem('userData2', this.responseData);
     // localStorage.setItem('user', this.userData.user);
    //  this.router.navigate(['/Admindash/Ongeza-mkopo']);
     // this.ngProgress.ref().complete();
     }, (err) => {
       alert('error');

     });

 }

}
