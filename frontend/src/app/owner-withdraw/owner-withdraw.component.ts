import { Component, OnInit } from '@angular/core';
import { RestframeworkService } from '../apiservice/restframework.service';
import { MmilikiDetailsComponent } from '../mmiliki-details/mmiliki-details.component';

@Component({
  selector: 'app-owner-withdraw',
  templateUrl: './owner-withdraw.component.html',
  styleUrls: ['./owner-withdraw.component.css']
})
export class OwnerWithdrawComponent implements OnInit {
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

  constructor(public restframework:RestframeworkService, public nyumba:MmilikiDetailsComponent) {
    this.getvalues()
   }
   getvalues(){

    this.restframework.getOwnerWithdraw().then(data=>{
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

  ngOnInit() {
  }

  gonj(){
    this.restframework.PostOwnerWithdraw(this.Create, 'OwnerWithdraw/').then((result) => {
      this.responseData = result;
      // alert(this.userData.username)
      localStorage.setItem('Adminwithdraw', this.responseData);
     //  localStorage.setItem('user', this.userData.Username);
     //  this.UserCreate();
      this.getvalues();
      this.nyumba.getValue()
      this.clean();
      // this.getdata();
      // this.nyumba.getvalue();
      // this.nyumbadetails.getval();

     
      }, (err) => {
        alert('error');
 
      });
  }
  clean(){
    this.Create.Amount = null;
    this.Create.Phone = null;
    this.Create.Email = null;

  }

}
