import { Component, OnInit } from '@angular/core';
import { RestframeworkService } from '../apiservice/restframework.service';

@Component({
  selector: 'app-personal-toa',
  templateUrl: './personal-toa.component.html',
  styleUrls: ['./personal-toa.component.css']
})
export class PersonalToaComponent implements OnInit {

  malip;
  mona;
  datar;
  users;
  malipz;
  malipzo;
  datara;

  mna;

  constructor(public restframework: RestframeworkService) {
    this.restframework.getLists().then(data => {
      this.malip = data;
      this.datar = localStorage.getItem('id')
      
      for (const m of this.malip){
        // console.log('misemo;'+m.nyumba)
        
        if (String(m.pk) === String(this.datar)){
         
          this.mona = m.Username
          // console.log( m.Username)


        }


      }
    });
    this.restframework.getPersonalToa().then(data => {
      this.malipz = data;
  

      
    });
    this.restframework.getPersonalWeka().then(data => {
      this.malipzo = data;
  

      
    });
   }

  ngOnInit() {
  }

}
