import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestframeworkService } from '../apiservice/restframework.service';
import { NgProgress } from 'ngx-progressbar';

@Component({
  selector: 'app-wakala-mmiliki-director-ongeza-workers',
  templateUrl: './wakala-mmiliki-director-ongeza-workers.component.html',
  styleUrls: ['./wakala-mmiliki-director-ongeza-workers.component.css']
})
export class WakalaMmilikiDirectorOngezaWorkersComponent implements OnInit {
  userData = {'user': '',
  'jina': '', 'tarehe': '',
    'Total_pay': '',
      'recept_no': '',
        'Balance': '',
          'kata': '',
            'wilaya': '',
              'mkoa': '',
                'kipindi': '',
                  'service_officer': '',
                    'Registration_no': '',
                      'Branch_manager': '',
                        'Simu': '',
                          'Account_no': '',
                            'Mmiliki_wakala': '',
                              'company': '',
                                'Jinsia': '',
                                  'born': '',
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
    this.userData.Mmiliki_wakala=localStorage.getItem('Director')
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
      // this.UserCreate();
      // this.UserInfo();
      this.router.navigate(['/wakala/list-of-workers']);
      
      }, (err) => {
        alert('error');

      });

      // this.Created ={
      //   username: this.userData.Username,
      //   email:'lewicpro@yahoo.com',
      //   password:this.userData.Password,
      //   password2:this.userData.Password,


      // }

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
