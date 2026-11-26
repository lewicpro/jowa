import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { RestframeworkService } from '../apiservice/restframework.service';
import { NgProgress } from 'ngx-progressbar';

@Component({
    selector: 'app-wakala-ongeza-mmiliki',
    templateUrl: './wakala-ongeza-mmiliki.component.html',
    styleUrls: ['./wakala-ongeza-mmiliki.component.css'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class WakalaOngezaMmilikiComponent implements OnInit {
  userData = {'user': '',
  'jina': '', 'tarehe': '',
    'Total_pay': '',
    'recept_no': '',
      'Balance': '',
      'wilaya': '',
        'mkoa': '',
          'kipindi': '',
            'service_officer': '',
              'kata': '',
                'Registration_no': '',
                  'Simu': '',
                    'Account_no': '',
                    'mmiliki': '',
                      'company': '',
                        'Jinsia': '',
                        'age': '',
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

  constructor(public router: Router, public rest_framework: RestframeworkService, public ngProgress:NgProgress) {
    
   }

  ngOnInit() {
  }


  validate(){
    



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
    this.rest_framework.getLoginPosts(this.userData, 'WakalaMmiliki/').then((result) => {
      this.responseData = result;
      // alert(this.userData.username)
      // localStorage.setItem('userData2', this.responseData);
      // localStorage.setItem('user', this.userData.Username);
      // this.UserInfo();
      this.router.navigate(['/wakala/ongeza-wakala']);
      this.UserCreate();
      
      }, (err) => {
        alert('error');

      });

      this.Created ={
        username: this.userData.user,
        email:'lewicpro@yahoo.com',
        password:this.userData.Registration_no,
        password2:this.userData.Registration_no,


      }

      this.Infos ={
        // user: this.userData.Username,


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
      this.router.navigate(['/wakala/ongeza-wakala']);
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
      this.router.navigate(['/Admindash/Ongeza-mkopo']);
      // this.ngProgress.ref().complete();
      }, (err) => {
        alert('error');

      });

  }

}
