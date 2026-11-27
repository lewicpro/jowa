import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { RestframeworkService } from '../apiservice/restframework.service';

@Component({
    selector: 'app-editaccount',
    templateUrl: './editaccount.component.html',
    styleUrls: ['./editaccount.component.css'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class EditaccountComponent implements OnInit {
  // the customer being edited (empty until it comes from the backend)
  userData: any = {};
  saving = false;

  constructor(public restframework: RestframeworkService) { }

  // get the customer chosen in "Wateja wote" (its pk is saved as 'id')
  ngOnInit() {
    const id = localStorage.getItem('id');
    if (id == null) {
      return;
    }
    this.restframework.getListsTotal(id).then((data: any) => {
      if (data != null && data[0] != null) {
        this.userData = data[0];
      }
    });
  }

  // "Tuma" was clicked: save the changes of the customer
  Register() {
    const id = localStorage.getItem('id');
    if (id == null) {
      alert('Chagua mteja kwanza kwenye orodha ya wateja.');
      return;
    }
    if (this.saving) {
      return;
    }

    // only the fields of this form are sent
    const user: any = this.userData;
    const changes = {
      Username: user.Username,
      jina: user.jina,
      Simu: user.Simu,
      file_no: user.file_no,
      TSD: user.TSD,
      ofisi: user.ofisi,
      check: user.check,   // "Check No" (saved in the check_no column)
      Account_no: user.Account_no,
      pin: user.pin,
      expire: user.expire,
      csv: user.csv,
      kata: user.kata,
      wilaya: user.wilaya,
      mkoa: user.mkoa
    };

    this.saving = true;
    this.restframework.PostMmilikiid(changes, 'MmilikiUpdate/' + id + '/').then(result => {
      this.saving = false;
      this.userData = result;
      alert('Taarifa za mteja zimehifadhiwa.');
    }, err => {
      this.saving = false;
      alert('Imeshindikana kuhifadhi. Jaribu tena.');
    });
  }

  onfileSelected() {

  }

}
