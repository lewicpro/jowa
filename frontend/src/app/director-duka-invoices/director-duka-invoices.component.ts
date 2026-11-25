import { Component, OnInit } from '@angular/core';
import { RestframeworkService } from '../apiservice/restframework.service';

@Component({
  selector: 'app-director-duka-invoices',
  templateUrl: './director-duka-invoices.component.html',
  styleUrls: ['./director-duka-invoices.component.css']
})
export class DirectorDukaInvoicesComponent implements OnInit {
  mode="PROFOMA"
  Credit="False"
  receipt="off";
  route="active"
  typ="SALES"
  purchases=[];
  min;
  hour;
  mult;
  all;
  sec;
  vat;
  alldata;
  productno;
  mwzi;
  alls;
  diag="off";
  moxt;
  sum
  times;
  allMmilikiData;
  username;
  post_office;
  company;
  Simu;
  kata;
  dom;
  Email;
  allz
  mkoa;
  box;
  Tin;
  wilaya;
  d = new Date();
  Selling_price: any;
  Product_serial: any;
  product_name: any;
  price: any;
  quantity: any;
  dax: string;

  constructor(public restframework:RestframeworkService) {

    this.getproduct()
    this.getdatasales()
    this.getdata()


    this.min = this.d.getMinutes();
    this.hour = this.d.getHours()
    this.sec = this.d.getSeconds()
    this.mwzi = this.d.getMonth()
    this.moxt = parseInt(this.mwzi) + 1
    this.times = this.d.getFullYear() + "-" + this.moxt + "-" + this.d.getDate() + "  " + this.hour + ":" + this.min + ":" + this.sec
    this.restframework.getMmilikiDukaInfo(localStorage.getItem('company')).then(data=>{
      this.allMmilikiData=data
      for(const m of this.allMmilikiData){
        this.username = m.user
        this.post_office = m.post_office
        this.company = m.company
        this.Simu = m.Simu
        this.kata = m.kata
        this.Email = m.Email
        this.mkoa = m.mkoa
        this.box = m.kata
        this.mkoa = m.mkoa
        this.Tin = m.Tin_no
        this.wilaya = m.wilaya

      }

    })




  }
  getdatasales(){
    this.restframework.getPsales(localStorage.getItem('company')).then(dataz=>{
      this.alldata=dataz;
      // this.all = dataz;
      // this.allz = this.alldata.results;
      // this.next1 = this.alldata.next
      // this.prev1 = this.alldata.previous
      // this.dataget()

    })
   }

  ngOnInit() {
  }


  tax(){
    this.mode="TAX"
  }
  profoma(){
    this.mode="PROFOMA"
  }
  getdata(){
    this.restframework.getDukWebMadeni(localStorage.getItem('company')).then(data=>{
      this.all=data;
      this.getdatasales()
    })

   }

   getproduct(){
    this.restframework.getProductLists(localStorage.getItem('company')).then(data=>{

      this.alls = data;
    });
   }

   quantitey(meko){
     this.quantity=meko
   }
   pricey(meko){
     this.price=meko
   }
   getdatafom(Quntity, Name_of_the_product, Selling_price, Product_serial){
    this.productno=Quntity;
    this.product_name=Name_of_the_product;
    this.Selling_price=Selling_price;
    this.Product_serial=Product_serial;
    this.productno=Quntity;
    this.productno=Quntity;
    this.diag="on"

  }
   sumet(){

    //  if(!this.quantity){
    //    this.quantity = this.productno
    //  }
    //  if(!this.price){
    //   this.price = this.Selling_price

    //  }
    this.diag="off"
    this.min = this.d.getMinutes();
    this.hour = this.d.getHours()
    this.sec = this.d.getSeconds()
    this.mwzi = this.d.getMonth()
    this.moxt = parseInt(this.mwzi) + 1
    this.times = this.d.getFullYear() + "-" + this.moxt + "-" + this.d.getDate() + "  " + this.hour + ":" + this.min + ":" + this.sec
    this.mult=this.quantity*this.price

    this.purchases.push(
      { Number_of_products:this.quantity, Name_of_the_product:this.product_name, Selling_price:this.price, Total:this.mult, partno:this.Product_serial}
    )

      this.sum =0;
      // this.kutoa =0;
      // this.kuweka =0;
      // this.baki = 0;

      for(let j=0; j < this.purchases.length; j++){
        this.dom = j;
        // alert(this.purchases[j].cash)
        this.sum = this.sum*1 + this.purchases[j].Number_of_products*1 *this.purchases[j].Selling_price*1
        this.vat=this.sum*0.18
        // if(this.all[j].Process === 'Kutoa'){
        //   this.kutoa = this.kutoa*1 + this.all[j].Amount*1


        // }
        // else if(this.all[j].Process === 'Kuweka'){
        //   this.kuweka = this.kuweka*1 + this.all[j].Amount*1


        // }
        // this.baki = this.kutoa*1 - this.kuweka*1


      }

   }

   searche(keyword){
    console.log('keyword : ', keyword)
    if(keyword === ''){
      console.log('passssssssss : ', keyword)
      this.dax='null'
    }
    else{
      this.dax=keyword

    }

    this.restframework.getSearchproduct(localStorage.getItem('company'), this.dax).then(res=>{
      this.alls = res;
    })

  }





  addpurchases( Quntity, Name_of_the_product, Selling_price, Product_serial){

    this.min = this.d.getMinutes();
    this.hour = this.d.getHours()
    this.sec = this.d.getSeconds()
    this.mwzi = this.d.getMonth()
    this.moxt = parseInt(this.mwzi) + 1
    this.times = this.d.getFullYear() + "-" + this.moxt + "-" + this.d.getDate() + "  " + this.hour + ":" + this.min + ":" + this.sec
    this.mult=Quntity*Selling_price

    this.purchases.push(
      { Number_of_products:Quntity, Name_of_the_product:Name_of_the_product, Selling_price:Selling_price, Total:this.mult, partno:Product_serial}
    )

      this.sum =0;
      // this.kutoa =0;
      // this.kuweka =0;
      // this.baki = 0;

      for(let j=0; j < this.purchases.length; j++){
        this.dom = j;
        // alert(this.purchases[j].cash)
        this.sum = this.sum*1 + this.purchases[j].Number_of_products*1 *this.purchases[j].Selling_price*1
        this.vat=this.sum*0.18
        // if(this.all[j].Process === 'Kutoa'){
        //   this.kutoa = this.kutoa*1 + this.all[j].Amount*1


        // }
        // else if(this.all[j].Process === 'Kuweka'){
        //   this.kuweka = this.kuweka*1 + this.all[j].Amount*1


        // }
        // this.baki = this.kutoa*1 - this.kuweka*1


      }
    // alert('it was here: '+this.barcode)
  }

  cred(){
    this.Credit="True"
  }
  cancel(){
    this.Credit="False"
  }
  cancela(){
    this.diag="False"
  }
  activated(){

    if(this.route=='inactive'){
      this.route ='active'
      this.typ="SALES"




    }else{
      this.route = 'inactive'
      this.typ="BORROWERS"




    }
  }
  add(){
    if(this.receipt=="off"){
      this.receipt ="on"
    }
    else{
      this.receipt ="off";

    }



  }


  getclass(){
    if(this.receipt=='off'){
      return {'animated' : this.receipt=='off', 'slideOutRight' : this.receipt=='off'}

    }
    else{
      return {'animated' : this.receipt=='on', 'slideInRight' : this.receipt=='on'}

    }


  }



}
