import { Component, OnInit } from '@angular/core';
import { RestframeworkService } from '../apiservice/restframework.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-maduka-dashboard',
  templateUrl: './maduka-dashboard.component.html',
  styleUrls: ['./maduka-dashboard.component.css']
})
export class MadukaDashboardComponent implements OnInit {
 
  users;
  Username;
  jina;
  pin;
  days;
  PostAuth;
  Account_no;
  kata;
  selectedData;
  caution;
  datagiven;
  mkopo;
  wilaya;
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
  company;
  constructor(public restFramework:RestframeworkService, public router:Router) {
    console.log('passed manager')
    this.restFramework.getListsOveralDirector().then(fod=>{
      this.als=fod;
    })
    this.duka=localStorage.getItem('duka')
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
    this.stored= localStorage.getItem('company')
    this.restFramework.getLists().then(malii=>{
      this.mande = malii
      this.usera = localStorage.getItem('duka')
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

   execute(){

    
    localStorage.removeItem('duka')
    localStorage.removeItem('company')
    localStorage.removeItem('lservice_officer')
    localStorage.removeItem('user')
    localStorage.removeItem('company_prog')
    localStorage.removeItem('id')
    this.router.navigate(['login']);


  

 
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

  // execute(){
  //   localStorage.removeItem('userData')
  //   localStorage.removeItem('company_username')
  //   localStorage.removeItem('company_prog')
  //   localStorage.removeItem('user')
  //   localStorage.removeItem('lservice_officer')
  //   this.router.navigate(['login']);
  // }





}
