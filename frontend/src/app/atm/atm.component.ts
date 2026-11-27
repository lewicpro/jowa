import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { RestframeworkService } from '../apiservice/restframework.service';

@Component({
    selector: 'app-atm',
    templateUrl: './atm.component.html',
    styleUrls: ['./atm.component.css'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class AtmComponent implements OnInit {
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
    this.restframework.getAtmstats().then(data=>{
      this.alls = data;
      for(const n of this.alls){
        this.imageUrl = n.Atm;
        
        
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
