import { Component, OnInit } from '@angular/core';
import { LowlayerComponent } from '../lowlayer/lowlayer.component';
import { ActivatedRoute, Router } from '@angular/router';
import { RestframeworkService } from '../apiservice/restframework.service';

@Component({
  selector: 'app-maduka-yote',
  templateUrl: './maduka-yote.component.html',
  styleUrls: ['./maduka-yote.component.css']
})
export class MadukaYoteComponent {
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
    this.restframework.getMadukaYote().then(data => {
      this.users = data;
      
    });

  }

  onselected(form) {
    localStorage.removeItem('duka');
    localStorage.removeItem('company');
    // this.selectedData = form;
    localStorage.setItem('duka', form.user);
    localStorage.setItem('company', form.company);
    this.router.navigate(['/duka/DukaDashboard/Sales']);
  // console.log(this.selectedData.pk );



  }




  printe(){
    const printContent = document.getElementById("componentID");
    const WindowPrt = window.open('', '', 'left=0,top=0,width=900,height=900,toolbar=0,scrollbars=0,status=0');
    WindowPrt.document.write('<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">');
    WindowPrt.document.write(printContent.innerHTML);
    WindowPrt.document.close();
    WindowPrt.focus();
    WindowPrt.print();
    WindowPrt.close();
  }


  




}
