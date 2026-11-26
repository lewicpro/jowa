import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { RestframeworkService } from '../apiservice/restframework.service';

@Component({
    selector: 'app-nyumba-identity',
    templateUrl: './nyumba-identity.component.html',
    styleUrls: ['./nyumba-identity.component.css'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class NyumbaIdentityComponent implements OnInit {
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
    
   }
   getval(){
     alert('momomoo')
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
    this.restframework.getkutambulishostats().then(data=>{
      this.alls = data;
      
      for(const n of this.alls){
        this.imageUrl = n.kitambulisho;
        // console.log('user'+ n.user)
        
        
        if(n.user === this.user){
          this.usere = n.user;
          // console.log('nipo 2')
          
          


        }

      }

    });


   }

  ngOnInit() {}
}

