import { Component, OnInit } from '@angular/core';
import { RestframeworkService } from '../apiservice/restframework.service';
import { Router } from '@angular/router';
import { UniqueSelectionDispatcher } from '@angular/cdk/collections';
import { PersonalNyumbaDetailsComponent } from '../personal-nyumba-details/personal-nyumba-details.component';
import { NgProgress } from 'ngx-progressbar';
import { NyumbaConnectorComponent } from '../nyumba-connector/nyumba-connector.component';

@Component({
  selector: 'app-pangisha',
  templateUrl: './pangisha.component.html',
  styleUrls: ['./pangisha.component.css']
})
export class PangishaComponent implements OnInit {
  value;
  mor;
  vers;
  datara;
  filtertext;

  values;
  mopa  = '';
  d = new Date();
  // Simu;
  mwaka;
  baki;
  getMwezi;
  array =['moja', 'mbili'];
  diffDays;
  // d = new Date();
  oneday;
  FirstDate;
  caution;
  monthes = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December', 'January', 'February', 'Mach', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  SecDate;
  getTime;
  last;
  // d = new Date();
  Created={
    'name':'',
    'full_name':'',
    'simu':'',
    'nyumba_number':'',
    'shughuri':'',
    'ulipoajiriwa':'',
    'idara':'',
    'anwani':'',
    'aina_ya_chumba':'',
    'file_no':'',
    'wilaya_kikazi':'',
    'muda':'',
    'mwezi':this.getMwezi,
    'kulipia':'',
    'kiasi':'',
    'service_officer':'',
    'status':'',
    'mwezi1':'',
    'miezi2':'',
    'miezi3':'',
    'year':'',
    'kata':'',
    'eneo':'',
    'wilaya':'',
    // 'last_date':'',
    'nyumbaid':'',
    'mkoa':'',
    'baki':'',
    'jina_mdhamini':'',
    'nyumbaname':'',
    'cheo':'',
    'simu_dalali':'',
    'House_Owner':'',
    'caution':'',
    'Password':'',
    'route':'pangisha',
    'mwaka':this.d.getFullYear(),
    'date':''


  }
  responseData;
  Createm;
  text;
  possible='1234567890'
  valuD;
  foods = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];
  hour;
  times;
  sec;
  min;
  mou;
  mwzi;
  moxt;


  constructor(public ngProgress:NgProgress, public rest_framework: RestframeworkService, public nyumba:PersonalNyumbaDetailsComponent, public nyumbaall:NyumbaConnectorComponent, public router:Router) {
    

    this.min = this.d.getMinutes();
    this.hour = this.d.getHours()
    this.sec = this.d.getSeconds()
    this.mwzi = this.d.getMonth()
    this.moxt = parseInt(this.mwzi) + 1
    this.mou = this.d.getFullYear()+"-"+this.moxt+"-"+this.d.getDate()+" "+this.hour+":"+this.min+":"+"56.752978"+"+00"+":"+"00"
    this.times = this.mou
    this.Created.date = this.times;

    // console.log('this time:', this.times)
    this.Created.Password = String(Math.floor((Math.random() * 1000) + 999));
    // console.log('password given : '+ this.Created.Password)
    this.Created.nyumbaid = String(localStorage.getItem('nyumbaid'))
    this.Created.nyumbaname = String(localStorage.getItem('nyumbaname'))
    this.Created.House_Owner = String(localStorage.getItem('houseOwner'))
    this.Created.service_officer = String(localStorage.getItem('lservice_officer'))
    this.rest_framework.getWapangajiLists().then(data=>{
      this.values =data;
      for (const m of this.values) {
        this.datara = localStorage.getItem('nyumbaid');
        if (String(m.nyumbaid) === String(this.datara)) {
          this.Created.House_Owner = m.House_Owner;
   

        }
      }
    })

  

    this.rest_framework.getLists().then(result =>{

    });


  

   }

  ngOnInit() {
  }


  time(){
    this.mwaka = this.d.getFullYear();
    for (let i = this.d.getMonth(); i <= this.monthes.length; i++) {
      this.mopa += this.monthes[i] + ',';
      this.array.push(this.monthes[i]);
      this.Created.mwezi=this.monthes[this.d.getMonth()]
      // console.log(this.mwaka)
  }}


  mimi(value){
  
    // console.log(value)
  }

  UserCreate() {
    this.ngProgress.start();
    // console.log('passed');
    this.rest_framework.wapangajiPost(this.Created, 'wapangaji/').then((result) => {
      this.responseData = result;
      this.nyumba.getvalue();
      this.nyumbaall.getval();
      this.UserCreates();
      // console.log(this.responseData);
      // console.log(this.Created);
      // alert(this.userData.username)
  
      // localStorage.setItem('userData2', this.responseData);
      // this.router.navigate(['/Admindash/Ongeza-mkopo']);
      this.ngProgress.done();
      }, (err) => {
        alert('ended on creating wapangaji');
 
      });

      this.Createm ={
        username: this.Created.name,
        email:'lewicpro@yahoo.com',
        password:this.Created.Password,
        password2:this.Created.Password,


      }
      this.router.navigate(['/Nyumba-dash/Details/wapangaji']);

 
  }
  
  UserCreates() {
    // this.ngProgress.start();
    // console.log('passed');
    this.rest_framework.getLoginPosts(this.Createm, 'UserCreate/').then((result) => {
      this.responseData = result;
      // console.log(this.responseData);
      // console.log(this.userData.Username);
      // alert(this.userData.username)
      // localStorage.setItem('userData2', this.responseData);
      // localStorage.setItem('user', this.userData.Username);
      
      // this.ngProgress.done();
      }, (err) => {
        alert('ended on creating user');

      });

  }



  ajir(){
    this.time();
    if (this.mor === 'ajira'){
      this.Created.shughuri = 'ajira' 

    }
    else if( this.mor === 'biashara'){
      this.Created.shughuri = 'biashara'

    }
    else if( this.mor === 'mkulima'){
      this.Created.shughuri= 'mkulima'

    }

  }

  Mir(){
    this.Created.status = 'clean';
    this.time();
  }


  calc(){
    this.time();
    if(this.Created.mwezi1){
      this.baki = parseInt(this.Created.mwezi1) - parseInt(this.Created.kiasi) 

      this.Created.baki = String(this.baki)
      this.Created.muda = 'mwezi mmoja'
      // this.Created.miezi = 'mwezi mmoja'
  
      // console.log(this.baki);

    }
    else if(this.Created.miezi2) {
      this.baki = parseInt(this.Created.miezi2) - parseInt(this.Created.kiasi) 

      this.Created.baki = String(this.baki)
      this.Created.muda = 'miezi miwili'
      // this.Created.miezi = 'miezi miwili'
  
      // conso/le.log(this.baki);

    }
    else if(this.Created.miezi3){
      this.baki = parseInt(this.Created.miezi3) - parseInt(this.Created.kiasi) 

      this.Created.baki = String(this.baki)
      this.Created.muda = 'miezi mitatu'
      // this.Created.miezi = 'miezi mitatu'
  
      // console.log(this.baki);

    }
   
  }



  fuo(){
    this.oneday = 24*60*60*1000;

    this.SecDate = new Date(this.d.getFullYear(),this.d.getMonth(),this.d.getDate());
    this.FirstDate = new Date(2008,1,22);

    this.diffDays = Math.round(Math.abs(this.FirstDate.getTime() - this.SecDate.getTime())/(this.oneday));
    // console.log(this.diffDays)
  }
 

 

}
