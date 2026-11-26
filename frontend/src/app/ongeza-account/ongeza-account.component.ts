import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { RestframeworkService } from '../apiservice/restframework.service';
import { Router } from '../../../node_modules/@angular/router';
import { NgProgress } from 'ngx-progressbar';

@Component({
    selector: 'app-ongeza-account',
    templateUrl: './ongeza-account.component.html',
    styleUrls: ['./ongeza-account.component.css'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class OngezaAccountComponent implements OnInit {
  userData = {
    'Username': '',
   'jina': '',
    'TSD': '',
    'Account_no': '',
     'ofisi': '',
      'kata': '',
       'wilaya': '',
        'mkoa': '', 
          'Simu': '',
           'pin': '',
           'check': '',
            'csv': '',
             'expire': '',
              'file_no': '',
              'Password': '',
              'Jinsia': '',
            };
  responseData;
  Created;

  mopa='false';
  giveoout;
  accountee;
  text ="";
  all;
  stats;
  Infos;
  possible ='qwertyuiopasdfghjklzxcvbnm<>?!@#$%^&*1234567890'

  constructor(public router: Router, public rest_framework: RestframeworkService, public ngProgress:NgProgress) {
    this.stats ='free';
    this.userData.Password = String(Math.floor((Math.random() * 1000) + 999));
    

    //.log('text : '+this.text)
    //.log('password: ' + this.userData.Password)

    this.rest_framework.getLists().then(data=>{

      this.all = data;
      for(const m of this.all){

        if(m.Username === this.userData.Username){

        }

      }

    })
   }

  ngOnInit() {
  }


  validate(){
    this.rest_framework.getLists().then(data=>{

      this.all = data;
      // console.log('come first')
      for(const m of this.all){
        // console.log('comes sec')
        

        if(m.Username === this.userData.Username){
          
          this.giveoout= m.Username
          //.log(this.giveoout)

        
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
    this.stats ='filed'

    this.ngProgress.ref().start();
    // console.log('passed');
    this.rest_framework.getLoginPosts(this.userData, 'Register/').then((result) => {
      this.responseData = result;
      // alert(this.userData.username)
      // localStorage.setItem('userData2', this.responseData);
      // localStorage.setItem('user', this.userData.Username);
      this.UserCreate();
      this.UserInfo();
      this.userData.jina = null;
      this.userData.kata = null;
      this.userData.mkoa = null;
      this.userData.ofisi = null;
      this.userData.pin = null;
      this.userData.wilaya = null;
      this.userData.Jinsia = null;
      this.userData.Simu = null;
      this.userData.check = null;
      this.userData.TSD = null;
      this.userData.Username = null;
      this.userData.csv = null;
      this.userData.expire = null;
      this.userData.Password = null;
      this.router.navigate(['/Admindash/Wateja']);
      
      }, (err) => {
        alert('imeishia pa kumsajili mtumiaji');

      });

      this.Created ={
        username: this.userData.Username,
        email:'lewicpro@yahoo.com',
        password: this.userData.Password,
        password2:this.userData.Password,


      }

      this.Infos ={
        user: this.userData.Username,


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
      // this.router.navigate(['/Admindash/Ongeza-mkopo']);
      // this.ngProgress.ref().complete();
      }, (err) => {
        alert(' Sorry, Imeishia pa kumtengeneza user');

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
      // this.router.navigate(['/Admindash/Ongeza-mkopo']);
      // this.ngProgress.ref().complete();
      }, (err) => {
        alert('Imeishia pa kutengeneza taarifa za hesabu');

      });

  }

}
