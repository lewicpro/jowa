import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { RestframeworkService } from '../apiservice/restframework.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-duka-director-dashboard',
    templateUrl: './duka-director-dashboard.component.html',
    styleUrls: ['./duka-director-dashboard.component.css'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class DukaDirectorDashboardComponent implements OnInit {

  users;
  Username;
  jina;
  pin;
  days;
  PostAuth;
  osource="False"
  industry="False"
  rawmaterialval="True"
  company;
  Account_no;
  kata;
  selectedData;
  allldata
  caution;
  datagiven;
  mkopo;
  wilaya;
  company_name;
  responseData;
  poze;
  dataid;
  ins;
  baki;
  balanc;
  diffDays;
  d = new Date();
  oneday;
  FirstDate;
  SecDate;
  getTime;
  estmatd: number;
  last;
  // d = new Date();
  all;
  Jumla_priceDays;
  Faida;
  jumla;
  Manager;
  daily;
  Rejesho_mwezi;
  details;
  date;
  // d = new Date();
  Simu;
  mwezi;
  Balance;

  datar;
  riba;
  imageUrl;
  estimated;
  mande;
  Madai;
  divs;
  usera;
  jumla_malipo;
  mkoa;
  stored;
  moxt;
  infos;
  mwzi;
  hour;
  duka;
  sec;
  Director;
  als;
  min;
  Streetval: any;
  districtnameval: any;
  physicaladdressval: any;
  tinval: any;
  Accounteval: any;
  Companynamesval: any;
  mkoaval: any;
  Industryval: any;
  expiredateval: any;
  bucketval: any;
  Phonevalue: any;
  Emailval: any;
  constructor(public restFramework:RestframeworkService, public router:Router) {
    console.log('passed manager')
    this.industries()
    this.restFramework.getListsOveralDirector().then(fod=>{
      this.als=fod;
    })
    this.duka=localStorage.getItem('DirectorDuka')
    this.company=localStorage.getItem('company')
    this.PostAuth={
      Status:'logedout',
      Time_logedout:this.d.getDate() + "/" + this.moxt + "/" +this.d.getFullYear() + "  ||  " + this.hour + ":" + this.min + ":" + this.sec,


    }
    this.mwzi = this.d.getMonth()
    this.moxt = parseInt(this.mwzi) + 1
    this.min = this.d.getMinutes();
    this.hour = this.d.getHours()
    this.sec = this.d.getSeconds()
    this.stored= localStorage.getItem('userData')
    this.restFramework.getLists().then(malii=>{
      this.mande = malii
      this.usera = localStorage.getItem('user')
      for(const m of this.mande){
        if((m.Username === this.usera)){
          if(m.privs === 'Admin'){

          } else{
            this.router.navigate(['/'])
          }

        }

      }
    })
    this.getval()

   }

   updatecompany(){
    this.company=localStorage.getItem('company')

   }
   industries(){
    this.restFramework.getDukaInformation(1).then(datas=>{
      this.allldata=datas;
      for(const m of this.allldata){
        if(m){
         this.Streetval = m.kata;
         this.districtnameval = m.wilaya;
         this.physicaladdressval = m.kata;
         this.tinval = m.Tin_no;
         this.Accounteval = m.Account_no;
         this.Companynamesval = m.company;
         this.mkoaval = m.mkoa;
         this.industry = m.industry;
         this.osource = m.othersource;
         this.expiredateval = m.expire;
         this.bucketval = m.bucket;
         this.Phonevalue = m.Simu;
         this.Emailval = m.Email
         // this.Emailval = m.Email
        //  this.pk = m.pk
        }
      }

    })


   }

   execute(){


      localStorage.removeItem('DirectorDuka')
      localStorage.removeItem('company')
      localStorage.removeItem('lservice_officer')
      localStorage.removeItem('user')
      localStorage.removeItem('company_prog')
      localStorage.removeItem('id')
      this.router.navigate(['login']);





  }

  industr(){



  }


   getval(){
    this.restFramework.InfoNyumbaThem().then(data=>{
      this.divs=data;
      for(const n of this.divs){

        // this.datar = localStorage.getItem('mpangajiid');

        if(n.user){
          // console.log('maviiiii2')
          this.jumla_malipo = n.Jumla_malipo;
          this.Jumla_priceDays= n.Jumla_priceDays;
          this.Madai = n.Madai;
          this.mkopo = n.mkopo;
          this.Faida = n.Faida;
          this.Faida = n.Faida;
          this.Rejesho_mwezi = n.Rejesho_mwezi;
          this.date = this.d.getMonth() + 1;}}
    })
   }

  ngOnInit() {
  }
  mikopo(){
    this.router.navigate(['/Admindash/Wateja'])
  }
  changeclik(){
    this.router.navigate(['/duka'])

  }
  changeclikWakala(){
    this.router.navigate(['/wakala/ongeza-mmiliki-wakala'])

  }



}
