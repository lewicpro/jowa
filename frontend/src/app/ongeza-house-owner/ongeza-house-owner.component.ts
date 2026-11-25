import { Component, OnInit } from '@angular/core';
import { RestframeworkService } from '../apiservice/restframework.service';
import { Router } from '@angular/router';
import { NgProgress } from 'ngx-progressbar';

@Component({
  selector: 'app-ongeza-house-owner',
  templateUrl: './ongeza-house-owner.component.html',
  styleUrls: ['./ongeza-house-owner.component.css']
})
export class OngezaHouseOwnerComponent implements OnInit {
  userData = {'Username': '',
   'jina': '', 'TSD': '',
    'Account_no': '',
     'ofisi': '',
      'kata': '',
       'wilaya': '',
        'mkoa': '',
         'Check': '',
          'Simu': '',
           'age': '',
            'csv': '',
             'expire': '',
              'file_no': '',
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
  all;
  Infos;

  constructor(public router: Router, public rest_framework: RestframeworkService, public ngProgress:NgProgress) {
    for(let i = 0; i < 10; i++){
      this.text += this.possible.charAt(Math.floor(Math.random() * this.possible.length))

    }
    this.userData.Password = this.text;
    //.log(this.text)

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
    this.ngProgress.start();
    // console.log('passed');
    this.rest_framework.getLoginPosts(this.userData, 'Register/').then((result) => {
      this.responseData = result;
      // alert(this.userData.username)
      // localStorage.setItem('userData2', this.responseData);
      // localStorage.setItem('user', this.userData.Username);
      this.UserCreate();
      this.UserInfo();
      this.router.navigate(['/Nyumba-dash/Nyumba']);
      
      }, (err) => {
        alert('error');

      });

      this.Created ={
        username: this.userData.Username,
        email:'lewicpro@yahoo.com',
        password:this.userData.Password,
        password2:this.userData.Password,


      }

      this.Infos ={
        user: this.userData.Username,


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
      // this.ngProgress.done();
      }, (err) => {
        alert('error');

      });

  }

}
