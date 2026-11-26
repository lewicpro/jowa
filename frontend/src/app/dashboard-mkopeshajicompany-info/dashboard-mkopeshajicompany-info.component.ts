import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { RestframeworkService } from '../apiservice/restframework.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-dashboard-mkopeshajicompany-info',
    templateUrl: './dashboard-mkopeshajicompany-info.component.html',
    styleUrls: ['./dashboard-mkopeshajicompany-info.component.css'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class DashboardMkopeshajicompanyInfoComponent implements OnInit {
  miezidata;
  miezitoadata;

  constructor(public restapi:RestframeworkService, public router:Router) {
    this.restapi.getMieziMicrocredit().then(data=>{
      this.miezidata = data;
    })
    this.restapi.getMieziToaMicrocredit().then(datatoa=>{
      this.miezitoadata = datatoa;
      for(const m of this.miezitoadata){


      }
    })
   }

  ngOnInit() {
  }


  onclicked(form){
    this.router.navigate(['/Sub/Info'])

  }
  onclickedtoa(form){
    this.router.navigate(['/Sub/InfoToa'])

  }

}
