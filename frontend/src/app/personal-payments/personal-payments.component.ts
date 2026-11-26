import { Component, OnInit, TemplateRef, ChangeDetectionStrategy } from '@angular/core';
import { RestframeworkService } from '../apiservice/restframework.service';
import { Router } from '@angular/router';
import { PersonalNyumbaDetailsComponent } from '../personal-nyumba-details/personal-nyumba-details.component';

import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { NgProgress } from 'ngx-progressbar';
import { NyumbaIdentityComponent } from '../nyumba-identity/nyumba-identity.component';
import { NyumbaConnectorComponent } from '../nyumba-connector/nyumba-connector.component';

@Component({
    selector: 'app-personal-payments',
    templateUrl: './personal-payments.component.html',
    styleUrls: ['./personal-payments.component.css'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class PersonalPaymentsComponent implements OnInit {
  values;
  name;
  datara;
  v3;
  jum: number;
  wilaya_kikazi;
  mkoa;
  responseDat;
  Create;
  filtertext;
  aina_ya_chumba;
  shughuri;
  full_name;
  House_Owner;
  getMwezi;
  array =['moja', 'mbili'];
  kiasi;
  mopa  = '';
  d = new Date();
  // Simu;
  mwaka;
  monthes = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December', 'January', 'February', 'Mach', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  
  responseData;
  ldate;
  simu_dalali;
  restframework;
  malipo: number;
  jina_mdhamini;
  baki;
  nyumba_number;
  kulipia;
  date;
  eneo;
  ulipoajiriwa;
  last_date;
  nyumbaid;
  anwani;
  Created;
  muda;
  idara;
  status;
  miezi2;
  mwezi1;
  nyumbaname;
  year;
  kata;
  modalRef: BsModalRef;
  message: string;
  wilaya;
  miezi;
  miezi3;
  cheo;
  min;
  hour;
  sec;
  times;
  mdaa;
  mopai;
  mwzi;
  values2;
  moxt;
  

  simu;
  constructor(public ngProgress:NgProgress, private modalService: BsModalService, public router:Router, public rest_framework:RestframeworkService, public nyumba:PersonalNyumbaDetailsComponent, public nyumbadetls:NyumbaIdentityComponent, public nyumbadetails:NyumbaConnectorComponent) {
    
    this.getdata1();
    this.getdata();
    this.nyumba.getvalue()
    this.min = this.d.getMinutes();
    this.hour = this.d.getHours()
    this.sec = this.d.getSeconds()
    this.mwzi = this.d.getMonth()
    this.moxt = parseInt(this.mwzi) + 1
    this.times = this.d.getFullYear() + "-" + this.moxt + "-" + this.d.getDate() + "  " + this.hour + ":" + this.min + ":" + this.sec
    // this.mdaa = this.times
   }

   



  ngOnInit() {
  }
  calculate(){
    this.time();
    // this.ngProgress.ref().start();
  if(this.mopai){
    // console.log('remainder1: '+ this.times)
    this.mdaa = this.mopai;

  }else{
    this.mdaa = this.times;
    // console.log('remainder2: '+ this.times)
  }
    
    this.jum =this.baki * 1 - this.malipo * 1
    this.Created={
      name: this.name,
      full_name: this.full_name,
      simu:this.simu,
      nyumba_number:this.nyumba_number,
      shughuri:this.shughuri,
      ulipoajiriwa:this.ulipoajiriwa,
      idara:this.idara,
      anwani:this.anwani,
      aina_ya_chumba:this.aina_ya_chumba,
      wilaya_kikazi:this.wilaya_kikazi,
      
      muda:this.miezi,
      kulipia:this.kulipia,
      kiasi:this.malipo,
      status:'paying',
      mwezi1:this.mwezi1,
      miezi2:this.miezi2,
      miezi3:this.miezi3,
      kata:this.kata,
      eneo:this.eneo,
      wilaya:this.wilaya,
      last_date: this.ldate,
      // 'last_date':'',
      nyumbaid:this.nyumbaid,
      nyumbaname:this.nyumbaname,
      mkoa:this.mkoa,
      baki:this.jum,
      jina_mdhamini:this.jina_mdhamini,
      cheo:this.cheo,
      simu_dalali:this.simu_dalali,
      date:this.mdaa,
      'route': 'payments',
      'mwezi': this.getMwezi,
      'mwaka': this.mwaka,
      'info': 'delete',
      'House_Owner': this.House_Owner,
  
    }
    

    

  }
  clean(){
    
      this.name=null,
      this.simu =null,
      this.nyumba_number=null,
      this.shughuri= null,
      this.ulipoajiriwa=null,
      this.idara=null,
      this.anwani=null,
      this.aina_ya_chumba=null,
      this.wilaya_kikazi=null,
      this.muda=null,
      this.kulipia=null,
      this.kiasi=null,
      this.status='paying',
      this.mwezi1=null,
      this.malipo=null,
      this.miezi=null,
      this.kata=null,
      this.eneo=null,
      this.wilaya=null,
      // 'last_date'='',
      this.nyumbaid=null,
      this.mkoa=null,
      this.baki=null,
      
      this.cheo=null,
      this.simu_dalali=null
      this.jum =null
  
    }

    getdata1(){
      this.rest_framework.getWapangajiNyumbaList(localStorage.getItem('mpangajiid')).then(fdata=>{
        this.values=fdata;
      })

    }


  getdata(){
    this.time();
    this.rest_framework.getWapangajiLists().then(data=>{
      console.log('mpangajiid: '+ localStorage.getItem('mpangajiid'))
      this.values2 =data;
      for (const m of this.values) {
        this.datara = localStorage.getItem('mpangajiid');
        this.nyumbaname = localStorage.getItem('nyumbaname');
        if (String(m.pk) === String(this.datara)) {
          if(true){
            this.name = m.name;
            this.full_name = m.full_name;
            this.baki = m.baki;
            this.date = m.date;
            this.last_date = m.last_date;
            this.simu = m.simu;
            this.nyumba_number = m.nyumba_number;
            this.shughuri = m.shughuri;
            this.anwani = m.anwani;
            this.ulipoajiriwa  = m.ulipoajiriwa;
            this.idara  = m.idara;
            this.muda  = m.muda;
            this.nyumbaid  = m.nyumbaid;
            this.status  = m.status;
            this.cheo  = m.cheo;
            this.nyumbaname  = m.nyumbaname;
            this.mwezi1  = m.wilaya_kikazi;
            this.miezi2  = m.wilaya_kikazi;
            this.miezi3  = m.miezi3;
            this.year  = m.year;
            this.kata  = m.kata;
            this.wilaya  = m.wilaya;
            this.mkoa  = m.mkoa;
            this.aina_ya_chumba  = m.aina_ya_chumba;
            this.wilaya_kikazi  = m.wilaya_kikazi;
            this.kulipia  = m.kulipia;
            this.eneo  = m.eneo;
            this.simu_dalali  = m.simu_dalali;
            this.kiasi  = m.kiasi;
            this.jina_mdhamini  = m.jina_mdhamini;
            this.House_Owner  = m.House_Owner;
            // console.log(this.baki)

          }
          this.name = m.name;
          this.baki = m.baki;
          this.date = m.date;
          this.last_date = m.last_date;
          this.simu = m.simu;
          this.nyumba_number = m.nyumba_number;
          this.shughuri = m.shughuri;
          this.anwani = m.anwani;
          this.ulipoajiriwa  = m.ulipoajiriwa;
          this.idara  = m.idara;
          this.muda  = m.mwezi;
          this.nyumbaid  = m.nyumbaid;
          this.status  = m.status;
          this.cheo  = m.cheo;
          this.mwezi1  = m.wilaya_kikazi;
          this.miezi2  = m.wilaya_kikazi;
          this.miezi3  = m.miezi3;
          this.year  = m.year;
          this.kata  = m.kata;
          this.wilaya  = m.wilaya;
          this.mkoa  = m.mkoa;
          this.aina_ya_chumba  = m.aina_ya_chumba;
          this.wilaya_kikazi  = m.wilaya_kikazi;
          this.kulipia  = m.kulipia;
          this.eneo  = m.eneo;
          this.simu_dalali  = m.simu_dalali;
          this.kiasi  = m.kiasi;
          this.jina_mdhamini  = m.jina_mdhamini;
          // console.log(this.baki)
          

        }
      }
    })
  }

  // "node_modules/font-awesome/scss/font-awesome.scss",
  // "node_modules/angular-bootstrap-md/scss/bootstrap/bootstrap.scss",
  // "node_modules/angular-bootstrap-md/scss/mdb-free.scss",


  run(){
    this.ngProgress.ref().start();
    this.Create={
      name:this.name,
      mwezi:this.getMwezi,
      mwaka:this.mwaka,
      House_Owner:this.House_Owner,
      baki:this.baki,
      nyumbaid:this.nyumbaid,
      last_date:this.last_date,
      wilaya:this.wilaya,
      info :'deleted',
      simu:this.simu,
      nyumba_number:this.nyumbaid,
      date:this.mdaa
    
     
  
    }
    // console.log(this.mwaka)
    this.rest_framework.getLoginPosts(this.Create, 'wapangajiDeleted/').then((result) => {
      this.responseDat = result;
      // alert(this.userData.username)
      // localStorage.setItem('userData2', this.responseData);
     //  localStorage.setItem('user', this.userData.Username);
     //  this.UserCreate();
     //  this.UserInfo();
    //  this.clean();
      this.getdata();
      this.nyumba.getvalue();
      this.nyumbadetails.getval();
      
      
      }, (err) => {
        alert('error');
 
      });
      this.ngProgress.ref().complete();
  

  
  }

  time(){
    this.mwaka = this.d.getFullYear();
    for (let i = this.d.getMonth(); i <= this.monthes.length; i++) {
      this.mopa += this.monthes[i] + ',';
      this.array.push(this.monthes[i]);
      this.getMwezi=this.monthes[this.d.getMonth()]
      // console.log(this.mwaka)
    
  }}
  save(){
    this.ngProgress.ref().start()
    if (this.malipo > 0){
      
      this.rest_framework.wapangajiPost(this.Created, 'wapangaji/').then((result) => {
        this.responseData = result;
        // alert(this.userData.username)
        // localStorage.setItem('userData2', this.responseData);
       //  localStorage.setItem('user', this.userData.Username);
       //  this.UserCreate();
       //  this.UserInfo();
        this.clean();
        this.getdata();
        this.nyumba.getvalue();
        this.nyumbadetails.getval();

       
        }, (err) => {
          alert('error');
   
        });
        this.ngProgress.ref().complete();

    }
    else{
      // alert('below 2')
    }
    
  }




openModal(template: TemplateRef<any>) {
  this.modalRef = this.modalService.show(template, {class: 'modal-sm'});
}

confirm(): void {
  this.save();
  this.message = 'Confirmed!';
  this.modalRef.hide();
}

decline(): void {
  this.message = 'Declined!';
  this.modalRef.hide();
}

}
