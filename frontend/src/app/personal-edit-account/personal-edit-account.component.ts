import { Component, OnInit } from '@angular/core';
import { RestframeworkService } from '../apiservice/restframework.service';
import { Router } from '@angular/router';
import { NgProgress } from 'ngx-progressbar';

@Component({
  selector: 'app-personal-edit-account',
  templateUrl: './personal-edit-account.component.html',
  styleUrls: ['./personal-edit-account.component.css']
})
export class PersonalEditAccountComponent implements OnInit {
  userData = {'name': '',
  'nyumba_number': '', 
  'file_no': '',
   'nyumba': '',
    'simu': '',
     'kata': '',
      'wilaya': '',
      'service_officer': '',
       'mkoa': '',
        'wapangaji_max': '',
         'eneo': '',
          'wapangaji_current': '',
           };
 responseData;
 Created;
 Infos;
 nyumbano;

 constructor(public ngProgress: NgProgress, public router: Router, public rest_framework: RestframeworkService) { 
   this.nyumbano = localStorage.getItem('nyumbaid')
   this.userData.service_officer = String(localStorage.getItem('lservice_officer'))
  //  console.log('nyumbid: '+ this.userData.nyumba_number)
 }

 ngOnInit() {
 }


 Register() {
   // this.ngProgress.start();
  //  console.log('passed');
   this.rest_framework.wapangajiPos1(this.userData, 'NyumbaUpdate/'+ this.nyumbano + '/').then((result) => {
     this.responseData = result;
     // alert(this.userData.username)
     localStorage.setItem('userData2', this.responseData);
    //  localStorage.setItem('user', this.userData.Username);
    //  this.UserCreate();
    //  this.UserInfo();
     this.router.navigate(['/Nyumba-dash/Nyumba']); 
     // this.ngProgress.done();
     }, (err) => {
       alert('error');

     });

    //  this.Created ={
    //    username: this.userData.Username,
    //    email:'lewicpro@yahoo.com',
    //    password:'lewicpro',
    //    password2:'lewicpro',


    //  }

    //  this.Infos ={
    //    username: this.userData.Username,


    //  }

 }

 UserCreate() {
   // this.ngProgress.start();
  //  console.log('passed');
   this.rest_framework.getLoginPosts(this.Created, 'UserCreate/').then((result) => {
     this.responseData = result;
    //  console.log(this.responseData);

     // alert(this.userData.username)
     localStorage.setItem('userData2', this.responseData);
    //  localStorage.setItem('user', this.userData.Username);
     this.router.navigate(['/Admindash/Ongeza-mkopo']);
     // this.ngProgress.done();
     }, (err) => {
       alert('error');

     });

 }
 UserInfo() {
   this.ngProgress.start();
  //  console.log('passed');
   this.rest_framework.getLoginPosts(this.Infos, 'Info/').then((result) => {
     this.responseData = result;
    //  console.log(this.responseData);
    //  console.log(this.userData.Username);
     // alert(this.userData.username)
     localStorage.setItem('userData2', this.responseData);
    //  localStorage.setItem('user', this.userData.Username);
     this.router.navigate(['/Admindash/Ongeza-mkopo']);
     this.ngProgress.done();
     }, (err) => {
       alert('error');

     });

 }

}


