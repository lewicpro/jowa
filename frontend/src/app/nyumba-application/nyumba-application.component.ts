import { Component, OnInit } from '@angular/core';
import { RestframeworkService } from '../apiservice/restframework.service';

@Component({
  selector: 'app-nyumba-application',
  templateUrl: './nyumba-application.component.html',
  styleUrls: ['./nyumba-application.component.css']
})
export class NyumbaApplicationComponent implements OnInit {

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
    this.restframework.getapplicationstats().then(data=>{
      this.alls = data;
      
      for(const n of this.alls){
        this.imageUrl = n.application_form;
        // console.log('user: '+ n.user)
        
        
        if(n.user === this.user){
          this.usere = n.user;
          // console.log('nipo 2')
          
          


        }

      }

    });
   }

  ngOnInit() {}
}
