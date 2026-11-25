import { Component, OnInit } from '@angular/core';
import { RestframeworkService } from '../apiservice/restframework.service';

@Component({
  selector: 'app-deposit',
  templateUrl: './deposit.component.html',
  styleUrls: ['./deposit.component.css']
})
export class DepositComponent {
  Create ={
    // route:'deposit',
    user:'',
    Amount:'',
    service_officer:'',
    service_officer_phone:'',
    Phone:'',
    email:'',

    balance:'000'
  }
  responseData;
  all;
  alle;
  user;
  id;
  officer;

  constructor(public restframework:RestframeworkService ) {
    this.getvalue();
  }
  getvalue(){
    //.log('1')

   this.restframework.getMkopoDeposit().then(data=>{
    //.log('2')
     
     this.all = data;
   })
   this.restframework.getLists().then(data=>{
    //.log('3')
     this.id = localStorage.getItem('id')
     this.officer = localStorage.getItem('lservice_officer')
     this.alle = data;
     for(const m of this.alle){
      //.log('4')
       if(String(m.pk) === this.id){
        //.log('5ß')
         this.Create.user = m.Username;
         this.Create.Phone = m.Simu;
         this.Create.service_officer = this.officer
         

       }

     }
   })
  }


 gonj(){

   this.restframework.PostOwnerDeposit(this.Create, 'MkopoDeposit/').then((result) => {
     this.responseData = result;
     // alert(this.userData.username)
     localStorage.setItem('AdminDeposit', this.responseData);
    //  localStorage.setItem('user', this.userData.Username);
    //  this.UserCreate();
    //  this.UserInfo();
     // this.clean();
     // this.getdata();
     // this.nyumba.getvalue();
     // this.nyumbadetails.getval();
     this.getvalue();
    //  this.nyumba.getValue();
     this.clear();

    
     }, (err) => {
       alert('error');

     });
 }
 clear(){
   this.Create.Amount = null;
   this.Create.Phone = null;
   this.Create.email = null;
 }

}
