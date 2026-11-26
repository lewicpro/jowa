import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { RestframeworkService } from '../apiservice/restframework.service';
import { Router } from '@angular/router';
import { NgProgress } from 'ngx-progressbar';

@Component({
    selector: 'app-edit-personal',
    templateUrl: './edit-personal.component.html',
    styleUrls: ['./edit-personal.component.css'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class EditPersonalComponent implements OnInit {
  value;
  mor;
  vers;
  datara;

  values;
  baki;
  diffDays;
  d = new Date();
  oneday;
  FirstDate;
  caution;
  SecDate;
  getTime;
  last;
  // d = new Date();
  Created={
    'full_name':'',
    'name':'',
    'simu':'',
    'nyumba_number':'',
    'shughuri':'',
    'ulipoajiriwa':'',
    'idara':'',
    'anwani':'',
    'aina_ya_chumba':'',
    'wilaya_kikazi':'',
    'muda':'',
    'kulipia':'',
    'kiasi':'',
    'status':'',
    'mwezi1':'',
    'miezi2':'',
    'miezi3':'',
    'kata':'',
    'eneo':'',
    'wilaya':'',
    // 'last_date':'',
    'nyumbaid':'',
    'mkoa':'',
    'baki':'',
    'jina_mdhamini':'',
    'cheo':'',
    'simu_dalali':'',
    'caution':undefined,
    'route':'pangisha',
    'mwaka':this.d.getFullYear(),


  }
  responseData;
  foods = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];

  constructor(public rest_framework: RestframeworkService, public router:Router, public ngProgress:NgProgress) {
    // console.log(localStorage.getItem('nyumbaid'))
   this.Created.nyumbaid = String(localStorage.getItem('nyumbaid'))
    
    this.rest_framework.getWapangajiLists().then(data=>{
      this.values =data;
      for (const m of this.values) {
        
        this.datara = localStorage.getItem('mpangajiid');
        // console.log("yeahhhhhh11" + this.datara)
        if (String(m.pk) === String(this.datara)) {
          this.Created.name = m.name;

          // console.log("yeahhhhhh")

        }
      }
    })

    this.rest_framework.getLists().then(result =>{

    });


  

   }

  ngOnInit() {
  }


  mimi(value){
  
    // console.log(value)
  }

  UserCreate() {
    this.ngProgress.ref().start();
    // console.log('passed');
    this.rest_framework.wapangajiPos1(this.Created, 'wapangaji/wholeid/'+ this.datara +'/').then((result) => {
      this.responseData = result;
     
      // console.log(this.responseData);
      // console.log(this.Created);
      // alert(this.userData.username)
  
      localStorage.setItem('userData2', this.responseData);
      // this.router.navigate(['/Admindash/Ongeza-mkopo']);
      this.ngProgress.ref().complete();
      }, (err) => {
        alert('error');
 
      });
 
  }



  ajir(){
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
  }


  calc(){
    if(this.Created.mwezi1){
      this.baki = parseInt(this.Created.mwezi1) - parseInt(this.Created.kiasi) 

      this.Created.baki = String(this.baki)
      this.Created.muda = 'mwezi mmoja'
  
      // console.log(this.baki);

    }
    else if(this.Created.miezi2) {
      this.baki = parseInt(this.Created.miezi2) - parseInt(this.Created.kiasi) 

      this.Created.baki = String(this.baki)
      this.Created.muda = 'miezi miwili'
  
      // console.log(this.baki);

    }
    else if(this.Created.miezi3){
      this.baki = parseInt(this.Created.miezi3) - parseInt(this.Created.kiasi) 

      this.Created.baki = String(this.baki)
      this.Created.muda = 'miezi mitatu'
  
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

