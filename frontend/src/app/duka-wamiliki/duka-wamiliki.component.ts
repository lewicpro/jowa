import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RestframeworkService } from '../apiservice/restframework.service';

@Component({
  selector: 'app-duka-wamiliki',
  templateUrl: './duka-wamiliki.component.html',
  styleUrls: ['./duka-wamiliki.component.css']
})
export class DukaWamilikiComponent {
  users;
  selectedData;

  constructor( private route: ActivatedRoute, public restframework: RestframeworkService, public router: Router) {
    this.getUsers();

  }




  getUsers() {
    this.restframework.getDukaWamilikiLists().then(data => {
      this.users = data;
    });

  }

  onselected(form) {
    localStorage.removeItem('DirectorDuka');
    localStorage.removeItem('DirectorDuka');
    localStorage.removeItem('company');
    // localStorage.removeItem('DirectorDuka');
    this.selectedData = form;
    // console.log(form)
    localStorage.setItem('company', this.selectedData.company);
    localStorage.setItem('DirectorDukaid', this.selectedData.pk);
    localStorage.setItem('DirectorDuka', this.selectedData.user);
    // console.log(localStorage.getItem('id'))
    this.router.navigate(['/duka/DukaMmilikiDashboard/Sales']);
  // console.log(this.selectedData.pk );



  }}
