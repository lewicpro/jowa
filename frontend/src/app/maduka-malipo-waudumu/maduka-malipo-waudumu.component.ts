import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { RestframeworkService } from '../apiservice/restframework.service';

@Component({
    selector: 'app-maduka-malipo-waudumu',
    templateUrl: './maduka-malipo-waudumu.component.html',
    styleUrls: ['./maduka-malipo-waudumu.component.css'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class MadukaMalipoWaudumuComponent implements OnInit {
  malipo;
  users;

  constructor(public restframework: RestframeworkService) {
    // console.log('hapaaa')
    // this.restframework.getPayments2().then(data => {
    //   this.malipo = data;
    // });
    this.restframework.getMalipoDukaLists().then(datas => {
      this.malipo = datas;
    });
  }

  ngOnInit() {
  }

}
