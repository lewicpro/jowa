import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { RestframeworkService } from '../apiservice/restframework.service';

@Component({
    selector: 'app-nyumba-front-details',
    templateUrl: './nyumba-front-details.component.html',
    styleUrls: ['./nyumba-front-details.component.css'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class NyumbaFrontDetailsComponent implements OnInit {
  det;
  pk;
  photo1;
  photo2;
  photo3;

  photo4;
  constructor(public restframework:RestframeworkService) { 
    this.getdata()
  }

  getdata(){
    this.photo1 = null;
    this.photo2 = null;
    this.photo3 = null;
    this.photo4 = null;
    this.pk = localStorage.getItem('pich')
    this.restframework.getVyumba().then(dates=>{
      this.det = dates;
      //.log('imefika hapaa1')
      for(const b of this.det){
        //.log('imefika hapaa2')
        if(String(b.pk) === String(this.pk)){

          this.photo1 = b.photo;
          this.photo2 = b.photo2;
          this.photo3 = b.photo3;
          this.photo4 = b.photo4;

        }
      }
    })
  }

  ngOnInit() {
  }

}
