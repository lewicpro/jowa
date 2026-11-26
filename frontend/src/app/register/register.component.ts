import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '../../../node_modules/@angular/router';
import { RestframeworkService } from '../apiservice/restframework.service';
import { NgProgress } from 'ngx-progressbar';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class RegisterComponent implements OnInit {
  responseData;
  all;
  giveoout;
  accountee;
  userData = {'Username': '',
  'jina': '', 'TSD': '',
   'Account_no': '',
    'ofisi': '',
     'kata': '',
      'wilaya': '',
       'mkoa': '',
        'Check': '',
         'Simu': '',
          'pin': '',
           'csv': '',
            'expire': '',
             'file_no': '',
             'Jinsia': ''
           };

           

  constructor(public router: Router, public rest_framework:RestframeworkService, public ngProgress:NgProgress) {
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

  account(){
    
  }



  validate(){
    this.rest_framework.getLists().then(data=>{

      this.all = data;
      // console.log('come first')
      for(const m of this.all){
        // console.log('comes sec')
        

        if(m.Username === this.userData.Username){
          
          this.giveoout= m.Username
          // console.log(this.giveoout)

        
        }
         

      }

    })

  }


  Register() {
     this.ngProgress.ref().start();
    this.rest_framework.getLoginPosts(this.userData, 'Register/').then((result) => {
      this.responseData = result;
      // alert(this.userData.username)
      // localStorage.setItem('userData2', this.responseData);
      // localStorage.setItem('user', this.userData.Username);
      // this.UserCreate();
      // this.UserInfo();
      this.router.navigate(['/Admindash/Wateja']);
      // this.ngProgress.ref().complete();
      }, (err) => {
        alert('error');

      });
       this.ngProgress.ref().complete();
  }

}
