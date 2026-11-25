import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RestframeworkService } from '../apiservice/restframework.service';

@Component({
  selector: 'app-vyumba-wazi',
  templateUrl: './vyumba-wazi.component.html',
  styleUrls: ['./vyumba-wazi.component.css']
})
export class VyumbaWaziComponent {
  users;
  mbopa;
  selectedData;
  nyumbas;
  filtertext;
  name;
  reqid: String;

  constructor( private route: ActivatedRoute, public restframework: RestframeworkService, public router: Router) {
    this.getUsers();
    this.mbopa = localStorage.getItem('nyumbaid') 
    
    this.restframework.getNyumbaLists().then(doti =>{
      this.nyumbas = doti;
      for(const n of this.nyumbas){
        // console.log(n.pk)
        if(String(n.pk) === String(this.mbopa)){

          this.reqid = n.pk
          this.name = n.name;
          // console.log(this.reqid)

        }
      }



    })

  }




  getUsers() {
    this.restframework.getVyumba().then(data => {
      this.users = data;
    });

  }

  ongeza(){
    this.router.navigate(['/Nyumba-dash/Details/OngezaChumba'])
  }

  onselected(form) {
    localStorage.removeItem('id');
    this.selectedData = form;
    localStorage.setItem('id', this.selectedData.pk);
    // console.log(localStorage.getItem('id'))
    this.router.navigate(['Nyumba-dash/Details']);
  // console.log(this.selectedData.pk );



  }

}
