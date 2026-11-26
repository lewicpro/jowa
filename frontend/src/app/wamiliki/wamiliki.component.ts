import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RestframeworkService } from '../apiservice/restframework.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-wamiliki',
    templateUrl: './wamiliki.component.html',
    styleUrls: ['./wamiliki.component.css'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class WamilikiComponent{
  users;
  selectedData;

  constructor( private route: ActivatedRoute, public restframework: RestframeworkService, public router: Router) {
    this.getUsers();

  }




  getUsers() {
    this.restframework.getLists().then(data => {
      this.users = data;
    });

  }

  onselected(form) {
    localStorage.removeItem('mmilikiid');
    localStorage.removeItem('houseOwner');
    this.selectedData = form;
    // console.log(form)
    localStorage.setItem('mmilikiid', this.selectedData.pk);
    localStorage.setItem('houseOwner', this.selectedData.House_Owner);
    // console.log(localStorage.getItem('id'))
    this.router.navigate(['/Nyumba-dash/MmilikiDetails/OwnerDeposit']);
  // console.log(this.selectedData.pk );



  }}
