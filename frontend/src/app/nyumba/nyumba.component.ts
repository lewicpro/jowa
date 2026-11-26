import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute, Router } from '../../../node_modules/@angular/router';
import { RestframeworkService } from '../apiservice/restframework.service';

@Component({
    selector: 'app-nyumba',
    templateUrl: './nyumba.component.html',
    styleUrls: ['./nyumba.component.css'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class NyumbaComponent {
  users;
  selectedData;
  filtertext;

  constructor( private route: ActivatedRoute, public restframework: RestframeworkService, public router: Router) {
    this.getUsers();

  }




  getUsers() {
    this.restframework.getNyumbaLists().then(data => {
      this.users = data;
    });

  }

  onselected(form) {
    // console.log(form)
    localStorage.removeItem('nyumbaid');
    localStorage.removeItem('houseOwner');
    localStorage.removeItem('nyumbaname');
    this.selectedData = form;
    // console.log(form)
    localStorage.setItem('nyumbaid', this.selectedData.pk);
    localStorage.setItem('nyumbaname', this.selectedData.name);
    localStorage.setItem('houseOwner', this.selectedData.House_Owner);
    // console.log(localStorage.getItem('id'))
    this.router.navigate(['Nyumba-dash/Details/wapangaji']);
  // console.log(this.selectedData.pk );



  }

}
