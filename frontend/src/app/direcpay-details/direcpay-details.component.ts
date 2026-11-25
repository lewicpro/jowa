import { Component, OnInit } from '@angular/core';
import { RestframeworkService } from '../apiservice/restframework.service';

@Component({
  selector: 'app-direcpay-details',
  templateUrl: './direcpay-details.component.html',
  styleUrls: ['./direcpay-details.component.css']
})
export class DirecpayDetailsComponent implements OnInit {
  alldata;
  idfro;
  name;
  anwani;
  simu;
  payment;
  matumizi;
  date;
  datxz;
  balance;

  constructor(public restapi:RestframeworkService) {
    this.idfro = localStorage.getItem('idfront')
    this.restapi.getPaymentLists().then(resultz=>{
      this.alldata = resultz
      for(const m of this.alldata){
        this.name = m.full_name
        // this.date = m.date
        this.anwani = m.anwani
        this.date = m.date
        this.balance = m.kiasi
        this.matumizi = m.matumizi
        this.payment = m.payment_option
      }
    })

    this.restapi.getUserId().then(datx=>{
      this.datxz = datx;
      for(const m of this.datxz){
        if(String(m.status) === String('clean')){
          this.name = m.full_name
          this.simu = m.simu
          

        }

      }
    })
   }

  ngOnInit() {
  }

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

}
