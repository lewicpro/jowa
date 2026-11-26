import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { RestframeworkService } from '../apiservice/restframework.service';

@Component({
    selector: 'app-duka-director-order',
    templateUrl: './duka-director-order.component.html',
    styleUrls: ['./duka-director-order.component.css'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class DukaDirectorOrderComponent implements OnInit {
  Productval: any;
  Quantityval: any;
  Typeproductval: any;
  Amountval: any;
  Descriptionval: any;
  Totalval: any;
  givenorder;
  all;
  responsedata;
  moxt
  infos;
  mwzi;
  returne;
  hour;
  times
  sec;
  min;
  allz;
  d = new Date();
  givendat;
  company: string;
  user: string;

  constructor(public restapi:RestframeworkService) {
    this.company = localStorage.getItem('company')
    this.user = localStorage.getItem('user')
    this.getdata()
    this.min = this.d.getMinutes();
    this.hour = this.d.getHours()
    this.sec = this.d.getSeconds()
    this.mwzi = this.d.getMonth()
    this.moxt = parseInt(this.mwzi) + 1
    this.times = this.d.getFullYear() + "-" + this.moxt + "-" + this.d.getDate() + "  " + this.hour + ":" + this.min + ":" + this.sec
    this.Productval=null
    this.Quantityval=null
    this.Typeproductval=null
    this.Productval=null
    this.Amountval=null
    this.Totalval=null
    this.Descriptionval=null
    this.Productval=null
   }

  ngOnInit() {
  }

  getdata(){
    this.restapi.getDuka('Order/Duka/'+localStorage.getItem('company')+'/').then(res=>{
      this.all=res;
    })
  }


  Product(box){
    this.Productval=box

  }
  Quantity(box){
    this.Quantityval=box

  }
  Typeproduct(box){
    this.Typeproductval=box

  }
  Amount(box){
    this.Amountval=box

  }
  Total(box){
    this.Totalval=box

  }

  submitorder(){
    this.min = this.d.getMinutes();
    this.hour = this.d.getHours()
    this.sec = this.d.getSeconds()
    this.mwzi = this.d.getMonth()
    this.moxt = parseInt(this.mwzi) + 1

    this.times = this.d.getFullYear() + "-" + this.moxt + "-" + this.d.getDate() + "  " + this.hour + ":" + this.min + ":" + this.sec

    this.givenorder={
      Tarehe:this.times,
      Product:this.Productval,
      Quantity:this.Quantityval,
      Typeproduct:this.Typeproductval,
      Amount:this.Amountval,
      Total:this.Totalval,
      Description:this.Descriptionval,
      officer:localStorage.getItem('user'),
      company:localStorage.getItem('company')
    }
    this.restapi.postDuka(this.givenorder,'Order/Duka/'+localStorage.getItem('company')+'/').then(res=>{
      this.responsedata=res;

      this.getdata()
    })
  }
  Description(box){
    this.Descriptionval=box
  }


  delete(section, pk){
    this.givendat={
      Product:'PRODUCTS'

    }
    this.restapi.postDuka(this.givendat,'delete/'+localStorage.getItem('company')+'/'+section+'/'+pk+'/').then(res=>{
      this.getdata()
    })
  }

}
