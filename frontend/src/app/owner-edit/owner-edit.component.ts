import { Component, OnInit } from '@angular/core';
import { RestframeworkService } from '../apiservice/restframework.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-owner-edit',
  templateUrl: './owner-edit.component.html',
  styleUrls: ['./owner-edit.component.css']
})
export class OwnerEditComponent implements OnInit {
  userData = {'Username': '',
  'jina': '', 'TSD': '',
   'Account_no': '',
    'ofisi': '',
     'kata': '',
      'wilaya': '',
       'mkoa': '',
      //  'ofisi': '',
        'Check': '',
         'Simu': '',
          'age': '',
           'csv': '',
            'expire': '',
             'file_no': '',
             'privs': 'HouseOwner',
             'Jinsia': ''
           };
 responseData;
 Created;

 mopa='false';
 giveoout;
 accountee;
 mmilikino;
 all;
 Infos;

 constructor(public router: Router, public rest_framework: RestframeworkService) {
   this.mmilikino = localStorage.getItem('mmilikiid')
   

   this.rest_framework.getLists().then(data=>{

     this.all = data;
     for(const m of this.all){

       if(String(m.pk) === String(this.mmilikino)){
         this.userData.jina = m.jina
         this.userData.Account_no = m.Account_no
         this.userData.kata = m.kata
         this.userData.mkoa = m.mkoa
         this.userData.Simu = m.Simu
         this.userData.age = m.age
         this.userData.csv = m.jina
         this.userData.file_no = m.file_no
         this.userData.TSD = m.TSD
         this.userData.Username = m.Username
         this.userData.wilaya = m.wilaya
         this.userData.expire = m.expire
        //  this.userData.Jinsia = m.Jinsia
         this.userData.ofisi = m.ofisi

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
        //  console.log(this.giveoout)

       
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
        //  console.log(this.giveoout)

       
       }
        

     }

   })

 }


 Register() {
   // this.ngProgress.start();
   // console.log('passed');
   this.rest_framework.PostMmilikiid(this.userData, 'MmilikiUpdate/'+ this.mmilikino + '/').then((result) => {
     this.responseData = result;
     // alert(this.userData.username)
     localStorage.setItem('userData2', this.responseData);
     localStorage.setItem('user', this.userData.Username);
    //  this.UserCreate();
    //  this.UserInfo();
    //  this.router.navigate(['/Nyumba-dash/Nyumba']);
     // this.ngProgress.done();
     }, (err) => {
       alert('error');

     });

     this.Created ={
       username: this.userData.Username,
       email:'lewicpro@yahoo.com',
       password:'lewicpro',
       password2:'lewicpro',


     }

     this.Infos ={
       user: this.userData.Username,


     }

 }

 UserCreate() {
   // this.ngProgress.start();
   // console.log('passed');
   this.rest_framework.getLoginPosts(this.Created, 'UserCreate/').then((result) => {
     this.responseData = result;
     // console.log(this.responseData);
     // console.log(this.userData.Username);
     // alert(this.userData.username)
     localStorage.setItem('userData2', this.responseData);
     localStorage.setItem('user', this.userData.Username);
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
     localStorage.setItem('userData2', this.responseData);
     localStorage.setItem('user', this.userData.Username);
     this.router.navigate(['/Admindash/Ongeza-mkopo']);
     // this.ngProgress.done();
     }, (err) => {
       alert('error');

     });

 }

}
