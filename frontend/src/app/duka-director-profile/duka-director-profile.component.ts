import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { RestframeworkService } from '../apiservice/restframework.service';
import Swal from 'sweetalert2/dist/sweetalert2.js'
import { Router } from '@angular/router';
import { DukaDirectorDashboardComponent } from '../duka-director-dashboard/duka-director-dashboard.component';

@Component({
    selector: 'app-duka-director-profile',
    templateUrl: './duka-director-profile.component.html',
    styleUrls: ['./duka-director-profile.component.css'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class DukaDirectorProfileComponent implements OnInit {
  all;
  bucketval;
  Industryval;
  expiredateval;
  status='done'
  othersourceval="false"
  Director;
  companydetailval="False";
  addshopval="False";
  passwordval="True";
  edit="False"
  settings="False"
  EditOffcer="False"
  confirm="False";
  Phonevalue;
  physicaladdressval;
  dataput;
  Companynamesval
  Accounteval;
  allldata;
  tinval;
  Streetval;
  pke;
  Districtval;
  paymentval="False"
  show="password"
  payments;
  workersval="False";
  responseData;

  usernamegiven;
  dukaworkers;
  passwordgiven;
  userData;
  usernameval: any;
  password_confirmval: any;
  passwordvalue: any;
  dukazote;
  Simuval: any;
  Emailval: any;
  Accountval: any;
  CompanyVal: any;
  Tin_Noval: any;
  Kataval: any;
  Nameval;
  Mkoaval: any;
  Wilayaval: any;
  RegVal: any;
  Officeval: any;
  userupdate: {};
  pk: string;
  districtnameval: any;
  streetnameval: any;
  mkoaval: any;
  submitpass;
  // dataput: { user: any; jina: any; Account_no: any; kata: any; wilaya: any; Tin_no: any; mkoa: any; Simu: any; company: any; Email: any; };
  constructor(public restapi:RestframeworkService, public dasboard:DukaDirectorDashboardComponent, public router:Router, public dukaupdate:DukaDirectorDashboardComponent) {


    this.Simuval=null;
    this.Emailval=null;
    this.Accountval=null;
    this.CompanyVal=null;
    this.Tin_Noval=null;
    this.Kataval=null;
    this.Mkoaval=null;
    this.Wilayaval=null;
    // this.restapi.getOverAllWorkerData().then(data=>{
      this.Director=localStorage.getItem('DirectorDuka')
      this.usernameval=localStorage.getItem('DirectorDuka')
    //   this.all=data;
    // })

    this.restapi.getDirectorDukaProfile(localStorage.getItem('DirectorDuka')).then(data=>{
      this.all=data;
    })
    this.getpayments()
    this.getDuka()
    this.getWorkersDuka()
    this.getdatadata()


   }
   getdatadata(){
     this.restapi.getDukaInformation(1).then(datas=>{
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
          this.Industryval = m.industry;
          this.expiredateval = m.expire;
          this.bucketval = m.bucket;
          this.Phonevalue = m.Simu;
          this.Emailval = m.Email
          // this.Emailval = m.Email
          this.pk = m.pk
         }
       }

     })
   }

  ngOnInit() {
  }
  username(momo){
    this.usernameval=momo
  }
  password(momo){
    this.passwordvalue=momo
  }
  password_confirm(momo){
    this.password_confirmval=momo

  }
  submit_password(){
    if(String(this.passwordvalue) == String(this.password_confirmval)){
      this.popupconfirm()
    }else{
      alert('Rejected, Passwords dont match')
    }
  }
  getpayments(){
    this.restapi.getDukaPaymentsLists(this.Director).then(results=>{
      this.payments=results
    })
  }
  cancelsubmitting(){
    this.confirm="False";
    this.passwordval="True";
  }

  passwordgivenfunct(momo){
    this.passwordgiven=momo
  }
  usernamegivenfunct(momo){
    this.usernamegiven=momo
  }

  popupconfirm(){
    this.passwordval="False"
    this.confirm='True'
  }
  submit_confirm(){
    this.userData={
      username:this.usernameval,
      password:this.passwordgiven
    }
    this.restapi.getLoginPosts(this.userData, 'toke_pro/').then((result)=>{
      this.responseData=result;
      localStorage.setItem('token', this.responseData.access);
      this.updatepassword()

    })

  }
  othersource(){
    if(this.othersourceval == 'true'){

      this.othersourceval = 'false'
    }else{
      this.othersourceval = 'true'

    }
    this.userdata={
      othersource:this.othersourceval
    }
    this.restapi.getLoginPosts(this.userdata, 'updatesettings/'+'othersource/'+localStorage.getItem('company')+'/').then(data=>{
      this.responseData=data;
      this.dasboard.industries()
    })


  }
  updatepassword(){
    this.submitpass={
      old_password:this.passwordgiven,
      new_password:this.password_confirmval,
    }
    this.restapi.getLoginUpdate(this.submitpass, 'changepassword/').then(data=>{
      this.successstatus()
    })


  }
  deleteworker(pk){
    this.restapi.deleteuser('deleteuser/'+pk+'/').then(data=>{
      this.responseData=data;
      this.successstatus()
      this.getWorkersDuka()
    })

  }
  successstatus(){
    Swal.fire({

      icon: 'success',
      title: 'Success',
      showConfirmButton: false,
      timer: 1500
    })
   }

  showpassword(){
    if (this.show=="password"){
      this.show="text"
    }
    else{
      this.show="password"

    }
  }

  Edit(){
    this.status = 'Edit'

  }
  Done(){
    this.status = 'done'

  }

  changepassword(){
    this.passwordval="True"
    this.companydetailval="False"
    this.paymentval="False"
    this.confirm="False"
    this.addshopval="False"
    this.workersval="False"
  }
  changecompanydetails(){
    this.companydetailval="True"
    this.getdatadata()
    this.passwordval="False"
    this.paymentval="False"
    this.confirm="False"
    this.addshopval="False"
    this.workersval="False"
    this.settings="False"
  }

  addshop(){
    this.companydetailval="False"
    this.passwordval="False"
    this.addshopval="True"
    this.paymentval="False"
    this.confirm="False"
    this.workersval="False"
    this.settings="False"
    this.getDuka()

  }
  paymentsdetails(){

    this.companydetailval="False"
    this.passwordval="False"
    this.addshopval="False"
    this.confirm="False"
    this.paymentval="True"
    this.workersval="False"
    this.settings="False"
    this.getpayments()

  }

  wokerslist(){
    this.companydetailval="False"
    this.passwordval="False"
    this.addshopval="False"
    this.confirm="False"
    this.paymentval="False"
    this.workersval="True"
    this.settings="False"
    this.getWorkersDuka()

  }
  Settings(){
    this.companydetailval="False"
    this.passwordval="False"
    this.addshopval="False"
    this.confirm="False"
    this.paymentval="False"
    this.workersval="False"
    this.settings="True"
    this.getWorkersDuka()

  }
  editshop(a,b,c,d,e,f,g,h, pk){
    console.log('imewezeshwaaaaaa : '+pk)
    this.pk=pk
    this.edit="onedit"
    this.Simuval=a;
    this.Emailval=b;
    this.Accountval=c;
    this.CompanyVal=d;
    this.Tin_Noval=e;
    this.Kataval=f;
    this.Mkoaval=h;
    this.Wilayaval=g;
    // this.Mkoaval=i;
    // this.Accountval=j;
    // this.Accountval=b;
    // this.Accountval=b;

  }
  closeeditshop(){
    this.edit="False"
    this.Simuval=null;
    this.Emailval=null;
    this.Accountval=null;
    this.CompanyVal=null;
    this.Tin_Noval=null;
    this.Kataval=null;
    this.Mkoaval=null;
    this.Wilayaval=null;
  }
  min;
  hour;
  times
  sec;
  mwzi;
  moxt;
  userdata;
  d = new Date();
  returndata;
  add(simu, email, box1, box2, box3, box32, box4, box43){
    this.min = this.d.getMinutes();
    this.hour = this.d.getHours()
    this.sec = this.d.getSeconds()
    this.mwzi = this.d.getMonth()
    this.moxt = parseInt(this.mwzi) + 1
    this.times = this.d.getFullYear() + "-" + this.moxt + "-" + this.d.getDate() + "  " + this.hour + ":" + this.min + ":" + this.sec
    this.userdata={
      tarehe: this.times,
      user: this.Director,
      jina: '',
      name_of_the_bank: '',
      Account_no: box1,
      kipindi: '',
      kata: box32,
      Registration_no: '',
      wilaya: box4,
      service_officer: '',
      Tin_no: box3,
      mkoa: box43,
      Jinsia: '',
      Simu: simu,
      receipt_no:'',
      company: box2,
      Email: email,
      post_office: '',
      status: 'pending'
    };
    this.restapi.getLoginPosts(this.userdata, 'dukazote/'+this.Director+'/').then(data => {
      this.returndata = data;
      this.getDuka()

    });



  }
  addworker(simu, email, box1, box2, box3, box32, box4, box43){
    this.min = this.d.getMinutes();
    this.hour = this.d.getHours()
    this.sec = this.d.getSeconds()
    this.mwzi = this.d.getMonth()
    this.moxt = parseInt(this.mwzi) + 1
    this.times = this.d.getFullYear() + "-" + this.moxt + "-" + this.d.getDate() + "  " + this.hour + ":" + this.min + ":" + this.sec
    this.userdata={
      tarehe: this.times,
      user: this.Director,
      jina: '',
      name_of_the_bank: '',
      Account_no: box1,
      kipindi: '',
      kata: box32,
      Registration_no: '',
      wilaya: box4,
      service_officer: '',
      Tin_no: box3,
      mkoa: box43,
      Jinsia: '',
      Simu: simu,
      receipt_no:'',
      company: box2,
      Email: email,
      post_office: '',
      status: 'pending'
    };
    this.restapi.getLoginPosts(this.userdata, 'workersdukazote/'+this.Director+'/').then(data => {
      this.returndata = data;
      this.getWorkersDuka()

    });



  }

  change_company(box){
    localStorage.setItem('company', box);
    this.router.navigate(['/DukaMmilikiDashboard/Products'])
    this.dukaupdate.updatecompany()



  }


  getDuka() {
    this.restapi.getDukaZote(this.Director).then(data => {
      this.dukazote = data;

    });

  }
  Editdata(){
    this.userupdate={
      user: this.Director,
      jina: this.Nameval,
      Account_no: this.Accountval,
      kata: this.Kataval,
      wilaya: this.Wilayaval,
      Tin_no: this.Tin_Noval,
      mkoa: this.Mkoaval,
      Simu: this.Simuval,
      // company: this.CompanyVal,
      Email: this.Emailval,
      status: 'pending'


    }
    this.restapi.getLoginPosts(this.userupdate, 'getComanydata/'+this.usernameval+'/'+this.Director+'/'+this.pk+'/').then((result)=>{
      this.getDuka()
      this.successstatus()
    })

  }
  bucket(){
    if(this.bucketval == 'true'){

      this.bucketval = 'false'
    }else{
      this.bucketval = 'true'

    }
    this.userdata={
      bucket:this.bucketval
    }
    this.restapi.getLoginPosts(this.userdata, 'updatesettings/'+'bucket/'+localStorage.getItem('company')+'/').then(data=>{
      this.responseData=data;
    })
    // console.log('Waaaaaaasaaffiiiii')
  }
  industry(){
    if(this.Industryval == 'true'){

      this.Industryval = 'false'
    }else{
      this.Industryval = 'true'

    }
    this.userdata={
      industry:this.Industryval
    }
    this.restapi.getLoginPosts(this.userdata, 'updatesettings/'+'industry/'+localStorage.getItem('company')+'/').then(data=>{
      this.responseData=data;
      this.dasboard.industries()
    })

  }
  expiredate(){
    if(this.expiredateval == 'true'){

      this.expiredateval = 'false'
    }else{
      this.expiredateval = 'true'

    }
    this.userdata={
      expire:this.expiredateval
    }
    this.restapi.getLoginPosts(this.userdata, 'updatesettings/'+'expire/'+localStorage.getItem('company')+'/').then(data=>{
      this.responseData=data;
    })
    // console.log('Waaaaaaasaaffiiiii')
  }
  Editworkerdata(name, simu, account, regval, office, kata, wilaya, mkoa){
    // console.log('name : '+ name)
    // console.log('simu : '+ simu)
    // console.log('account : '+ account)
    // console.log('regval : '+ regval)
    // console.log('office : '+ office)
    // console.log('kata : '+ kata)
    // console.log('wilaya : '+ wilaya)
    // console.log('mkoa : '+ mkoa)

    this.userupdate={
      user: this.Director,
      jina: name,
      Account_no: account,
      kata: kata,
      wilaya: wilaya,
      Tin_no: regval,
      mkoa: mkoa,
      Simu:simu,
      // company: this.CompanyVal,
      Email: this.Emailval,

      status: 'pending'


    }
    this.restapi.getLoginPosts(this.userupdate, 'editworkersdata/'+this.usernameval+'/'+this.Director+'/'+this.pke+'/').then((result)=>{
      this.getDuka()
    })

  }
  EditWorkere(n){
    this.EditOffcer="True"

    this.Simuval=n.Simu;
    // this.Emailval=n.Email;
    this.Accountval=n.Account_no;
    this.RegVal=n.Registration_no;
    this.Tin_Noval=n.Tin_no;
    this.Kataval=n.kata;
    this.Mkoaval=n.mkoa;
    this.Wilayaval=n.wilaya;
    this.Nameval=n.jina;
    this.pke=n.pk;
    console.log(this.pke)

  }
  closeeditworker(){
    this.EditOffcer="False"

  }

  getWorkersDuka() {
    this.restapi.getWorkersDukaZote(this.Director).then(data => {
      this.dukaworkers = data;

    });

  }

  submitedit(phone, account,tin, street, district, mkoaz, Email, physicaladd ){
    console.log("phone aaaaaa :  "+ phone)
    console.log("account aaaaaa :  "+ account)
    console.log("tin aaaaaa :  "+ tin)
    console.log("Wilaya aaaaaa :  "+ district)
    console.log("Email aaaaaa :  "+ Email)
    // this.dataput={
    //   user: this.Director,
    //   jina: 'thisNameval',
    //   Account_no: 'account',
    //   kata: 'street',
    //   wilaya: 'district',
    //   Tin_no: 'tin',
    //   Simu: 'phone',
    //   Email: 'Email',
    //   pk: this.pk,


    // }
    this.dataput={
      user: this.Director,
      jina: this.Nameval,
      Account_no: account,
      kata: street,
      wilaya: district,
      Tin_no: tin,
      Simu: phone,
      Email: Email,
      mkoa: mkoaz,
      pk: this.pk,
      // phyis: physicaladd,

    }
   this.restapi.getLoginPosts(this.dataput, 'getComanydata/'+this.usernameval+'/'+this.Director+'/'+this.pk+'/').then(data=>{
    this.successstatus()
   })
  }

}
