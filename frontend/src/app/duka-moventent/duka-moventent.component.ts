import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { RestframeworkService } from '../apiservice/restframework.service';

@Component({
    selector: 'app-duka-moventent',
    templateUrl: './duka-moventent.component.html',
    styleUrls: ['./duka-moventent.component.css'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class DukaMovententComponent implements OnInit {
  alldata;
  companies;
  userdata;
  selectedleft='False'
  selectedright='False'
  pop="False"
  descriptionval: any;
  pk;
  comp;
  number_of_productsval: any;
  dax: string;

  constructor(public restapi:RestframeworkService) {
    this.comp=localStorage.getItem('company')
    this.givendata()

   }
   givendata(){
    this.restapi.getdata('ProductsMovement/'+localStorage.getItem('company')+'/').then(data=>{
      this.alldata=data;
    })

    this.restapi.getdata('ProductsItemMovement/'+localStorage.getItem('DirectorDuka')+'/').then(data2=>{
      this.companies=data2
    })
   }

  ngOnInit() {
  }
  selectLeft(n){
    this.selectedleft=n.Name_of_the_product
    this.pk=n.pk
  }
  selectRight(n){
    if (n.company == this.comp){

    }else(

      this.selectedright=n.company
    )
  }

  submit(){
    if(this.selectedleft !== 'False'){
      if(this.selectedright !=='False'){

        this.pop="True"

      }
      else{
        alert('choose and right direction')
      }


    }else{
      alert('choose direction')
    }


  }
  search(keyword){
    console.log('keyword : ', keyword)
    if(keyword === ''){
      console.log('passssssssss : ', keyword)
      this.dax='null'
    }
    else{
      this.dax=keyword

    }

    this.restapi.getSearchproduct(localStorage.getItem('company'), this.dax).then(res=>{
      this.alldata = res;
    })

  }
  submitedproduct(){
    console.log('wamedanganya  : '+ this.descriptionval)
    if(this.descriptionval == ''){
      console.log('empty')

      this.descriptionval = 'no description'
    }
    if(this.descriptionval == null){
      console.log('null : ', )
      this.descriptionval = 'no description'
    }
    this.userdata={
      Move_from:localStorage.getItem('company'),
      Move_to:this.selectedright,
      Description:this.descriptionval,
      Number_of_products:this.number_of_productsval
    }

    console.log(this.userdata.Move_from)
    this.restapi.getLoginPosts(this.userdata, 'ProductsMovementAction/'+localStorage.getItem('company')+'/'+this.pk+'/').then((result)=>{
      this.pop="False"
      this.givendata()
    })


  }

  description(momo){
    this.descriptionval=momo

  }
  Number_of_product(momo){
    this.number_of_productsval=momo

  }

  cancel(){
    this.pop="False"

  }





}
