import { Component } from '@angular/core';
import { ActivatedRoute, Route, Router } from '../../../node_modules/@angular/router';
import { RestframeworkService } from '../apiservice/restframework.service';

@Component({
  selector: 'app-wapangaji',
  templateUrl: './wapangaji.component.html',
  styleUrls: ['./wapangaji.component.css']
})
export class WapangajiComponent{
  users;
  dats;
  selectedData;
  nyumbaid;
  filtertext;

  constructor( private route: ActivatedRoute, public restframework: RestframeworkService, public router: Router) {
    this.restframework.getSingWapangajiLists(localStorage.getItem('nyumbaid')).then(data => {
      this.users = data;
      this.dats = localStorage.getItem('nyumbaid')
      for(const m of this.users){
     
 
        if(String(m.nyumbaid) === String(this.dats) ){
          if(m.status === 'clean'){
            this.nyumbaid = m.nyumbaid;


          }

        }
      }
    });

  }




  onselected(form) {
    localStorage.removeItem('mpangajiid');
    // this.selectedData = form;
    // localStorage.setItem('id', this.selectedData.pk);
    // console.log(localStorage.getItem('mpangajiid'))
    localStorage.setItem('mpangajiid', form.pk)
    this.router.navigate(['Nyumba-dash/personalDetails/Personali-details']);
  // console.log(this.selectedData.pk );



  }


  onselecte(){
    this.router.navigate(['Nyumb-dash/Details'])
  }

}

