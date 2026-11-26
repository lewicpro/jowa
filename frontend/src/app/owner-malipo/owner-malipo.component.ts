import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RestframeworkService } from '../apiservice/restframework.service';

@Component({
    selector: 'app-owner-malipo',
    templateUrl: './owner-malipo.component.html',
    styleUrls: ['./owner-malipo.component.css'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class OwnerMalipoComponent {
  malipo;
  users;
  owner;
  officer;
  alle;
  id;
  service_officer;
  Phone;
  nyumbaid;
  bak;

  constructor(public restframework: RestframeworkService) {
    this.restframework.getLists().then(data=>{
      this.id = localStorage.getItem('mmilikiid')
      this.officer = localStorage.getItem('lservice_officer')
      this.alle = data;
      for(const m of this.alle){
        if(String(m.pk) === this.id){
          //.log('passes here')
          this.owner= m.Username;
          this.Phone = m.Simu;
          this.service_officer = this.officer
          

        }

      }
    })
   

    this.restframework.getWapangajiLists().then(data => {
      this.users = data;
      
      for(const m of this.users){
     
 
        if(String(m.nyumbaid) ){
          if(m.status === 'clean'){
            this.nyumbaid = m.nyumbaid;
            this.bak = parseInt(m.baki)


          }

        }
      }
    });

  
  }

  ngOnInit() {
  }

}
