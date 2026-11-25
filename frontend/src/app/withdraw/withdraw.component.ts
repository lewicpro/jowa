import { Component, OnInit } from '@angular/core';
import { RestframeworkService } from '../apiservice/restframework.service';

@Component({
  selector: 'app-withdraw',
  templateUrl: './withdraw.component.html',
  styleUrls: ['./withdraw.component.css']
})
export class WithdrawComponent implements OnInit {
  all;
  responseData;
  Create={
    user:'',
    Amount:'',
    service_officer:'',
    service_officer_phone:'',
    Phone:'',
    Email:'',

    balance:'000'
  }
  alle;
  officer;
  id;
  Balance;

  constructor(public restframework:RestframeworkService) { 
    this.getvalues()
  }
  getvalues(){

   this.restframework.getMkopoWithdraw().then(data=>{
     this.all = data;
   })

   this.restframework.getLists().then(data=>{
     this.id = localStorage.getItem('id')
     this.officer = localStorage.getItem('lservice_officer')
     this.alle = data;
     for(const m of this.alle){
       if(String(m.pk) === this.id){
         this.Create.user = m.Username;
         this.Create.Phone = m.Simu;
         this.Create.service_officer = this.officer,
         this.Balance = m.Balance
         

       }

     }
   })
  }

 ngOnInit() {
 }

 gonj(){
   if(this.Create.Amount < this.Balance){
    this.restframework.PostOwnerWithdraw(this.Create, 'MkopoWithdraw/').then((result) => {
      this.responseData = result;
      // alert(this.userData.username)
      localStorage.setItem('Adminwithdraw', this.responseData);
     //  localStorage.setItem('user', this.userData.Username);
     //  this.UserCreate();
      this.getvalues();
     //  this.nyumba.getValue()
      this.clean();
      // this.getdata();
      // this.nyumba.getvalue();
      // this.nyumbadetails.getval();
 
     
      }, (err) => {
        alert('error');
 
      });

   }
   
 }
 clean(){
   this.Create.Amount = null;
   this.Create.Phone = null;
   this.Create.Email = null;

 }

}

