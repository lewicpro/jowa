import { Component, OnInit } from '@angular/core';
import { RestframeworkService } from '../apiservice/restframework.service';

@Component({
  selector: 'app-dasboard-mkopeshaji-waliokopa',
  templateUrl: './dasboard-mkopeshaji-waliokopa.component.html',
  styleUrls: ['./dasboard-mkopeshaji-waliokopa.component.css']
})
export class DasboardMkopeshajiWaliokopaComponent implements OnInit {
  malipo;
  users;
  sum;
  dom;
  given;
  company;
  end;
  kilichokopwa;
  start;
  malipoz: any;
  next1: any;
  prev1: any;

  constructor(public restframework: RestframeworkService) {
    this.getdata()

    this.req()
    // this.restframework.getLists().then(datas => {
    //   this.users = datas;
    // });

  }
  getdata(){
    this.restframework.getWaliokopa2().then(data => {
      this.malipoz = data;
      this.malipo = this.malipoz.results;
      this.next1 = this.malipoz.next
      this.prev1 = this.malipoz.previous
      this.company =localStorage.getItem('company_username')
    });
  }
  req(){
    console.log(this.end)
    console.log(this.start)
    this.sum =0;
    this.given =0;
    this.kilichokopwa =0;
    // this.kuweka =0;
    // this.baki = 0;
    this.restframework.getWaliokopa().then(data=>{
      this.malipo=data;

      for(let j=0; j < this.malipo.length; j++){
        // console.log(this.all.length)
        this.dom = j;
        this.sum = this.sum*1 + this.malipo[j].Total_mkopo*1
        if(this.malipo[j].info !== 'deleted'){
          this.given = this.given*1 + this.malipo[j].RealMkopo*1
          this.kilichokopwa = this.kilichokopwa*1 + this.malipo[j].Faida*1


        }


        // else if(this.malipo[j].Process === 'Kuweka'){
        //   this.kuweka = this.kuweka*1 + this.malipo[j].Amount*1

        // }
        // this.baki = this.kutoa*1 - this.kuweka*1



        // for(const m of this.all){
        //   this.sum += m[j].Salio

        // }



          // console.log(this.sum)


      }


    })

  }

  Check(){
    console.log(this.end)
    console.log(this.start)
    this.sum =0;
    this.given =0;
    this.kilichokopwa =0;
    this.restframework.getMkopoTransaction1(this.company, this.start, this.end).then(data=>{
      this.malipo=data;

      for(let j=0; j < this.malipo.length; j++){
        // console.log(this.all.length)
        this.dom = j;
        this.sum = this.sum*1 + this.malipo[j].Total_mkopo*1
        if(this.malipo[j].info !== 'deleted'){
          this.given = this.given*1 + this.malipo[j].RealMkopo*1
          this.kilichokopwa = this.kilichokopwa*1 + this.malipo[j].Faida*1


        }
        // else if(this.all[j].Process === 'Kuweka'){
        //   this.kuweka = this.kuweka*1 + this.all[j].Amount*1

        // }
        // this.baki = this.kutoa*1 - this.kuweka*1



        // for(const m of this.all){
        //   this.sum += m[j].Salio

        // }



          // console.log(this.sum)


      }


    })

  }


ngOnInit() {}



prev(){
  // console.log(this.prev1)
  this.restframework.getTransactionlistWorker1(this.prev1).then(data=>{
    this.malipoz=data;
    // for(const j of this.all){
    //   this.next1 = j.next;
    //   console.log('1: '+ this.next1)
    //   console.log('2: '+ j.next)

    // }
    this.malipo = this.malipoz.results;
    this.next1 = this.malipoz.next
    this.prev1 = this.malipoz.previous
    // for(const n of this.all.results){
    //   this.allz = n;

    // }

  })

}
next(){
  // console.log(this.next1)
  this.restframework.getTransactionlistWorker1(this.next1).then(data=>{
    this.malipoz=data;

    this.malipo = this.malipoz.results;
    this.prev1 = this.malipoz.previous
    this.next1 = this.malipoz.next


  })}



}

