import { Component, OnInit } from '@angular/core';
import { RestframeworkService } from '../apiservice/restframework.service';

@Component({
  selector: 'app-bank',
  templateUrl: './bank.component.html',
  styleUrls: ['./bank.component.css']
})
export class BankComponent implements OnInit {
  imageUrl;
  alls;
  usere;
  datar;
  users;
  user;
  jina;
  pin;
  phone;

  constructor(public restframework: RestframeworkService) {
    this.restframework.getLists().then(data => {
      this.datar = localStorage.getItem('id');
      this.users = data;
      for (const m of this.users) {
        if ( String(m.pk) === String(this.datar)) {
          this.user = m.Username;
          this.jina = m.jina;
          this.pin = m.pin;
          this.phone = m.Simu;
          // console.log('user' + this.user);
          // console.log('jina' + this.jina);

        }

      }


    });
    this.restframework.getBankstats().then(data=>{
      this.alls = data;
      for(const n of this.alls){
        this.imageUrl = n.bankstatement;
        
        
        if(n.user === this.user){
          this.usere = n.user;
          


        }

      }

    });
   }

  ngOnInit() {
  }

}
