
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { RestframeworkService } from '../apiservice/restframework.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2/dist/sweetalert2.js'


@Component({
    selector: 'app-duka-director-sales',
    templateUrl: './duka-director-sales.component.html',
    styleUrls: ['./duka-director-sales.component.css'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class DukaDirectorSalesComponent implements OnInit {
  all;
  receipt="off"
  pk;
  barcode;
  edit="False"
  purchases=[];
  userdate;
  dax;
  user;
  responseData;
  kilichokopwa;
  Total;
  info;
  d = new Date();
  Simu;
  Customer_name;
  Name_of_the_product;
  Selling_price;
  Type_of_product
  worker;
  mwaka;
  erro;
  option="False"
  monthes = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December', 'January', 'February', 'Mach', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  wilaya;
  malipo;
  next1;
  prev1;
  stored;
  moxt;
  yeardata;
  infos;
  userdata;
  profitval;
  Profit=0;
  bought=0;
  cash;
  uploader;
  sum=0;
  dom;
  given;
  company;
  end;
  start;
  mwzi;
  responsedata;
  hour;
  times
  sec;
  alldata;
  monthlydata;
  jumla=0;
  min;
  allz;
  datedata;
  mxoxt;
  price: number;
  product: any;
  Number_of_products: any;
  Tarehe: any;
  Office_worker: any;
  Price_bought: number;


  UserData={'Tarehe':'', 'user':'', 'Amount':'', 'Description':''}
  constructor(public rest_framework:RestframeworkService, public router:Router) {
    this.user=localStorage.getItem('duka')
    this.getdata()
   }
   add(){
      this.receipt="on"

   }

  ngOnInit() {
  }
  getdata(){
    this.min = this.d.getMinutes();
    this.hour = this.d.getHours()
    this.sec = this.d.getSeconds()
    this.mwzi = this.d.getMonth()
    this.moxt = parseInt(this.mwzi) + 1
    this.rest_framework.getProcductSales1(localStorage.getItem('company')).then(dataz=>{
      this.alldata=dataz;
      // this.all = dataz;
      this.allz = this.alldata.results;
      this.next1 = this.alldata.next
      this.prev1 = this.alldata.previous
      // this.dataget()

    })
   }


   options(m){
    window.scroll(0,0);
     this.option = 'True'
     this.pk=m.pk
     this.quantity=m.quantity
     this.Total=m.Total
     this.info=m.info
     this.Type_of_product=m.Type_of_product
     this.Profit=m.Profit
     this.Name_of_the_product=m.Name_of_the_product
     this.prod=m.Name_of_the_product
     this.Selling_price=m.Selling_price
     this.watr=m.Selling_price
     this.pricetsh=m.Total
     this.profitval=m.Profit
     this.Price_bought=m.Price_bought
     this.Customer_name=m.Customer_name


   }
   search(keyword){
    if(keyword === ''){

      this.dax='null'
    }
    else{
      this.dax=keyword

    }



    this.rest_framework.getSearchSales(localStorage.getItem('company'), this.dax).then(res=>{

      this.allz = res;
    })

  }
   cancel(){
    this.option = 'False'
   }

   returned(){
    this.option = 'False'
    console.log('returned : ', this.pk)
    this.rest_framework.returnSales('salesreturn/'+this.pk+'/').then((comp) =>{
      this.option = 'False'
      this.getdata()
      // this.deletestatus()
    })

   }
  calculate(){

  }
  deletestatus(){
    Swal.fire({

      icon: 'success',
      title: 'Your Sales has been Deleted',
      showConfirmButton: false,
      timer: 1500
    })
   }

  PostData(){
    this.rest_framework.getLoginPosts(this.UserData, 'Order-Matumizi/' + localStorage.getItem('Orderworker') + '/').then((result)=>{

    })
  }

  ondelete(pk){
    this.rest_framework.deleteSales('salesdel/'+pk+'/').then((comp) =>{
      this.getdata()
      this.deletestatus();


    }


    )

  }
  Edit(){
    this.option="False"

    if(this.edit == 'True'){
      this.edit = 'False'
    }
    else{
      this.edit = 'True'
    }



  }
  quantity;
  watr;
  pricetsh
  prod;
   onselected(){
    // this.router.navigate(['/Orders/Directors-dashboard'])
  }
  purchasingpriced(pric){
    this.pricetsh = pric
  }
  sellingpriced(pric){
    this.watr = pric
  }
  Profitf(pric){
    this.profitval = pric
  }
  quantityset(pric){
    this.quantity = pric
  }
  prodno(pric){
    this.prod = pric

  }
  Submit(){
    this.userdate={
      'Name_of_the_product':this.prod,
      'quantity':this.quantity,
      'Total':this.pricetsh,
      'Selling_price':this.watr,
      'Profit':this.profitval,
    }
    this.rest_framework.getLoginPosts(this.userdate,'salesedit/'+this.pk+'/').then((comp) =>{
      this.getdata()
      this.edit = 'False'


    })

  }


  prev(){

    this.rest_framework.getTransactionlistWorker1(this.prev1).then(data=>{
      this.all=data;

      this.allz = this.all.results;
      this.next1 = this.all.next
      this.prev1 = this.all.previous


    })

  }
  next(){

    this.rest_framework.getTransactionlistWorker1(this.next1).then(data=>{
      this.all=data;

      this.allz = this.all.results;
      this.prev1 = this.all.previous
      this.next1 = this.all.next


    })

  }



}

