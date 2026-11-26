import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { RestframeworkService } from '../apiservice/restframework.service';
import { NgProgress } from 'ngx-progressbar';


@Component({
    selector: 'app-marekebisho',
    templateUrl: './marekebisho.component.html',
    styleUrls: ['./marekebisho.component.css'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class MarekebishoComponent implements OnInit {
  values;
  name;
  datara;
  jum: number;
  filtertext;
  wilaya_kikazi;
  mkoa;
  aina_ya_chumba;
  Created ;
  shughuri;
  info;
  pk;
  kiasi;
  responseData;
  simu_dalali;
  malipo: number;
  jina_mdhamini;
  baki;
  nyumba_number;
  kulipia;
  responseDat;
  Create;
  date;
  eneo;
  ulipoajiriwa;
  last_date;
  nyumbaid;
  anwani;
  nem;
  sm;
  mfanyakaz;
  mk;
  kias;
  eneokaz;
  Eneo_la_kazi;
  mkaguzi_wa_kazi;
  // Created;
  wapangaji_max;
  kiasi_kilichotumika;
  mfanyaji_kazi;
  nyumba;
  muda;
  wapangaji_current;
  idara;
  status;
  miezi2;
  mwezi1;
  year;
  kata;
  wilaya;
  miezi3;
  mboma;
  cheo;
  simu;
  constructor(public router:Router, public rest_framework:RestframeworkService, public ngProgress:NgProgress) {
    this.rest_framework.getNyumbaLists().then(datab=>{
      this.mboma = datab;
      
      for(const m of this.mboma){
        //.log(m.nyumba)
        this.datara = localStorage.getItem('nyumbaid');
        //.log('1' + this.datara)
        if (String(m.pk) === String(this.datara)) {
         
          
          if(true){
            //.log('mkaguzi' + m.mkaguzi_wa_kazi)
            this.nyumba = m.name;
            //  console.log(m.name)
            this.simu = m.simu;
            this.nyumba_number = m.nyumba_number;
            this.wapangaji_current = m.wapangaji_current;
            this.mkaguzi_wa_kazi = m.mkaguzi_wa_kazi;
            this.wapangaji_max = m.wapangaji_max;
            this.Eneo_la_kazi = m.Eneo_la_kazi;
            this.kata  = m.kata;
            this.wilaya  = m.wilaya;
            this.mkoa  = m.mkoa;
           
            this.mfanyaji_kazi  = m.mfanyaji_kazi
            this.kiasi_kilichotumika  = m.kiasi_kilichotumika;
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
            this.muda  = m.muda;
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
      


      }
      
    })
    this.getdata();

  }

  ngOnInit() {
  }
    

    

  
  clean(){
    
      this.name=null,
      this.nem =null,
      this.kias=null,
      this.mfanyakaz= null,
      this.eneokaz=null,
      this.sm=null,
      this.mk=null,
      this.Created.mkaguzi_wa_kazi=null,
      this.Created.Eneo_la_kazi=null,
      this.Created.eneo=null,
      this.Created.kiasi_kilichotumika=null,
      this.Created.nyumba=null,
      this.aina_ya_chumba=null,
      this.wilaya_kikazi=null,
      this.muda=null,
      this.kulipia=null,
      this.kiasi=null,
      this.status='paying',
      this.mwezi1=null,
      this.miezi2=null,
      this.miezi3=null,
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


  getdata(){
    this.rest_framework.getNyumbaMarekebishoLists().then(data=>{
      this.values =data;
    })
  }

  run(){
    this.Create={
      nyumba:this.nyumba,
      kata:this.kata,
      eneo:this.eneo,
      wilaya:this.wilaya,
      info :'deleted',
      nyumbaid:this.nyumbaid,
      mkoa:this.mkoa,
    
     
  
    }


    this.rest_framework.wapangajiPost(this.Create, 'deleted/').then((result) => {
      this.responseDat = result;
      // alert(this.userData.username)
      localStorage.setItem('userData2', this.responseData);
     //  localStorage.setItem('user', this.userData.Username);
     //  this.UserCreate();
     //  this.UserInfo();
    //  this.clean();
      this.getdata();
      // this.ngProgress.ref().complete();
      }, (err) => {
        alert('error');
 
      });
  

  }
  save(){
    this.ngProgress.ref().start()
    this.Created={
      nyumba:this.nyumba,
      simu:this.simu,
      mkaguzi_wa_kazi:this.mk,
      Eneo_la_kazi:this.eneokaz,
      mfanyaji_kazi:this.mfanyakaz,
      kiasi_kilichotumika:this.kias,
      aina_ya_chumba:this.aina_ya_chumba,
      wilaya_kikazi:this.wilaya_kikazi,
      kata:this.kata,
      eneo:this.eneo,
      wilaya:this.wilaya,
      info :'delete',
      nyumbaid:this.nyumbaid,
      mkoa:this.mkoa,
    }
    this.rest_framework.wapangajiPost(this.Created, 'marekebisho/').then((result) => {
      this.responseData = result;
      // alert(this.userData.username)
      localStorage.setItem('userData2', this.responseData);
     //  localStorage.setItem('user', this.userData.Username);
     //  this.UserCreate();
     //  this.UserInfo();
     this.clean();
      this.getdata();
      this.ngProgress.ref().complete();
      }, (err) => {
        alert('error');
 
      });
  }

}
