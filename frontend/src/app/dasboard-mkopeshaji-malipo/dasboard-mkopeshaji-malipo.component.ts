import { Component, OnInit } from '@angular/core';
import { RestframeworkService } from '../apiservice/restframework.service';

@Component({
  selector: 'app-dasboard-mkopeshaji-malipo',
  templateUrl: './dasboard-mkopeshaji-malipo.component.html',
  styleUrls: ['./dasboard-mkopeshaji-malipo.component.css']
})
export class DasboardMkopeshajiMalipoComponent implements OnInit {
  malipo;
  users;
  sum;
  malipom;
  dom;
  malipoz;
  given;
  company;
  prev1;
  next1;
  all;
  end;
  allz;
  kilichokopwa;
  start;

  constructor(public restframework: RestframeworkService) {
    this.getdata()

    this.req()
    // this.restframework.getLists().then(datas => {
    //   this.users = datas;
    // });
  }
  getdata(){
    this.restframework.getmalipoz1().then(data => {
      this.malipoz = data;
      this.malipom = this.malipoz.results;
      this.next1 = this.malipoz.next
      this.prev1 = this.malipoz.previous
      this.company =localStorage.getItem('company_username')
    });

  }

  ngOnInit() {
  }

  req(){
    console.log(this.end)
    console.log(this.start)
    this.sum =0;
    this.given =0;
    this.kilichokopwa =0;
    // this.kuweka =0;
    // this.baki = 0;
    this.restframework.getmalipoz().then(data=>{
      this.malipo=data;

      for(let j=0; j < this.malipo.length; j++){
        // console.log(this.all.length)
        this.dom = j;
        this.sum = this.sum*1 + this.malipo[j].Total_pay*1
        if(this.malipo[j].info !== 'deleted'){
          this.given = this.given*1 + this.malipo[j].Total_pay*1
          this.kilichokopwa = this.kilichokopwa*1 + this.malipo[j].kilichokopwa*1


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

  check(){
    console.log(this.end)
    console.log(this.start)
    this.sum =0;
    this.given =0;
    this.kilichokopwa =0;
    this.restframework.getMalipoTransaction(this.company, this.start, this.end).then(data=>{
      this.malipom=data;

      for(let j=0; j < this.malipo.length; j++){
        // console.log(this.all.length)
        this.dom = j;
        this.sum = this.sum*1 + this.malipo[j].Total_pay*1
        if(this.malipo[j].info !== 'deleted'){
          this.given = this.given*1 + this.malipo[j].Total_pay*1
          this.kilichokopwa = this.kilichokopwa*1 + this.malipo[j].kilichokopwa*1


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



  prev(){
    // console.log(this.prev1)
    this.restframework.getTransactionlistWorker1(this.prev1).then(data=>{
      this.allz=data;
      // for(const j of this.all){
      //   this.next1 = j.next;
      //   console.log('1: '+ this.next1)
      //   console.log('2: '+ j.next)

      // }
      this.malipom = this.allz.results;
      this.next1 = this.allz.next
      this.prev1 = this.allz.previous
      // for(const n of this.all.results){
      //   this.allz = n;

      // }

    })

  }
  next(){
    // console.log(this.next1)
    this.restframework.getTransactionlistWorker1(this.next1).then(data=>{
      this.allz=data;

      this.malipom = this.allz.results;
      this.prev1 = this.allz.previous
      this.next1 = this.allz.next


    })

  }




}
