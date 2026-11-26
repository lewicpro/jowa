import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { RestframeworkService } from '../apiservice/restframework.service';

@Component({
    selector: 'app-owner-application',
    templateUrl: './owner-application.component.html',
    styleUrls: ['./owner-application.component.css'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class OwnerApplicationComponent implements OnInit {
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
    this.restframework.getOwnerApplicationstats().then(data=>{
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
