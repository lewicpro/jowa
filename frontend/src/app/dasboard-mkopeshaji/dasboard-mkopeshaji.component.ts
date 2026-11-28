import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { RestframeworkService } from '../apiservice/restframework.service';
import { Router } from '@angular/router';
import { LoginComponent } from '../login/login.component';

@Component({
    selector: 'app-dasboard-mkopeshaji',
    templateUrl: './dasboard-mkopeshaji.component.html',
    styleUrls: ['./dasboard-mkopeshaji.component.css'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class DasboardMkopeshajiComponent implements OnInit {
  infos;
  balance;
  mkopo;
  Rejesho;
  company_name;
  mwei;
  array =['moja', 'mbili'];
  wilaya;
  monthes = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December', 'January', 'February', 'Mach', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  all;
  mez;
  malipo;
  monam;
  PostAuth;
  mocx;
  Faida;
  datagiven;
  BalanceIliyopo;
  rejeshomwezi;
  stored;
  MkopoUliopo;
  dataid;
  moxt;
  min;
  sec;
  mande;
  mwzi;
  usera;
  hour;
  mwaka;
  mopa  = '';
// d = new Date();
  mwezi;
  d = new Date();

  constructor(public router:Router, public restframework: RestframeworkService, public loginInfo:LoginComponent) {
    this.company_name= this.loginInfo.company_names();
    // console.log('inf:' + this.loginInfo.company_names())
    // this.restframework.getauth().then(result=>{
    //   this.all = result;
    //   // console.log('store1 :'+this.stored)
     
    //   for(const m of this.all){
    //     if(m.generated_key === this.stored){
    //       if(m.Status ==='logedout'){
    //         localStorage.removeItem('userData')
    //         this.router.navigate(['login']);



    //       }

    //     }

    //   }
    // })
    this.mwzi = this.d.getMonth()
    this.moxt = parseInt(this.mwzi) + 1
    this.min = this.d.getMinutes();
    this.hour = this.d.getHours()
    this.sec = this.d.getSeconds()
    // this.mona=localStorage.getItem('userData')
    this.stored= localStorage.getItem('userData')
    this.restframework.getMicrocreditData().then(resultsa=>{
      this.mocx = resultsa
      for(const j of this.mocx){
        this.rejeshomwezi = j.Rejesho_mwezi
        this.BalanceIliyopo = j.Total_balance
        this.MkopoUliopo = j.Mkopo
        this.Faida = j.Faida
        // this.rejeshomwezi = j.Rejesho_mwezi

      }
      // console.log(this.mocx)
    })

    this.restframework.getauth().then(result=>{
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
    this.restframework.getLists().then(malii=>{
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




    
    
    this.time();
    this.restframework.getInfo().then(data => {
      this.malipo= data;
      for(const m of this.malipo){

        if(String(this.mwaka) === String(m.user)){
          
          if(this.mwei === 'January'){

            this.mez = m.January;
  
          }
          else if(this.mwei === 'February'){
            this.mez = m.February;
  
          }
          else if(this.mwei === 'March'){
            this.mez = m.March;
  
          }
          else if(this.mwei === 'April'){
            this.mez = m.April;
  
          }
          else if(this.mwei === 'May'){
            // May was missing, so in May this card showed nothing
            this.mez = m.May;
          }
          else if(this.mwei === 'June'){
            this.mez = m.June;
  
          }
          else if(this.mwei === 'July'){
            this.mez = m.July;
  
          }
          else if(this.mwei === 'August'){
            this.mez = m.August;
  
          }
          else if(this.mwei === 'September'){
            this.mez = m.September;
  
          }
          else if(this.mwei === 'October'){
            this.mez = m.October;
  
          }
          else if(this.mwei === 'November'){
            // console.log('inaingia')
            this.mez = m.November;
  
          }
          else if(this.mwei === 'December'){
            // console.log('inafika 2')
            
            this.mez = m.December;
  
          }

        }
        
     
      }
    });
   this.getdata();
   }

  ngOnInit() {
  }
  execute(){
    this.PostAuth={
      Status:'logedout',
      Time_logedout:this.d.getDate() + "/" + this.moxt + "/" +this.d.getFullYear() + "  ||  " + this.hour + ":" + this.min + ":" + this.sec,
      
      
    }
    this.restframework.getauth().then(result=>{
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


    this.restframework.wapangajiPos1(this.PostAuth, 'LoginAuth/'+ this.dataid + '/').then((results)=>{
   
      this.datagiven =results;
  }, (err) => {
    this.execute()
    // alert('failed logout');

  })
      localStorage.removeItem('userData')
      localStorage.removeItem('company_username')
      localStorage.removeItem('company_prog')
      localStorage.removeItem('user')
      localStorage.removeItem('lservice_officer')
      this.router.navigate(['login']);
      // this.most();
      // this.mona = 'Login';
    
   
  }


  getdata(){
    // console.log('sisi')
    this.restframework.getMicrocreditData().then(resultsa=>{
      this.mocx = resultsa
      for(const j of this.mocx){
        this.rejeshomwezi = j.Rejesho_mwezi
        this.BalanceIliyopo = j.Total_balance
        this.MkopoUliopo = j.Mkopo
        this.Faida = j.Faida
        // this.rejeshomwezi = j.Rejesho_mwezi

      }
      // console.log(this.mocx)
    })

  }


  time(){
    this.mwaka = this.d.getFullYear();
    for (let i = this.d.getMonth(); i <= this.monthes.length; i++) {
      this.mopa += this.monthes[i] + ',';
      this.array.push(this.monthes[i]);
      this.mwei=this.monthes[this.d.getMonth()]
      //.log(this.mwei)
      // console.log(this.mwaka)
  }}

  fuck(){
    this.getdata();

  }

  changerouter(){
    this.router.navigate(['/Nyumba-dash/Nyumba'])
  }

}
