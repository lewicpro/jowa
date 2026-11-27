import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { RestframeworkService } from '../apiservice/restframework.service';

@Component({
    selector: 'app-bank',
    templateUrl: './bank.component.html',
    styleUrls: ['./bank.component.css'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
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

  // is this document for our customer?
  // old uploads were saved as "Masatu" or "lewis masatu", so we check both, small letters
  isMine(m) {
    if (m.user == null) {
      return false;
    }
    const name = String(m.user).toLowerCase().trim();

    if (this.user != null && name === String(this.user).toLowerCase().trim()) {
      return true;
    }
    if (this.jina != null && name === String(this.jina).toLowerCase().trim()) {
      return true;
    }
    return false;
  }

  ngOnInit() {
  }

}
