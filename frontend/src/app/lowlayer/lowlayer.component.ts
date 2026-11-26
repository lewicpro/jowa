import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { RestframeworkService } from '../apiservice/restframework.service';

@Component({
    selector: 'app-lowlayer',
    templateUrl: './lowlayer.component.html',
    styleUrls: ['./lowlayer.component.css'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class LowlayerComponent implements OnInit {
  monam;
  PostAuth;
  datagiven;
  all;
  stored;
  dataid;

  constructor(public router: Router, public restapi:RestframeworkService) {
    // this.mona=localStorage.getItem('userData')
    this.stored= localStorage.getItem('userData')
    this.most();
    
   
  }

  most(){
    
    if (localStorage.getItem('userData')) {
      this.monam = null;
      this.monam = 'Logout'
      //.log('pulled logout')
    }
    else {
      this.monam = null;
      this.monam ='Login'
      //.log('pulled login')
    }
  }

  execute(){


    this.restapi.wapangajiPos1(this.PostAuth, 'LoginAuth/'+ this.dataid + '/').then((results)=>{
   
      this.datagiven =results;
  }, (err) => {
    alert('failed logout');

  })
      localStorage.removeItem('userData')
      localStorage.removeItem('company_username')
      localStorage.removeItem('company_prog')
      this.router.navigate(['login']);
      // this.most();
      // this.mona = 'Login';
    
   
  }

  ngOnInit() {
  }

  mop(){
 
  }

}
