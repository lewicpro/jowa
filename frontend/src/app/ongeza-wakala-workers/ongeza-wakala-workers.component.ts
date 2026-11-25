import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestframeworkService } from '../apiservice/restframework.service';
import { NgProgress } from 'ngx-progressbar';

@Component({
  selector: 'app-ongeza-wakala-workers',
  templateUrl: './ongeza-wakala-workers.component.html',
  styleUrls: ['./ongeza-wakala-workers.component.css']
})
export class OngezaWakalaWorkersComponent implements OnInit {
  userData = {'user': '',
  'jina': '', 'tarehe': '',
    'Total_pay': '',
      'recept_no': '',
        'Balance': '',
          'wilaya': '',
            'mkoa': '',
              'kata': '',
                'kipindi': '',
                  'service_officer': '',
                    'Registration_no': '',
                      'Branch_manager': '',
                        'Simu': '',
                          'Account_no': '',
                            'ofisi': '',
                              'mmiliki': '',
                                'company': '',
                                  'Jinsia': '',
                                    // 'tarehe': '',
                                      'born': '',
                                        'Email': '',
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
  min;
  hour;
  sec;
  times;
  mwzi;
  moxt
  d = new Date();

  constructor(public router: Router, public rest_framework: RestframeworkService, public ngProgress:NgProgress) {
    // this.userData.Registered = 
    this.mwzi = this.d.getMonth()
    this.moxt = parseInt(this.mwzi) + 1
    this.min = this.d.getMinutes();
    this.hour = this.d.getHours()
    this.sec = this.d.getSeconds()
    this.userData.tarehe= this.d.getDate() + "/" + this.moxt + "/" +this.d.getFullYear() + "  ||  " + this.hour + ":" + this.min + ":" + this.sec
    // this.mdaa = this.times
  
    this.rest_framework.getWakalaLists().then(data=>{

      this.all = data;
    });
   }

  ngOnInit() {
  }


  validate(){
    



  }

  // account(){
  //   this.rest_framework.getLists().then(data=>{

  //     this.all = data;
  //     // console.log('come first')
  //     for(const m of this.all){
  //       // console.log('comes sec')
        

  //       if(m.Account_no === this.userData.Account_no){
          
  //         this.accountee= m.Account_no
  //         //.log(this.giveoout)

        
  //       }
         

  //     }

  //   })

  // }


  Register() {
    this.ngProgress.start();
    // console.log('passed');
    this.rest_framework.getLoginPosts(this.userData, 'worker/').then((result) => {
      this.responseData = result;
      // alert(this.userData.username)
      // localStorage.setItem('userData2', this.responseData);
      // localStorage.setItem('user', this.userData.Username);
      this.UserCreate();
      // this.UserInfo();
      this.router.navigate(['/wakala/list-of-workers']);
      
      }, (err) => {
        alert('error');

      });

      this.Created ={
        username: this.userData.user,
        email:this.userData.Email,
        password:this.userData.Registration_no,
        password2:this.userData.Registration_no,


      }

      this.Infos ={
        // user: this.userData.Username,


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
