import { Component, OnInit } from '@angular/core';
import { RestframeworkService } from '../apiservice/restframework.service';

@Component({
  selector: 'app-dasboard-mkopeshaji-wadaiwa-mwezi-huu',
  templateUrl: './dasboard-mkopeshaji-wadaiwa-mwezi-huu.component.html',
  styleUrls: ['./dasboard-mkopeshaji-wadaiwa-mwezi-huu.component.css']
})
export class DasboardMkopeshajiWadaiwaMweziHuuComponent implements OnInit {
  malipo;
  users;
  mwaka;
  mopa;
  zaga;
  final;
  all;
  datas;
  getMwezi;
  day;
  array =['moja', 'mbili'];
  d = new Date();;
  monthes = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December', 'January', 'February', 'Mach', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  constructor(public restframework: RestframeworkService) {
    this.restframework.getMalipoGet().then(data => {
      this.malipo = data;
    });


    this.mwaka = this.d.getFullYear();
    this.day = this.d.getDate()
    // console.log(this.day)
    for (let i = this.d.getMonth(); i <= this.monthes.length; i++) {
      this.mopa += this.monthes[i] + ',';
      this.array.push(this.monthes[i]);
      this.getMwezi=this.monthes[this.d.getMonth()]
      // console.log('this mwexz' + this.getMwezi)
      // console.log(this.getMwezi)
    // this.restframework.getLists().then(datas => {
    //   this.users = datas;
    // });
  }}

  ngOnInit() {
  }

  time(){
    this.mwaka = this.d.getFullYear();
    this.day = this.d.getDate()
    // console.log(this.day)
    for (let i = this.d.getMonth(); i <= this.monthes.length; i++) {
      this.mopa += this.monthes[i] + ',';
      this.array.push(this.monthes[i]);
      this.getMwezi=this.monthes[this.d.getMonth()]

      // console.log('this mwexz' + this.getMwezi)
  }}




  printe(){
    // console.log('imepita 1')
    const printContent = document.getElementById("componentID");
    // console.log('imepita 2')
    const WindowPrt = window.open('', '', 'left=0,top=0,width=900,height=900,toolbar=0,scrollbars=0,status=0');
    // console.log('imepita 3')
    WindowPrt.document.write('<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">');
    WindowPrt.document.write(printContent.innerHTML);
    // console.log('imepita 4')
    WindowPrt.document.close();
    // console.log('imepita 5')
    WindowPrt.focus();
    // console.log('imepita 6')
    WindowPrt.print();
    // console.log('imepita 7')
    WindowPrt.close();
    // console.log('imepita 8')
  }


  datesearch(datas){


    // console.log('imejipaa', this.datas)
    // console.log('secom', datas)
    localStorage.removeItem('datedata')
    localStorage.setItem('datedata', datas)
    this.malipo = null;
    this.getMwezi = 'July';
    this.zaga = datas[5] + datas[6]
    console.log('zaga', this.zaga)
    if (this.zaga === '01'){
      this.final = 1 -1;
      console.log('final: ', this.final)


    }
    else if (this.zaga === '02'){
      this.final = 2 -1;
      console.log('final: ', this.final)

    }
    else if (this.zaga === '03'){
      this.final = 3 -1;
      console.log('final: ', this.final)

    }
    else if (this.zaga === '04'){
      this.final = 4 -1;
      console.log('final: ', this.final)

    }
    else if (this.zaga === '05'){
      this.final = 5 -1;
      console.log('final: ', this.final)

    }
    else if (this.zaga === '06'){
      this.final = 6 -1;
      console.log('final: ', this.final)

    }
    else if (this.zaga === '07'){
      this.final = 7 -1;
      console.log('final: ', this.final)

    }
    else if (this.zaga === '08'){
      this.final = 8 -1;
      console.log('final: ', this.final)

    }
    else if (this.zaga === '09'){
      this.final = 9 -1;
      console.log('final: ', this.final)

    }
    else {
      this.final = this.zaga - 1;
      console.log('final2: ', this.final)

    }
    this.getMwezi=this.monthes[this.final]
    console.log('mwezi: ', this.getMwezi)
    
    this.restframework.getUsersDateData().then(resultsd=>{
      this.all = resultsd;
    })
    

  }

}
