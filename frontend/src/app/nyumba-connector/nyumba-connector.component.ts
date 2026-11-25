import { Component, OnInit } from '@angular/core';
import { RestframeworkService } from '../apiservice/restframework.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nyumba-connector',
  templateUrl: './nyumba-connector.component.html',
  styleUrls: ['./nyumba-connector.component.css']
})
export class NyumbaConnectorComponent implements OnInit {
  
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
  sec;
  min;
  constructor(public restFramework:RestframeworkService, public router:Router) {
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

   execute(){
    this.restFramework.getauth().then(result=>{
      this.all = result;
      // console.log('store1 :'+this.stored)
     
      for(const m of this.all){

        if(m.generated_key === this.stored){
          // console.log('stored :'+this.stored)
          // console.log('gen :'+m.generated_key)
          this.dataid = m.pk;
          // console.log('numbstore2er :'+this.stored)
          // console.log('number :'+this.dataid)


        }

      }
    })
    this.PostAuth={
      Status:'logedout',
      Time_logedout:this.d.getDate() + "/" + this.moxt + "/" +this.d.getFullYear() + "  ||  " + this.hour + ":" + this.min + ":" + this.sec,
      
      
    }
    


    this.restFramework.wapangajiPos1(this.PostAuth, 'LoginAuth/'+ this.dataid + '/').then((results)=>{
      this.restFramework.getauth().then(result=>{
        this.all = result;
        // console.log('store1 :'+this.stored)
       
        for(const m of this.all){
        
  
          if(m.generated_key === this.stored){
            // console.log('gen :'+m.generated_key)
            this.dataid = m.pk;
            // console.log('numbstore2er :'+this.stored)
            // console.log('number :'+this.dataid)
  
  
          }
  
        }
      })
      this.datagiven =results;
      localStorage.removeItem('userData')
      localStorage.removeItem('company_username')
      localStorage.removeItem('lservice_officer')
      localStorage.removeItem('user')
      localStorage.removeItem('company_prog')
      localStorage.removeItem('id')
      this.router.navigate(['login']);
  }, (err) => {
    this.execute();
    // alert('failed logout');

  })
      
      // this.most();
      // this.mona = 'Login';
      
    
   
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
    this.router.navigate(['/duka/maduka-yote'])

  }
  ordercom(){
    this.router.navigate(['/Orders/workers-wote/'])

  }
  changeclikWakala(){
    this.router.navigate(['/wakala/ongeza-mmiliki-wakala'])

  }





}
