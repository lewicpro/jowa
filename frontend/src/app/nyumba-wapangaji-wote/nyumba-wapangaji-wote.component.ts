import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RestframeworkService } from '../apiservice/restframework.service';

@Component({
  selector: 'app-nyumba-wapangaji-wote',
  templateUrl: './nyumba-wapangaji-wote.component.html',
  styleUrls: ['./nyumba-wapangaji-wote.component.css']
})
export class NyumbaWapangajiWoteComponent implements OnInit {
  users;
  dats;
  selectedData;
  nyumbaid;

  constructor( private route: ActivatedRoute, public restframework: RestframeworkService, public router: Router) {
    this.restframework.getWapangajiLists().then(data => {
      this.users = data;
   
      for(const m of this.users){
     
 
        if(String(m.nyumbaid)){
          if(m.status === 'clean'){
            this.nyumbaid = m.nyumbaid;


          }

        }
      }
    });

  }



 ngOnInit(){}
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
  
