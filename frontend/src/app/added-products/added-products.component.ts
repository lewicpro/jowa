import { Component, OnInit } from '@angular/core';
import { RestframeworkService } from '../apiservice/restframework.service';

@Component({
  selector: 'app-added-products',
  templateUrl: './added-products.component.html',
  styleUrls: ['./added-products.component.css']
})
export class AddedProductsComponent implements OnInit {
  all;

  constructor(public restapi:RestframeworkService) {
    this.getdata()
   }
  getdata(){
    this.restapi.getaddedproducts(localStorage.getItem('company')).then(res=>{
      this.all=res
    })

  }


  ngOnInit() {
  }

}
