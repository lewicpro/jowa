import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { RestframeworkService } from '../apiservice/restframework.service';
import { NgProgress } from 'ngx-progressbar';
@Component({
    selector: 'app-nyumba-mkataba',
    templateUrl: './nyumba-mkataba.component.html',
    styleUrls: ['./nyumba-mkataba.component.css'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class NyumbaMkatabaComponent implements OnInit {
  imageUrl;
  alls;
  usere;
  datar;
  users;
  user;
  jina;
  pin;
  phone;

  constructor(public restframework:RestframeworkService) {
    
    this.getvalue()
   }

  ngOnInit() {}
  getvalue(){

    console.log('nimefika mbabaa')
        this.restframework.getWapangajiLists().then(data => {
      this.datar = localStorage.getItem('mpangajiid');
      this.users = data;
      for (const m of this.users) {
        
        if ( String(m.pk) === String(this.datar)) {
          
          this.user = m.name;
          this.jina = m.jina;
          this.pin = m.pin;
          this.phone = m.Simu;
          // console.log('user' + this.user);
          // console.log('jina' + this.jina);

        }

      }

      
    });
    
    this.restframework.getMkatabastats().then(data=>{
      // console.log('moooo')
      this.alls = data;

      
      for(const n of this.alls){
        this.imageUrl = n.mkataba;
        // console.log('user'+ n.user)
        
        
        if(n.user === this.user){
          this.usere = n.user;
          // console.log('nipo 2')
          
          


        }

      }

    });
  }
}
