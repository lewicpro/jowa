import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Route, Router } from '../../../node_modules/@angular/router';
import { RestframeworkService } from '../apiservice/restframework.service';
import { interval } from 'rxjs';
import { NgProgress } from 'ngx-progressbar';
import * as CryptoJS from 'crypto-js';
import sha256 from 'crypto-js/sha256';
import { LowlayerComponent } from '../lowlayer/lowlayer.component';


@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class LoginComponent{

  option="login";

  users;
  username;
  spaceerror;
  space="yes";
  spaceerror2;
  filled="nope";
  optione="False";
  moko="yes";
  emailval="yes"
  spaceofficererror;
  encryptedData:string="";
  secretKey:string="mokaa"
  alget;
  dataToEcrypt;
  time;
  emailerror;
  package;
  userDataObtained;
  d = new Date();
  getdecrypdata;
  responseData;
  privs;
  packg="null"
  company_username;
  label;
  onlinepayment="perfectmoney"
  page="1";
  company_name;
  datas;
  coms;
  company;
  status;
  payment_method="Tigopesa"
  datagiven;
  vesta;
  all;
  sessn = 1;
  processor="tigo"
  say;
  mor;
  moran;
  surnames;
  text='';
  stored;
  possible ='qwertyuiopasdfghjklzxcvbnm<>?!@#$%^&*1234567890'
  userData={'username':'', 'password':''};
  PostAuth= {'user':'',
  'Token_key':'',
   'Time_logedin':'',
   'Status':'',
    'Time_logedout':'',
     'company':'mbee',
      'generated_key':''};


  constructor(public router: Router, public low: LowlayerComponent, private restframeworkservice: RestframeworkService, public ngProgress:NgProgress) {
    this.filled="nope";
    this.optione="False"
    this.stored= localStorage.getItem('userData')
    this.surnames= localStorage.getItem('company_prog')
    // this.restframeworkservice.getauth().then(result=>{
    //   this.all = result;
    //   // console.log('store1 :'+this.stored)

    //   for(const m of this.all){
    //     // console.log('store6')


    //     if(m.generated_key === this.stored){
    //       // console.log('store5')
    //       if(m.Status ==='logedout'){
    //         // console.log('store0')
    //         localStorage.removeItem('userData')
    //         this.router.navigate(['login']);



    //       }
    //       else if(m.Status ==='logedin'){

    //         if(m.company === 'Super_Admin'){
    //           this.router.navigate(['/Admindash/Wateja']);

    //         }
    //         else{
    //           if(m.company === this.surnames){
    //             // console.log('store2')
    //             this.router.navigate(['/Sub/Ongeza-Account']);

    //           }

    //         }




    //       }

    //     }

    //   }
    // })
    for(let i = 0; i < 10; i++){
      this.text += this.possible.charAt(Math.floor(Math.random() * this.possible.length))

    }
    this.status='login'




    // if(localStorage.getItem('userData')){
    //   this.router.navigate(['/Admindash/Wateja'])
    // }
    // else{

    // }
  //   var timeout;

  //     document.onmousemove = function(){
  //       clearTimeout(timeout);
  //       timeout = setTimeout(function(){
  //         alert("move your mouse");
  //       }, 5000);
  // }
  //     document.onkeypress = function(){
  //       clearTimeout(timeout);
  //       timeout = setTimeout(function(){
  //         alert("move your press");
  //       }, 5000);

  //   }



    this.time = this.d.getTime()

  }

  cancel(){
    this.optione="False"
  }




  ogin() {
    this.ngProgress.ref().start();
    this.restframeworkservice.getLoginPosts(this.userData, 'api/auth/token-auth/').then((result) => {
        this.responseData = result;

        // console.log(this.responseData.token);
        // console.log('USERDATA:' + this.userData.username);
        // alert(this.responseData.token);
        // alert(this.userData.username)
        // localStorage.setItem('userData', this.responseData.token);
        localStorage.setItem('user', this.userData.username);
        localStorage.removeItem('sessionLogin')
        // this.datar = localStorage.getItem('user');
        this.restframeworkservice.getloginPush().then(data=>{
          this.users = data;
          // console.log('....;'+this.users)
          if(this.users){
            this.restframeworkservice.getWorkerloginddtails().then(datazs=>{
              localStorage.removeItem('user')
              localStorage.setItem('user', this.userData.username);
              localStorage.removeItem('worker-dir')
              localStorage.setItem('worker-dir', this.userData.username);
              localStorage.removeItem('sessionLogin')
              this.vesta=datazs;
              for(const l of this.vesta){
                if(l.user === this.userData.username ){
                  this.username = l.Username;
                  this.router.navigate(['WorkerOverview/Workers/Profile'])
                }


              }

            })

          }
          for(const m of this.users){
            // console.log('hereee2')
            if(m.Username === this.userData.username ){
              this.username = m.Username;
              this.privs = m.privs;
              this.company = m.company;
              //.log(this.users)
              if(this.privs === 'Admin'){
                // console.log('1: '+ this.username)
                // console.log('2: '+ m.Username)




                if(this.company === 'Sub_Admin'){

                  localStorage.removeItem('lservice_officer')
                  localStorage.setItem('lservice_officer', m.Username)

                  this.low.most();
                  this.restframeworkservice.getListsMicrocredit().then(dam=>{
                    this.datas = dam;
                    for(const k of this.datas){
                      if(k.service_officer === m.Username){
                        // console.log('imeingia  : 1', k.company_username)
                        // console.log('imeingia  : 2', m.company_username)
                        this.company_name = k.company_name;
                        this.company_username = k.company_username
                        // console.log('imeanza hapa' )

                        localStorage.setItem('company_prog', k.company_name)
                        localStorage.setItem('company_username', k.company_username)
                        this.PostAuth.company = this.company_name;
                        this.PostAuth.Token_key = this.responseData.token;
                        this.PostAuth.user = k.service_officer;
                        this.PostAuth.generated_key = this.text
                        this.PostAuth.Status = 'logedin';
                        localStorage.setItem('userData', this.text);
                        this.router.navigate(['/Sub/Ongeza-Account']);
                        this.restframeworkservice.getLoginPosts(this.PostAuth, 'LoginAuth/').then((results)=>{
                        this.datagiven =results

                      }, (err) => {
                        alert('failed auth');

                      })


                      }

                    }
                  })

                }else if(this.company === 'Super_Admin'){

                  this.PostAuth.company = this.company;
                  this.PostAuth.Token_key = this.responseData.token;
                  this.PostAuth.user = this.username;
                  this.PostAuth.Status = 'logedin';
                  this.PostAuth.generated_key = this.text;
                  localStorage.setItem('userData', this.text);
                  localStorage.setItem('company_prog', 'Super_Admin')
                  // localStorage.setItem('company_username', k.company_username)
                  this.restframeworkservice.getLoginPosts(this.PostAuth, 'LoginAuth/').then((results)=>{

                    this.datagiven =results
                }, (err) => {
                  alert('failed auth');

                })
                  localStorage.removeItem('lservice_officer')
                  localStorage.setItem('lservice_officer', m.Username)
                  this.router.navigate(['/Admindash/Wateja']);
                  this.low.most();

                } else{
                  alert('Contact Admin for more Infomation about your account')
                }

              } else if (this.privs === 'Client'){

                this.router.navigate(['Dashboard']);

              } else if(this.privs === 'Worker'){

                // console.log('1: '+ this.username)
                // console.log('2: '+ m.Username)
                localStorage.removeItem('lservice_officer')
                localStorage.setItem('lservice_officer', m.Username)
                this.router.navigate(['/Admindash/Wateja']);
                this.low.most();

              }

            }


          }
        });



        }, (err) => {
          this.coms = this.sessn++ ;
          // console.log(this.coms)
          this.label ="Wrong username/password"

          // if(typeof(Storage) !== "undefined") {


            localStorage.setItem('sessionLogin', this.coms)

            if (Number(localStorage.getItem('sessionLogin')) > 3 ) {
              this.label ="You have tried more than thrice with no success"
              this.status = 'emailsender'
            } else {
              sessionStorage.clickcount = 1;
              this.status='login'
            }
          //   this.say = sessionStorage.clickcount;
          // } else {
          //   this.say= "Sorry, your browser does not support web storage..."
          //   console.log(this.say)
          // }
  });
  this.ngProgress.ref().complete();



}

loan(){
  this.packg="null"
  this.option="signup"
  this.package = "loan"

  this.encrypt()
  this.decrypt()

}
realestate(){
  this.packg="null"
  this.option="signup"
  this.package = "realestate"

  this.encrypt()
  this.decrypt()

}
shop(){
  this.packg="null"
  this.option="signup"
  this.package = "shop"

  this.encrypt()
  this.decrypt()

}
transaction(){
  this.packg="null"
  this.option="signup"
  this.package = "transaction"

  this.encrypt()
  this.decrypt()

}
distribution(){
  this.packg="null"
  this.option="signup"
  this.package = "distribution"

  this.encrypt()
  this.decrypt()

}



login(){
  this.restframeworkservice.getLoginPosts(this.userData, 'toke_pro/').then(result =>{
    this.responseData = result;
    localStorage.removeItem('user')
    localStorage.setItem('user', this.userData.username);
    localStorage.setItem('token', this.responseData.access);
    // kept so the SMS pages can get a new token when this one (30 minutes) runs out
    localStorage.setItem('refresh', this.responseData.refresh);

    this.restframeworkservice.getListsMicrocredita().then(data=>{
      console.log('passed here 1')
      this.all = data;
      for (const k of this.all){
        console.log('passed here 2')


        // console.log('passed  :' + k.user + ' --'+ this.userData.username)
        if(k.user === this.userData.username){
          console.log('passed here 3')
          // console.log('passed')
          // console.log('k.privs : ' +k.privs )




          if(k.privs == 'Worker1'){
            console.log('1 ')
            localStorage.removeItem('user')
            localStorage.setItem('user', this.userData.username);
            localStorage.removeItem('worker-dir')
            localStorage.setItem('worker-dir', this.userData.username);
            localStorage.removeItem('sessionLogin')
            this.router.navigate(['WorkerOverview/Workers/Profile'])
            this.low.most();
          }
          else if(k.privs === 'Worker2'){
            console.log('2 ')
            // console.log('Worker2 : ')
            // // console.log('passed here 3 - 2')
            // localStorage.removeItem('forwaded')
            // this.router.navigate(['home-worker2'])
            // localStorage.setItem('forwaded', k.WorkerAffiliatedFrom);

          }
          else if(k.privs === 'BManager' ){
            console.log('3 ')
            localStorage.removeItem('wakala')
            localStorage.setItem('wakala', this.userData.username);
            localStorage.removeItem('worker-dir')
            localStorage.setItem('worker-dir', this.userData.username);
            localStorage.removeItem('sessionLogin')
            this.router.navigate(['WakalaOverview/Details/Profile'])
            // console.log('Worker1 ')

          }




          else if(k.status=='Director'){

            localStorage.removeItem('company')
            localStorage.removeItem('DirectorDuka')
            localStorage.setItem('DirectorDuka', this.userData.username);
            this.restframeworkservice.getDukaWamilikiLists2(this.userData.username).then(res=>{
              this.alget=res;
              if(this.alget.length > 1){
                this.optione="True";



              }else{
                for(const m of this.alget){

                  localStorage.setItem('company', m.company);
                  // localStorage.setItem('company', 'Maleleii');
                  // localStorage.removeItem('worker-dir')
                  // localStorage.setItem('worker-dir', this.userData.username);
                  localStorage.removeItem('sessionLogin')
                  this.router.navigate(['/DukaMmilikiDashboard/Products'])

                }

              }


            })



          }
          else if(k.statuse=='worker'){
            console.log('4 2')
            localStorage.removeItem('company')
            localStorage.removeItem('duka')
            localStorage.setItem('duka', this.userData.username);
            this.restframeworkservice.getWorkerDukaProfile(this.userData.username).then(res=>{
              this.alget=res;
              for(const m of this.alget){
                localStorage.setItem('company', m.company);
                // localStorage.setItem('company', 'Maleleii');
                // localStorage.removeItem('worker-dir')
                // localStorage.setItem('worker-dir', this.userData.username);
                localStorage.removeItem('sessionLogin')
                this.router.navigate(['/DukaDashboard/Sales'])

              }

            })
          }
        }
        else if(k.user===this.userData.username){

          localStorage.removeItem('company')
          localStorage.removeItem('DirectorDuka')
          localStorage.setItem('DirectorDuka', this.userData.username);
          localStorage.setItem('company', 'Maleleii');
          // localStorage.removeItem('worker-dir')
          // localStorage.setItem('worker-dir', this.userData.username);
          localStorage.removeItem('sessionLogin')
          this.router.navigate(['/DukaMmilikiDashboard/Products'])


        }
        else if(k.Username === this.userData.username){
          console.log('6 ')
          if(k.privs === 'Client'){
            this.router.navigate(['MkopoHome'])

          }
          else if(k.privs === 'Admin'){
            console.log('passed here 5')
            console.log('k.company : ' + k.company)
            if(k.company=== 'Sub_Admin'){

              localStorage.removeItem('lservice_officer')
              localStorage.setItem('lservice_officer', k.Username)

              this.low.most();
              console.log('here 1')
              this.restframeworkservice.getListsMicrocredit().then(dam=>{
                console.log('here 2')
                this.datas = dam;
                for(const l of this.datas){
                  console.log('here 3')
                  console.log('l.service officer  : ' +l.service_officer )
                  console.log('this.userData.username  : ' + this.userData.username )
                  if(l.service_officer == k.Username){
                    console.log('here 4')
                    // console.log('imeingia  : 1', k.company_username)
                    // console.log('imeingia  : 2', m.company_username)
                    this.company_name = k.company_name;
                    this.company_username = k.company_username
                    // console.log('imeanza hapa' )

                    localStorage.setItem('company_prog', k.company_name)
                    localStorage.setItem('company_username', k.company_username)
                    this.PostAuth.company = this.company_name;
                    this.PostAuth.Token_key = this.responseData.token;
                    this.PostAuth.user = k.service_officer;
                    this.PostAuth.generated_key = this.text
                    this.PostAuth.Status = 'logedin';
                    localStorage.setItem('userData', this.text);
                    this.router.navigate(['/Sub/Ongeza-Account']);
                    this.restframeworkservice.getLoginPosts(this.PostAuth, 'LoginAuth/').then((results)=>{
                    this.datagiven =results

                  }, (err) => {
                    alert('failed auth');

                  })


                      }

                    }
                  })
            }
            else if(k.company === 'Super_Admin'){
              this.PostAuth.company = this.company;
              this.PostAuth.Token_key = this.responseData.token;
              this.PostAuth.user = this.username;
              this.PostAuth.Status = 'logedin';
              this.PostAuth.generated_key = this.text;
              localStorage.setItem('userData', this.text);
              localStorage.setItem('company_prog', 'Super_Admin')
              // localStorage.setItem('company_username', k.company_username)
              this.restframeworkservice.getLoginPosts(this.PostAuth, 'LoginAuth/').then((results)=>{

                this.datagiven =results
            }, (err) => {
              alert('failed auth');

            })
              localStorage.removeItem('lservice_officer')
              localStorage.setItem('lservice_officer', k.Username)
              this.router.navigate(['/Admindash/Wateja']);
              this.low.most();
            }
          } else if (this.privs === 'Client'){

            this.router.navigate(['Dashboard']);

          }

        }


      }
    });

  }).catch(error=>{
    localStorage.removeItem('user');
    localStorage.removeItem('username');
    localStorage.removeItem('token');
    localStorage.removeItem('company')
    localStorage.removeItem('lservice_officer')
    localStorage.removeItem('DirectorDuka')
    localStorage.removeItem('worker-dir')
    localStorage.removeItem('sessionLogin')
    localStorage.removeItem('duka')
    localStorage.removeItem('userData');


  })
  // this.router.navigate(['/home'])

}

companyjeje(a,b){
  localStorage.setItem('company', a);
  localStorage.removeItem('sessionLogin')
  this.router.navigate(['/DukaMmilikiDashboard/Products'])



}
encrypt(){
  this.dataToEcrypt={
    package: this.package, name:'masako'}

  this.encryptedData = CryptoJS.AES.encrypt(JSON.stringify(this.dataToEcrypt), this.secretKey).toString()
  console.log('encrypted data: '+ this.encryptedData);
  // console.log('name: '+ obj.name);

}
encryptfunct(koko){


  this.encryptedData = CryptoJS.AES.encrypt(JSON.stringify(koko), this.secretKey).toString()
  console.log('encrypted data: '+ this.encryptedData);
  // console.log('name: '+ obj.name);

}
decrypt(){
  let bytes=CryptoJS.AES.decrypt
  (this.encryptedData, this.secretKey);
  var obj =  JSON.parse(bytes.toString(CryptoJS.enc.Utf8));

  console.log('packagessss: '+ obj.Company);
  // console.log('name: '+ obj.name);

}
decryptfunct(){
  let bytes=CryptoJS.AES.decrypt
  (this.encryptedData, this.secretKey);
  var obj =  JSON.parse(bytes.toString(CryptoJS.enc.Utf8));

  console.log('packagessss: '+ obj.Company);
  console.log('Company_Name: '+ obj.Company_Name);
  console.log('Company_Email: '+ obj.Company_Email);
  console.log('Company_Phone: '+ obj.Company_Phone);
  console.log('Company_District: '+ obj.Company_District);
  // console.log('name: '+ obj.name);

}




company_names(){
  return localStorage.getItem('company_prog')

}

  ngOnInit() {
  }

  // login() {
  //   this.router.navigate(['Dashboard']);
  // }



  funct(){
    var m = 1
    const secondsCounter = interval(6000);
    secondsCounter.subscribe(n =>
      this.moran= n);






  }
  chosepackg(){
    this.packg="choose"
  }
  chooseCompa(){
    this.option="choosecompany"
  }

  perfect(){
    this.onlinepayment="perfectmoney"
  }
  litecoin(){
    this.onlinepayment="litecoin"
  }
  advancedcash(){
    this.onlinepayment="advancecash"
  }
  payeer(){
    this.onlinepayment="payeer"
  }


  signup(){
    this.option ="signup"
  }

  loginBack(){
    this.filled='nope';
    this.option ="login"
    this.page='1';

  }

  next(){
    this.page='2'
  }
  third(){
    this.page='3'
  }
  cancelpayment(){

  }

  getclass(page){
    if(page=='1'){
      return {'animated' : page=='1', 'slideInLeft' : page=='1'}

    }
    else if(page=='2'){
      return {'animated' : page=='2', 'slideOutRight' : page=='2'}

    }
    // else if(page=='3'){
    //   return {'animated' : page=='2', 'slideOutRight' : page=='2'}

    // }



  }





  loginUpgraded(){
    this.ngProgress.ref().start();
    this.restframeworkservice.getLoginPosts(this.userData, 'loginPuzzle').then((result) => {
        this.responseData = result;
      }, (err) => {
        console.log(err)

      });

  }

  mpesa(){
    this.processor="mpesa"
    this.payment_method ="Mpesa"
    this.mpesafunct('mpesa')
  }
  tigo(){
    this.processor="tigo"
    this.payment_method ="Tigopesa"
    this.tigopesafunct('tigo')
  }
  halopesa(){
    this.processor="halopesa"
    this.payment_method ="Halopesa"
    this.halopesafunct('halopesa')
  }
  airtel(){
    this.processor="airtel"
    this.payment_method ="Airtel Money"
    this.airtelfunct('airtel')
  }


  moxt;
  compan(h){

    // this.getdecrypdata=localStorage.getItem('decrypted')
    console.log("wowo : "+ h)
    // this.moxt = {water:'mimi'}
    this.dataToEcrypt.Company= h
    console.log(this.dataToEcrypt)
    this.encryptfunct(this.dataToEcrypt)
    // this.encrypt()
    this.decrypt()
  }

  validatecompan(kk){
    console.log('validate: '+kk)
  }
  companynamevalidate(mm){
    // console.log('here passed also : ', mm)
    if(mm.indexOf(' ') > -1){
      this.spaceerror="no space required"
      this.space = "nope"

      return {'border': 'solid 2px red'}

    }
    else if(mm=='2'){
      return {'animated' : mm=='2', 'slideOutRight' : mm=='2'}

    } else{
      this.spaceerror=""
      this.space="yes";


    }

  }
  officernamevalidate(mm){
    console.log('here passed also : ', mm)
    if(mm.indexOf(' ') > -1){
      this.spaceofficererror="no space required"
      this.space = "nope"

      return {'border': 'solid 2px red'}

    }
    else if(mm=='2'){
      return {'animated' : mm=='2', 'slideOutRight' : mm=='2'}

    } else{
      this.spaceofficererror=""
      this.space="yes";


    }

  }
  companyname(h){
    if(h.indexOf(' ') < 2){
      this.spaceerror2="space required"
      this.moko="nope"

    }
    else if(h=='2'){
      return {'animated' : h=='2', 'slideOutRight' : h=='2'}

    } else{
      this.spaceerror2=""
      this.moko="yes"
      // this.filled ='yes'

    }
    // this.moxt = {water:'mimi'}
    this.dataToEcrypt.Company_Name= h
    console.log(this.dataToEcrypt)
    this.encryptfunct(this.dataToEcrypt)
    this.decrypt()
  }
  fullnamevalidate(mm){
    console.log('here passed also : ', mm)


  }
  CEmail(h){
    console.log('index :'+ h.indexOf('@'))
    if(h.indexOf('@') > -1){
      this.emailerror=""
      this.emailval="yes"
      this.filled ='yes'


    }
    else if(h=='2'){
      return {'animated' : h=='2', 'slideOutRight' : h=='2'}

    } else{
      this.emailerror="Email required"
      this.emailval="nope"


    }
    console.log("wowo : "+ h)
    // this.moxt = {water:'mimi'}
    this.dataToEcrypt.Company_Email= h
    console.log(this.dataToEcrypt)
    this.encryptfunct(this.dataToEcrypt)
    this.decrypt()
  }
  CompanyPhone(h){
    console.log("wowo : "+ h)
    // this.moxt = {water:'mimi'}
    this.dataToEcrypt.Company_Phone= h
    console.log(this.dataToEcrypt)
    this.encryptfunct(this.dataToEcrypt)
    this.decrypt()
  }
  District(h){
    console.log("wowo : "+ h)
    // this.moxt = {water:'mimi'}
    this.dataToEcrypt.Company_District= h
    console.log(this.dataToEcrypt)
    this.encryptfunct(this.dataToEcrypt)
    this.decrypt()
  }
  Region(h){
    console.log("wowo : "+ h)
    // this.moxt = {water:'mimi'}
    this.dataToEcrypt.region= h
    console.log(this.dataToEcrypt)
    this.encryptfunct(this.dataToEcrypt)
    this.decrypt()
  }
  officer(h){
    console.log("wowo : "+ h)
    // this.moxt = {water:'mimi'}
    this.dataToEcrypt.officer= h
    console.log(this.dataToEcrypt)
    this.encryptfunct(this.dataToEcrypt)
    this.decrypt()
  }
  officerfullname(h){
    console.log("wowo : "+ h)
    if(h.indexOf(' ') < 2){
      this.spaceerror2="space required"
      this.moko="nope"

    }
    else if(h=='2'){
      return {'animated' : h=='2', 'slideOutRight' : h=='2'}

    } else{
      this.spaceerror2=""
      this.moko="yes"
      // this.filled ='yes'

    }
    // this.moxt = {water:'mimi'}
    this.dataToEcrypt.officerfullname= h
    console.log(this.dataToEcrypt)
    this.encryptfunct(this.dataToEcrypt)
    this.decrypt()
  }
  officeremail(h){
    // console.log("wowo : "+ h)
    if(h.indexOf('@') > -1){
      this.emailerror=""
      this.emailval="yes"
      this.filled ='yes'


    }
    else if(h=='2'){
      return {'animated' : h=='2', 'slideOutRight' : h=='2'}

    } else{
      this.emailerror="Email required"
      this.emailval="nope"


    }
    // this.moxt = {water:'mimi'}
    this.dataToEcrypt.officeremail= h
    console.log(this.dataToEcrypt)
    this.encryptfunct(this.dataToEcrypt)
    this.decrypt()
  }
  officerPhone(h){
    console.log("wowo : "+ h)
    // this.moxt = {water:'mimi'}
    this.dataToEcrypt.officerPhone= h
    console.log(this.dataToEcrypt)
    this.encryptfunct(this.dataToEcrypt)
    this.decrypt()
  }
  Password(h){
    console.log("wowo : "+ h)
    // this.moxt = {water:'mimi'}
    this.dataToEcrypt.Password= h
    console.log(this.dataToEcrypt)
    this.encryptfunct(this.dataToEcrypt)
    this.decrypt()
  }
  Password2(h){
    console.log("wowo : "+ h)
    // this.moxt = {water:'mimi'}
    this.dataToEcrypt.Password2= h
    console.log(this.dataToEcrypt)
    this.encryptfunct(this.dataToEcrypt)
    this.decrypt()
  }
  mpesafunct(h){
    console.log("wowo : "+ h)
    // this.moxt = {water:'mimi'}
    this.dataToEcrypt.payment_method= h
    console.log(this.dataToEcrypt)
    this.encryptfunct(this.dataToEcrypt)
    this.decrypt()
  }
  Transaction_id(h){
    console.log("wowo : "+ h)
    // this.moxt = {water:'mimi'}
    this.dataToEcrypt.Transaction_Id= h
    console.log(this.dataToEcrypt)
    this.encryptfunct(this.dataToEcrypt)
    this.decrypt()
  }
  halopesafunct(h){
    console.log("wowo : "+ h)
    // this.moxt = {water:'mimi'}
    this.dataToEcrypt.payment_method= h
    console.log(this.dataToEcrypt)
    this.encryptfunct(this.dataToEcrypt)
    this.decrypt()
  }
  tigopesafunct(h){
    console.log("wowo : "+ h)
    // this.moxt = {water:'mimi'}
    this.dataToEcrypt.payment_method= h
    console.log(this.dataToEcrypt)
    this.encryptfunct(this.dataToEcrypt)
    this.decrypt()
  }
  airtelfunct(h){
    console.log("wowo : "+ h)
    // this.moxt = {water:'mimi'}
    this.dataToEcrypt.payment_method= h
    console.log(this.dataToEcrypt)
    this.encryptfunct(this.dataToEcrypt)
    this.decrypt()
  }

  postdata(){
    localStorage.setItem('saved', this.encryptedData)
    this.userDataObtained=this.dataToEcrypt;
    this.restframeworkservice.getLoginPosts(this.userDataObtained, 'PaymentWorkingData/' ).then(result =>{
      this.responseData = result;
    })}

    done(){
      this.processor = 'done'
    }



}
