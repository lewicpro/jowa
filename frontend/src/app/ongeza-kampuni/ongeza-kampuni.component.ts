import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgProgress } from 'ngx-progressbar';
import { RestframeworkService } from '../apiservice/restframework.service';

@Component({
  selector: 'app-ongeza-kampuni',
  templateUrl: './ongeza-kampuni.component.html',
  styleUrls: ['./ongeza-kampuni.component.css']
})
export class OngezaKampuniComponent implements OnInit {
 // foods = [
  //   {value: 'steak-0', viewValue: 'Steak'},
  //   {value: 'pizza-1', viewValue: 'Pizza'},
  //   {value: 'tacos-2', viewValue: 'Tacos'}
  // ];
  userData = {
    'company_username': '',
   'company_name': '',
    'Eneo_la_kazi': '',
    'Account_no': '',
     'ofisi': '',
      'kata': '',
       'wilaya': '',
        'mkoa': '', 
          'Simu': '',
           'company_owner': '',
           'service_officer': '',
            'csv': '',
             'expire': '',
              'file_no': '',
              'loan_officer_username': '',
              'Thamani_ya_kampuni': '',
              'Password': '1234lw',
              // 'company_name': '',
              'Tin_Namba': '',
            };
  // reg;
  responseData;
  reg = {
    'Username': '',
    'jina': '',
      'TSD': 'SFSDF',
      'Account_no': 'FSFSF',
      'ofisi': 'FSFSF',
        'kata': 'DFGDFG',
        'wilaya': 'DGDFGDG',
          'mkoa': 'DGERTER', 
            'Simu': '0735464',
            'company': 'Sub_Admin',
            'company_name': '',
            'company_username': '',
      //       'service_officer': 'ERTERT',
      //         'csv': 'FGDFG',
      //         'expire': 'ERTERTERD',
      //           'file_no': 'ERTERT',
      //           'generated_id': 'ETERTE',
                'privs': 'Admin',
                'Password': '1234',
      //           // 'company_name': '',
      //           'Tin_Namba': 'ERTYRHFG',
          };

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


 Microfinance() {
  this.userData.service_officer = this.reg.Username;
   this.ngProgress.start();
  //  console.log('passed');
   this.rest_framework.wapangajiPost(this.userData, 'Microcredit/').then((result) => {
     this.responseData = result;
     // alert(this.userData.username)
    //  localStorage.setItem('userData2', this.responseData);
    //  localStorage.setItem('user', this.userData.Username);
    //  this.UserCreate();
    //  this.UserInfo();
     this.router.navigate(['/Admindash/Wateja']); 
     this.reg.company_name = this.userData.company_name;
     this.reg.company_username = this.userData.company_username;
     this.register()
     this.UserCreate()
     this.ngProgress.done();
     }, (err) => {
       alert('error');

     });

     this.Created ={
       username: this.reg.Username,
       email:'lewicpro@yahoo.com',
       password:this.userData.Password,
       password2:this.userData.Password,


     }

    //  this.Infos ={
    //    username: this.userData.Username,


    //  }

 }

 UserCreate() {
   this.ngProgress.start();
  //  console.log('passed');
   this.rest_framework.wapangajiPost(this.Created, 'UserCreate/').then((result) => {
     this.responseData = result;
    //  console.log(this.responseData);

     // alert(this.userData.username)
    //  localStorage.setItem('userData2', this.responseData);
    //  localStorage.setItem('user', this.userData.Username);
     this.router.navigate(['/Admindash/Wateja']);
     this.ngProgress.done();
     }, (err) => {
       alert('error');

     });

 }

 

 register(){

    
        // this.ngProgress.start();
    //  console.log('passed');
    this.rest_framework.wapangajiPost(this.reg, 'Register/').then((resulta) => {
      this.responseData = resulta;
    //  console.log(this.responseData);
    //  console.log(this.userData.Username);
      // alert(this.userData.username)
    //  localStorage.setItem('userData2', this.responseData);
    //  localStorage.setItem('user', this.userData.Username);
      this.router.navigate(['/Sub/Ongeza-mkopo']);
      // this.ngProgress.done();
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
     this.router.navigate(['/Sub/Ongeza-mkopo']);
     // this.ngProgress.done();
     }, (err) => {
       alert('error');

     });

 }

}

