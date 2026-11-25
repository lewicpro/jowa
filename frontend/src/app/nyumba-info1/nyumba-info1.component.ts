import { Component, OnInit } from '@angular/core';
import { RestframeworkService } from '../apiservice/restframework.service';

@Component({
  selector: 'app-nyumba-info1',
  templateUrl: './nyumba-info1.component.html',
  styleUrls: ['./nyumba-info1.component.css']
})
export class NyumbaInfo1Component implements OnInit {
  malip;
  mona;
  datar;
  users;

  constructor(public restframework: RestframeworkService) {
    this.restframework.UserInfo1().then(data => {
      this.malip = data;
      this.datar = localStorage.getItem('nyumbaid')
      
      for (const m of this.malip){
        // console.log('misemo;'+m.nyumba)
        
        if (m.nyumba === this.datar){
         
          this.mona = m.nyumba


        }


      }
    });
  }

  ngOnInit() {
  }

}
