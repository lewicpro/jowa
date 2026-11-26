import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { RestframeworkService } from '../apiservice/restframework.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-infos',
    templateUrl: './infos.component.html',
    styleUrls: ['./infos.component.css'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class InfosComponent implements OnInit {
  malipo;
  users;
  selectedData;

  constructor(public restframework: RestframeworkService, public router:Router) {
    this.restframework.getInfo().then(data => {
      this.malipo = data;
    });
    this.restframework.getMieziToa().then(datas => {
      this.users = datas;
    });
  }

  onselect(form){
    localStorage.removeItem('mwaka');
    this.selectedData = form;
    localStorage.setItem( 'mwaka', this.selectedData.user)
    this.router.navigate(['/Admindash/Information'])
    //.log('mwaka ni : ' +this.selectedData.user)
  }

  onclicked(form){
    localStorage.removeItem('mwaka');
    this.selectedData = form;
    localStorage.setItem( 'mwaka', this.selectedData.user)
    this.router.navigate(['/Admindash/KopeshaDeteils'])
    //.log('mwaka ni : ' +this.selectedData.user)
  }

  ngOnInit() {
  }

}
