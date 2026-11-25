import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestframeworkService } from '../apiservice/restframework.service';
import { NgProgress } from 'ngx-progressbar';

@Component({
  selector: 'app-wakala-mmiliki-director-ongeza-wakala',
  templateUrl: './wakala-mmiliki-director-ongeza-wakala.component.html',
  styleUrls: ['./wakala-mmiliki-director-ongeza-wakala.component.css']
})
export class WakalaMmilikiDirectorOngezaWakalaComponent implements OnInit {
  userData = {'user': '',
  'jina': '', 'tarehe': '',
   'Total_pay': '',
    'recept_no': '',
      'Balance': '',
        'kata': '',
          'wilaya': '',
            'mkoa': '',
              'kipindi': '',
                'Registration_no': '',
                  'Birth': '',
                    'service_officer': '',
                      'Simu': '',
                        'Account_no': '',
                          'Branch_manager': '',
                            'mwaka': '',
                              'mmiliki': '',
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
 Director;

 constructor(public router: Router, public rest_framework: RestframeworkService, public ngProgress:NgProgress) {
   this.userData.mmiliki = localStorage.getItem('Director')
   this.Director = localStorage.getItem('Director')
  this.rest_framework.getMmilikiList().then(data=>{
    this.all = data;
  });
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
   this.ngProgress.start();
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
     this.ngProgress.done();

 }

 UserCreate() {
   // this.ngProgress.start();
   // console.log('passed');
   this.rest_framework.getLoginPosts(this.Created, 'UserCreate/').then((result) => {
     this.responseData = result;
     // console.log(this.responseData);
     // console.log(this.userData.Username);
     // alert(this.userData.username)
     // localStorage.setItem('userData2', this.responseData);
     // localStorage.setItem('user', this.userData.Username);
     this.router.navigate(['/Admindash/Ongeza-mkopo']);
     // this.ngProgress.done();
     }, (err) => {
       alert('error');

     });

 }
 UserInfo() {
   // this.ngProgress.start();
   //.log('passed');
   this.rest_framework.getLoginPosts(this.Infos, 'Info/').then((result) => {
     this.responseData = result;
     // console.log(this.responseData);
     // console.log(this.userData.Username);
     // alert(this.userData.username)
     // localStorage.setItem('userData2', this.responseData);
     // localStorage.setItem('user', this.userData.Username);
     this.router.navigate(['/Admindash/Ongeza-mkopo']);
     // this.ngProgress.done  ();
     }, (err) => {
       alert('error');

     });

 }

}
