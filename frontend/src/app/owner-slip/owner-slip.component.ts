import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { RestframeworkService } from '../apiservice/restframework.service';

@Component({
    selector: 'app-owner-slip',
    templateUrl: './owner-slip.component.html',
    styleUrls: ['./owner-slip.component.css'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class OwnerSlipComponent implements OnInit {
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
      this.datar = localStorage.getItem('mmilikiid');
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
    this.restframework.getOwnerSlipstats().then(data=>{
      this.alls = data;
      for(const n of this.alls){
        this.imageUrl = n.idcard;
        
        
        if(n.user === this.user){
          this.usere = n.user;
          


        }

      }

    });
   }

  ngOnInit() {
  }}

