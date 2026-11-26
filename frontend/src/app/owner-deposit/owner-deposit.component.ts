import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RestframeworkService } from '../apiservice/restframework.service';
import { MmilikiDetailsComponent } from '../mmiliki-details/mmiliki-details.component';

@Component({
    selector: 'app-owner-deposit',
    templateUrl: './owner-deposit.component.html',
    styleUrls: ['./owner-deposit.component.css'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class OwnerDepositComponent {
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

  constructor(public restframework:RestframeworkService, public nyumba:MmilikiDetailsComponent) {
    this.getvalue();
   }
   getvalue(){

    this.restframework.getOwnerDeposit().then(data=>{
      
      this.all = data;
    })
    this.restframework.getLists().then(data=>{
      this.id = localStorage.getItem('mmilikiid')
      this.officer = localStorage.getItem('lservice_officer')
      this.alle = data;
      for(const m of this.alle){
        if(String(m.pk) === this.id){
          this.Create.user = m.Username;
          this.Create.Phone = m.Simu;
          this.Create.service_officer = this.officer
          

        }

      }
    })
   }


  gonj(){

    this.restframework.PostOwnerDeposit(this.Create, 'OwnerDeposit/').then((result) => {
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
      this.nyumba.getValue();
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
