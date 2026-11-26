import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { RestframeworkService } from '../apiservice/restframework.service';
import { NgProgress } from 'ngx-progressbar';

@Component({
    selector: 'app-orders-ongeza-customers',
    templateUrl: './orders-ongeza-customers.component.html',
    styleUrls: ['./orders-ongeza-customers.component.css'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class OrdersOngezaCustomersComponent implements OnInit {
  userData = {
    'date': '',
      'user': '',
        'jina_kamili': '',
            'Phone': '',
              'service_officer': '',
                'kata': '',
                  'wilaya': '',
                    'mkoa': '',
                      'Manager': '',
                        'Simu': '',
                          'Account_No': '',
                            'Bank_name': '',
                              'Birthdate': '',
                              'ofisi': '',
                                'email': '',
                                  'Director': '',
                                    'balance': '',
                                      'Jinsia': '',
                                        'Password': '',
                                          'service_officer_phone': ''
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

 constructor(public router: Router, public rest_framework: RestframeworkService, public ngProgress:NgProgress) {
   for(let i = 0; i < 10; i++){
     this.text += this.possible.charAt(Math.floor(Math.random() * this.possible.length))

   }
   this.userData.Password = this.text;
   //.log(this.text)

   this.rest_framework.getManagerLists().then(data=>{

     this.all = data;
     for(const m of this.all){

       if(m.Username === this.userData.user){

       }

     }

   })

   this.userData.service_officer=localStorage.getItem('Orderworker')
  }

 ngOnInit() {
 }


 validate(){
   this.rest_framework.getManagerLists().then(data=>{

     this.all = data;
     // console.log('come first')
     for(const m of this.all){
       // console.log('comes sec')
       

       if(m.Username === this.userData.user){
         
         this.giveoout= m.Username
         //.log(this.giveoout)

       
       }
        

     }

   })

 }

 account(){
   

 }


 Register() {
   this.ngProgress.ref().start();
   // console.log('passed');
   this.rest_framework.getLoginPosts(this.userData, 'Customer/' + localStorage.getItem('Orderworker') +'/').then((result) => {
     this.responseData = result;
     // alert(this.userData.username)
     // localStorage.setItem('userData2', this.responseData);
     // localStorage.setItem('user', this.userData.Username);
     this.UserCreate();
     this.UserInfo();
     this.router.navigate(['/Orders/Worker-dashboard/Customers']);
     
     }, (err) => {
       alert('error');

     });

     this.Created ={
       username: this.userData.user,
       email:this.userData.email,
       password:this.userData.Password,
       password2:this.userData.Password,


     }

     this.Infos ={
       user: this.userData.user,


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
     this.router.navigate(['/Orders/Worker-dashboard/Customers']);
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
     this.router.navigate(['/Orders/Worker-dashboard/Customers']);
     // this.ngProgress.ref().complete();
     }, (err) => {
       alert('error');

     });

 }

}
