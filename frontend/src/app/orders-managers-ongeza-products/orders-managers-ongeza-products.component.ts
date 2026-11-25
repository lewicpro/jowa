import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestframeworkService } from '../apiservice/restframework.service';
import { NgProgress } from 'ngx-progressbar';

@Component({
  selector: 'app-orders-managers-ongeza-products',
  templateUrl: './orders-managers-ongeza-products.component.html',
  styleUrls: ['./orders-managers-ongeza-products.component.css']
})
export class OrdersManagersOngezaProductsComponent implements OnInit {
  userData = {
    'Tarehe': '',
      'Name_of_the_product': '',
        'user': '',
          'Selling_price': '',
            'Number_of_products': '',
              'Officer_worker': '',
                'kata': '',
                  'Manager_name': '',
                    'wilaya': '',
                      'mkoa': '',
                        'ofisi': '',
                          'Simu': '',
                            'Profit':'',
                              'Package':'',
                                'Number_in_Package':'',
                                  'order_type': '',
                                    'barcode': '',
                                      'Price_bought': '',
                                        'Directors_name': '',
                                          'balance': '',
                                            'Last_Stock_Date': '',
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
  stored;
  moxt;
  infos;
  mwzi;
  hour;
  next1;
  times
  d = new Date();
  sec;
  min;

 constructor(public router: Router, public rest_framework: RestframeworkService, public ngProgress:NgProgress) {
   for(let i = 0; i < 10; i++){
     this.text += this.possible.charAt(Math.floor(Math.random() * this.possible.length))

   }
   this.userData.Password = this.text;
   //.log(this.text)

   this.rest_framework.getManagerLists().then(data=>{

     this.all = data;
     for(const m of this.all){

       if(m.Username === this.userData.Officer_worker){

       }

     }

   })

   this.userData.Manager_name=localStorage.getItem('user')
  }

 ngOnInit() {
 }


 validate(){
  //  this.rest_framework.getManagerLists().then(data=>{

  //    this.all = data;
  //    // console.log('come first')
  //    for(const m of this.all){
  //      // console.log('comes sec')
       

  //      if(m.Username === this.userData.user){
         
  //        this.giveoout= m.Username
  //        //.log(this.giveoout)

       
  //      }
        

  //    }

  //  })

 }

 account(){
   

 }


 Register() {
    this.ngProgress.start();
    this.min = this.d.getMinutes();
    this.hour = this.d.getHours()
    this.sec = this.d.getSeconds()
    this.mwzi = this.d.getMonth()
    this.moxt = parseInt(this.mwzi) + 1;
    this.userData.Profit = String(parseFloat(this.userData.Selling_price)*1 - parseFloat(this.userData.Price_bought)*1)
    this.userData.Tarehe = this.d.getFullYear() + "-" + this.moxt + "-" + this.d.getDate() + "  " + this.hour + ":" + this.min + ":" + this.sec
    // console.log('passed');
    this.rest_framework.getLoginPosts(this.userData, 'Bidhaa-Post/'+ localStorage.getItem('manager') + '/').then((result) => {
      this.responseData = result;
      // alert(this.userData.username)
      // localStorage.setItem('userData2', this.responseData);
      // localStorage.setItem('user', this.userData.Username);
      //  this.UserCreate();
      //  this.UserInfo();
      this.router.navigate(['/Orders/bidhaa-zote']);
      
      }, (err) => {
        alert('error');

      });

      //  this.Created ={
      //    username: this.userData.user,
      //    email:this.userData.email,
      //    password:this.userData.Password,
      //    password2:this.userData.Password,


      //  }

      //  this.Infos ={
      //    user: this.userData.user,


      //  }
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
     // this.ngProgress.done();
     }, (err) => {
       alert('error');

     });

 }

}
