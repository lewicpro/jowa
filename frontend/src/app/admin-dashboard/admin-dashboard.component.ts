import { Component, Injectable, ChangeDetectionStrategy } from '@angular/core';
import { RestframeworkService } from '../apiservice/restframework.service';
import { Router } from '../../../node_modules/@angular/router';
@Injectable()
@Component({
    selector: 'app-admin-dashboard',
    templateUrl: './admin-dashboard.component.html',
    styleUrls: ['./admin-dashboard.component.css'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class AdminDashboardComponent {
  infos;
  balance;
  mkopo;
  Rejesho;
  mwei;
  array =['moja', 'mbili'];
  wilaya;
  monthes = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December', 'January', 'February', 'Mach', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  all;
  mez;
  malipo;
  monam;
  PostAuth;
  datagiven;
  stored;
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

  constructor(public router:Router, public restframework: RestframeworkService) {
    console.log('swag1')
 
 
    this.stored= localStorage.getItem('userData')
    this.restframework.getauth().then(result=>{
      this.all = result;
      console.log('swag2')
      // console.log('store1 :'+this.stored)
      console.log('swagall', this.all.length)
     
      for(const m of this.all){
        console.log('swag3')
        console.log('givenn'+ m.generated_key)
        if(!m.generated_key){
          alert('moxxxxxxxt')

        }

        if(m.generated_key === this.stored){
          console.log('swag4')
          if(m.Status ==='logedout'){
            console.log('swag5')
            localStorage.removeItem('userData')
            this.router.navigate(['login']);



          }

        }

      }
    })
    this.PostAuth={
      Status:'logedout',
      Time_logedout:this.d.getDate() + "/" + this.moxt + "/" +this.d.getFullYear() + "  ||  " + this.hour + ":" + this.min + ":" + this.sec,
      
      
    }
    this.mwzi = this.d.getMonth()
    this.moxt = parseInt(this.mwzi) + 1
    this.min = this.d.getMinutes();
    this.hour = this.d.getHours()
    this.sec = this.d.getSeconds()
    // this.mona=localStorage.getItem('userData')
    this.stored= localStorage.getItem('userData')

    this.restframework.getauth().then(result=>{
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
    this.restframework.getauth().then(result=>{
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
    


    this.restframework.wapangajiPos1(this.PostAuth, 'LoginAuth/'+ this.dataid + '/').then((results)=>{
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

  ordercom(){
    this.router.navigate(['/Orders/workers-wote'])

  }


  getdata(){
    // console.log('sisi')
    this.restframework.Jumlalist().then(data =>{
      this.infos = data;
      this.balance = this.infos.Total_balance
      this.Rejesho = this.infos.Rejesho_mwezi
      this.mkopo = this.infos.Mkopo
      this.mwezi = this.d.getMonth() + 1;
      // for(const m of this.infos){
      //   if(m){
      //     this.balance = m.Total_balance; 
          // console.log(this.infos.Total_balance)
      //   }
        

      // }
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

  changeclik(){
    this.router.navigate(['/duka/maduka-yote'])

  }
  changeclikWakala(){
    this.router.navigate(['/wakala/ongeza-mmiliki-wakala'])

  }

}
