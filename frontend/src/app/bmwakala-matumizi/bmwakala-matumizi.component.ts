import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { LowlayerComponent } from '../lowlayer/lowlayer.component';
import { ActivatedRoute, Router } from '@angular/router';
import { RestframeworkService } from '../apiservice/restframework.service';

@Component({
    selector: 'app-bmwakala-matumizi',
    templateUrl: './bmwakala-matumizi.component.html',
    styleUrls: ['./bmwakala-matumizi.component.css'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class BmwakalaMatumiziComponent {
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
    this.restframework.getWakalaWorkersLists().then(data => {
      this.users = data
      
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
    console.log('imepita 1')
    const printContent = document.getElementById("componentID");
    console.log('imepita 2')
    const WindowPrt = window.open('', '', 'left=0,top=0,width=900,height=900,toolbar=0,scrollbars=0,status=0');
    console.log('imepita 3')
    WindowPrt.document.write('<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">');
    WindowPrt.document.write(printContent.innerHTML);
    console.log('imepita 4')
    WindowPrt.document.close();
    console.log('imepita 5')
    WindowPrt.focus();
    console.log('imepita 6')
    WindowPrt.print();
    console.log('imepita 7')
    WindowPrt.close();
    console.log('imepita 8')
  }


  




}
