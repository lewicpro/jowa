import { Component, OnInit } from '@angular/core';
import { RestframeworkService } from '../apiservice/restframework.service';
import { Router } from '../../../node_modules/@angular/router';
import { NgProgress } from 'ngx-progressbar';

@Component({
  selector: 'app-ongeza-nyumba',
  templateUrl: './ongeza-nyumba.component.html',
  styleUrls: ['./ongeza-nyumba.component.css']
})
export class OngezaNyumbaComponent implements OnInit {
  // foods = [
  //   {value: 'steak-0', viewValue: 'Steak'},
  //   {value: 'pizza-1', viewValue: 'Pizza'},
  //   {value: 'tacos-2', viewValue: 'Tacos'}
  // ];
  userData = {'name': '',
  'nyumba_number': '', 
  'file_no': '',
   'nyumba': '',
    'simu': '',
     'kata': '',
      'wilaya': '',
       'mkoa': '',
        'wapangaji_max': '',
         'eneo': '',
          'wapangaji_current': '',
          'House_Owner': '',
           };
  responseData;
  Created;
  all;
  Infos;

 constructor(public ngProgress:NgProgress, public router: Router, public rest_framework: RestframeworkService) {
  this.rest_framework.getLists().then(data=>{

    this.all = data;
  });
}

 ngOnInit() {
 }


 Register() {
   this.ngProgress.start();
  //  console.log('passed');
   this.rest_framework.wapangajiPost(this.userData, 'Nyumba/').then((result) => {
     this.responseData = result;
     // alert(this.userData.username)
    //  localStorage.setItem('userData2', this.responseData);
    //  localStorage.setItem('user', this.userData.Username);
    //  this.UserCreate();
    //  this.UserInfo();
     this.router.navigate(['/Nyumba-dash/Nyumba']); 
     this.ngProgress.done();
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
   this.ngProgress.start();
  //  console.log('passed');
   this.rest_framework.getLoginPosts(this.Created, 'UserCreate/').then((result) => {
     this.responseData = result;
    //  console.log(this.responseData);

     // alert(this.userData.username)
    //  localStorage.setItem('userData2', this.responseData);
    //  localStorage.setItem('user', this.userData.Username);
     this.router.navigate(['/Admindash/Ongeza-mkopo']);
     this.ngProgress.done();
     }, (err) => {
       alert('error');

     });

 }
 UserInfo() {
   // this.ngProgress.start();
  //  console.log('passed');
   this.rest_framework.getLoginPosts(this.Infos, 'Info/').then((result) => {
     this.responseData = result;
    //  console.log(this.responseData);
    //  console.log(this.userData.Username);
     // alert(this.userData.username)
    //  localStorage.setItem('userData2', this.responseData);
    //  localStorage.setItem('user', this.userData.Username);
     this.router.navigate(['/Admindash/Ongeza-mkopo']);
     // this.ngProgress.done();
     }, (err) => {
       alert('error');

     });

 }

}

