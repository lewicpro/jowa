import { Component } from '@angular/core';
import { LowlayerComponent } from '../lowlayer/lowlayer.component';
import { ActivatedRoute, Router } from '@angular/router';
import { RestframeworkService } from '../apiservice/restframework.service';

@Component({
  selector: 'app-orders-set-orders',
  templateUrl: './orders-set-orders.component.html',
  styleUrls: ['./orders-set-orders.component.css']
})
export class OrdersSetOrdersComponent {
  all;
  customer;
  userData={Name_of_the_product:'', kata:'', Wilaya:'', Mkoa:'', Directors_name:'', Manager_name:'', Tarehe:'', Profit:'', Phone:'', jina_kamili:'', Selling_price:'', Price_bought:'', user:'', Officer_worker:'', Customer:''  }
  jina_kamili: any;
  officer: any;
  phone: any;
  Director: any;
  Manager: any;
  Longitude: any;
  Latitude: any;
  moxt
  infos;
  mwzi;
  d = new Date();
  hour;
  times
  sec;
  min;
  Phone;
  allz;
  mxoxt;
  Mkoa: any;
  Wilaya: any;
  kata: any;

  constructor( public activatedRoute:ActivatedRoute, public rest_framework:RestframeworkService, public router:Router) {
    this.rest_framework.getOrderManagerProducts(localStorage.getItem('manager')).then(data=>{

      this.all = data;
    });

    this.activatedRoute.queryParams.subscribe((data)=>{
      this.customer=data.customer
      this.jina_kamili=data.jina
      this.officer=data.service_officer
      this.phone=data.service_officer_phone
      this.Director=data.Director
      this.Manager=data.Manager
      this.Longitude=data.Longitude
      this.Latitude=data.Latitude
      this.Mkoa=data.mkoa
      this.Wilaya=data.wilaya
      this.kata=data.kata
      this.Phone=data.Phone

      console.log('customer: '+ data.service_officer)
    })

   }

  ngOnInit() {
  }
  onselected(n){
    this.min = this.d.getMinutes();
    this.hour = this.d.getHours()
    this.sec = this.d.getSeconds()
    this.mwzi = this.d.getMonth()
    this.moxt = parseInt(this.mwzi) + 1
    this.times = this.d.getFullYear() + "-" + this.moxt + "-" + this.d.getDate() + "  " + this.hour + ":" + this.min + ":" + this.sec
    this.userData.Price_bought =n.Price_bought
    this.userData.Selling_price =n.Selling_price
    this.userData.Name_of_the_product =n.Name_of_the_product
    this.userData.Officer_worker =this.officer
    this.userData.Phone =this.Phone
    this.userData.Customer =this.customer
    this.userData.jina_kamili =this.jina_kamili
    this.userData.user =this.customer
    this.userData.Profit =n.Profit
    this.userData.kata =this.kata
    this.userData.Wilaya =this.Wilaya
    this.userData.Mkoa =this.Mkoa
    this.userData.Tarehe =this.times
    this.userData.user =this.customer
    this.userData.Manager_name =this.Manager
    this.userData.Directors_name =this.Director
    // this.userData.Phone =this.Director
    this.add()
    // localStorage.setItem('Orderworker', n.user)
    // this.router.navigate(['/Orders/Worker-dashboard/Profile'])
  }
  add(){

    this.rest_framework.getLoginPosts(this.userData, 'setOrder/' + localStorage.getItem('Orderworker') + '/').then(data=>{
      // this.responseData=data0

    })
  }

}
