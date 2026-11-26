import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { RestframeworkService } from '../apiservice/restframework.service';
import { NgProgress } from 'ngx-progressbar';

@Component({
    selector: 'app-ongeza-mmiliki-duka',
    templateUrl: './ongeza-mmiliki-duka.component.html',
    styleUrls: ['./ongeza-mmiliki-duka.component.css'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class OngezaMmilikiDukaComponent implements OnInit {
  userData = {'user': '',
   'jina': '',
    'tarehe': '',
     'ofisi': '',
      'kata': '',
       'wilaya': '',
       'Registration_no': '',
        'mkoa': '',
         'Tin_No': '',
          'Simu': '',
           'age': '',
           'Email': '',
           'stastatustus': 'Director',
            'Account_no': '',
             'name_of_the_bank': '',
               'file_no': '',
                'privs': 'HouseOwner',
                'company': '',
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


        if(m.user === this.userData.user){

          this.giveoout= m.user
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
    this.ngProgress.ref().start();
    // console.log('passed');
    this.rest_framework.getLoginPosts(this.userData, 'RegisterWamiliki/').then((result) => {
      this.responseData = result;
      // alert(this.userData.username)
      // localStorage.setItem('userData2', this.responseData);
      // localStorage.setItem('user', this.userData.Username);
      this.UserCreate();
      // this.UserInfo();
      this.router.navigate(['/duka/Wamiliki']);

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
    // this.ngProgress.ref().start();
    // console.log('passed');
    this.rest_framework.getLoginPosts(this.Created, 'UserCreate/').then((result) => {
      this.responseData = result;
      // console.log(this.responseData);
      // console.log(this.userData.Username);
      // alert(this.userData.username)
      // localStorage.setItem('userData2', this.responseData);
      // localStorage.setItem('user', this.userData.Username);
      this.router.navigate(['/duka/Wamiliki']);
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
      this.router.navigate(['/duka/Wamiliki']);
      // this.ngProgress.ref().complete();
      }, (err) => {
        alert('error');

      });

  }

}
