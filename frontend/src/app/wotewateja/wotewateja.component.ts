import { Component, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { RestframeworkService } from '../apiservice/restframework.service';
import { Router } from '@angular/router';
import {ActivatedRoute} from '@angular/router';
import { LowlayerComponent } from '../lowlayer/lowlayer.component';
@Component({
    selector: 'app-wotewateja',
    templateUrl: './wotewateja.component.html',
    styleUrls: ['./wotewateja.component.css'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class WotewatejaComponent {
  users;
  selectedData;
  mtu;
  filtertext;
  id = 0;
  ik;
  numbe;

  constructor( public low:LowlayerComponent, private route: ActivatedRoute, public restframework: RestframeworkService, public router: Router) {

    // this.logout()
    this.mtu = localStorage.getItem('user')
    this.getUsers();
    this.low.most();

  }

  wow(){
    this.low.mop(); 
    this.low.most(); 

  }


  logout(){
    var timeout;
    var temp=this;
    
    document.onmousemove = function(){
      clearTimeout(timeout);
      timeout = setTimeout(function(){
        localStorage.removeItem('userData')
        localStorage.removeItem('user')
        temp.router.navigate(['login'])

      }, 5000);
}
    document.onkeypress = function(){
      clearTimeout(timeout);
      timeout = setTimeout(function(){
        localStorage.removeItem('userData')
        localStorage.removeItem('user')
        temp.router.navigate(['login'])
      }, 5000);

  }

  }

  getUsers() {
    this.restframework.getLists().then(data => {
      this.users = data;
      
      for(const m of this.users){
       

        
        if(m.Username){
          this.numbe=this.users.indexOf(m) + 1
          
          

          // this.ik = this.id++
        


        }

      }
      
    });

  }

  onselected(form) {
    localStorage.removeItem('id');
    this.selectedData = form;
    localStorage.setItem('id', this.selectedData.pk);
    this.router.navigate(['/Admindash/Details/Mkopoadmin']);
  // console.log(this.selectedData.pk );



  }




  printe(){
    window.print();
  }


  




}
