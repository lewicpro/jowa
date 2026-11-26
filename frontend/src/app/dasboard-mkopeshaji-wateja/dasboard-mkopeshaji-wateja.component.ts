import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { LowlayerComponent } from '../lowlayer/lowlayer.component';
import { ActivatedRoute, Router } from '@angular/router';
import { RestframeworkService } from '../apiservice/restframework.service';

@Component({
    selector: 'app-dasboard-mkopeshaji-wateja',
    templateUrl: './dasboard-mkopeshaji-wateja.component.html',
    styleUrls: ['./dasboard-mkopeshaji-wateja.component.css'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class DasboardMkopeshajiWatejaComponent  {
  users;
  selectedData;
  mtu;
  filtertext;
  inputsway="False"
  forx;
  pk;
  alldata={Username:''}
  id = 0;
  userdata;
  ik;
  editval="off";
  TSDval: any;
  mkoaval: any;
  Wilayaval: any;
  Kataval: any;
  Officeval: any;
  expireval: any;
  Account_noval: any;
  Simuval: any;
  file_noval: any;

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
  edit(){
    this.inputsway="true"

  }
  Editdata(){
    this.userdata={
      jina:this.Simuval,
      ofisi:this.Officeval,
      expire:this.expireval,
      file_no:this.file_noval,
      Account_no:this.Account_noval,
      kata:this.Kataval,
      wilaya:this.Wilayaval,
      mkoa:this.mkoaval,
      Simu:this.Simuval,
      TSD:this.TSDval,
    }
    this.restframework.getLoginPosts(this.userdata, 'watejaupdate' +'/'+this.pk+'/').then((result)=>{
      this.getUsers()
    }
    )



  }
  clearpage(){
    this.editval="off"


  }

  delete(pk){
    this.restframework.getLoginPosts(this.alldata, 'purchases1' +'/'+pk+'/').then((result)=>
    {
      this.getUsers()
    }

    )
  }
  trash(form){
    this.restframework.deletePost('watejadelete' +'/'+form+'/').then((result)=>{
      this.getUsers()
    })



  }

  Wilaya(box){
    this.Wilayaval=box

  }
  Mkoa(box){
    this.mkoaval=box

  }

  file_no(box){
    this.file_noval=box

  }
  Office(box){
    this.Officeval=box

  }
  expire(box){
    this.expireval=box

  }
  Account_no(box){
    this.Account_noval=box

  }
  editu(m){
    this.pk=m.pk
    console.log('Pk upgrad : ' , this.pk)

    this.editval="on"
    console.log('passes here')
    this.TSDval=m.TSD,
    this.mkoaval=m.mkoa,
    this.Wilayaval=m.wilaya,
    this.Kataval=m.kata,
    this.Officeval=m.ofisi,
    this.expireval=m.expire,
    this.file_noval=m.file_no,
    this.Account_noval=m.Account_no,
    this.Simuval=m.Simu

  }

  TSD(box){
    this.TSDval=box

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

    this.restframework.getListsMicrocredit2().then(data => {
      this.users = data;
      for(const m of this.users){

        if(m.Username){
          // this.ik = this.id++


        }

      }

    });

  }

  mom(){
    return 67
  }


  onselected(form) {
    localStorage.removeItem('id');
    this.selectedData = form;
    localStorage.setItem('id', this.selectedData.pk);

    console.log('momo', this.selectedData.pk );
    this.router.navigate(['/Sub/Details/Mkopoadmin']);



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

  keypressed(){
    localStorage.removeItem('searchdata')
    localStorage.setItem('searchdata', this.filtertext)
    console.log('full data :'+this.filtertext)
    this.users = null;
    this.restframework.getUsersWatejaSearch().then(resultd =>{
      this.forx = resultd;

    })
  }





}
