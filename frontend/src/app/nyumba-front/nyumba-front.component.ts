import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { RestframeworkService } from '../apiservice/restframework.service';
import { NyumbaFrontDetailsComponent } from '../nyumba-front-details/nyumba-front-details.component';

@Component({
    selector: 'app-nyumba-front',
    templateUrl: './nyumba-front.component.html',
    // styleUrls: ['./nyumba-front.component.css'],
    styles: [`
     ::ng-deep .carousel-inner{
      overflow:unset;
      height: 200px;
      width:100%;
  }

  `],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class NyumbaFrontComponent implements OnInit {
  det;
 
  constructor(private router:Router, public restframework:RestframeworkService, public servevyumba:NyumbaFrontDetailsComponent) {
    this.restframework.getVyumba().then(date=>{
      this.det = date;
    })
   }

  ngOnInit() {
  }

  check(m){
    //.log(m.pk)
    this.servevyumba.getdata();

    localStorage.removeItem('pich')
    localStorage.setItem('pich', m.pk)
    this.servevyumba.getdata();
    this.router.navigate(['/Chumba-Details'])
  }

}
