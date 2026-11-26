import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { RestframeworkService } from '../apiservice/restframework.service';

@Component({
    selector: 'app-worker-report',
    templateUrl: './worker-report.component.html',
    styleUrls: ['./worker-report.component.css'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class WorkerReportComponent implements OnInit {
  all;
  sum=0;
  value;
  m;
  dom=0;
  kutoa=0;
  kuweka=0;
  bank;
  dats;
  end;
  prev1;
  next1;
  start;
  moxt;
  alls;
  baki=0;
  allz;

  constructor(public restframework:RestframeworkService) {
    this.getdatavisible()

    this.sum =0;
    this.kutoa =0;
    this.kuweka =0;
    this.baki = 0;
    this.restframework.getReport().then(data=>{
      this.bank='all'
      this.all=data;
      for(let j=0; j < this.all.length; j++){
        // console.log(this.all.length)
        this.dom = j;
        this.sum = this.sum*1 + this.all[j].Amount*1
        if(this.all[j].Process === 'Kutoa'){
          this.kutoa = this.kutoa*1 + this.all[j].Amount*1
          


        }
        else if(this.all[j].Process === 'Kuweka'){
          this.kuweka = this.kuweka*1 + this.all[j].Amount*1
          

        }
        this.baki =  this.kutoa*1 - this.kuweka*1
     

        
        // for(const m of this.all){
        //   this.sum += m[j].Salio

        // }
        
       
  
          // console.log(this.sum)


      }

    })

   }

  ngOnInit() {
  }
  nmb(){
    this.sum =0;
    this.kutoa =0;
    this.kuweka =0;
    this.baki = 0;
    
    this.restframework.getReportGen('NMB', localStorage.getItem('wakala')).then(data=>{
      this.bank='NMB'
      this.all=data;
      // for(const m of this.all){
      //   // console.log(m)
      //   this.value = m;
        

      // }
      

      for(let j=0; j < this.all.length; j++){
        this.dom = j;
        this.sum = this.sum*1 + this.all[j].Amouoant*1
        if(this.all[j].Process === 'Kutoa'){
          this.kutoa = this.kutoa*1 + this.all[j].Amount*1


        }
        else if(this.all[j].Process === 'Kuweka'){
          this.kuweka = this.kuweka*1 + this.all[j].Amount*1
          

        }
        this.baki = this.kutoa*1 - this.kuweka*1


      }
      
    })

  }

  CRDB(){
    this.sum =0;
    this.kutoa =0;
    this.kuweka =0;
    this.baki = 0;
    
    this.restframework.getReportGen('CRDB', localStorage.getItem('wakala')).then(data=>{
      this.bank='CRDB'
      this.all=data;
      // for(const m of this.all){
      //   // console.log(m)
      //   this.value = m;
        

      // }
      

      for(let j=0; j < this.all.length; j++){
        this.dom = j;
        this.sum = this.sum*1 + this.all[j].Amouoant*1
        if(this.all[j].Process === 'Kutoa'){
          this.kutoa = this.kutoa*1 + this.all[j].Amount*1


        }
        else if(this.all[j].Process === 'Kuweka'){
          this.kuweka = this.kuweka*1 + this.all[j].Amount*1
          

        }
        this.baki = this.kutoa*1 - this.kuweka*1


      }
      
    })

  }

  DTB(){
    this.sum =0;
    this.kutoa =0;
    this.kuweka =0;
    this.baki = 0;
    
    this.restframework.getReportGen('DTB', localStorage.getItem('wakala')).then(data=>{
      this.bank='DTB'
      this.all=data;
      // for(const m of this.all){
      //   // console.log(m)
      //   this.value = m;
        

      // }
      

      for(let j=0; j < this.all.length; j++){
        this.dom = j;
        this.sum = this.sum*1 + this.all[j].Amouoant*1
        if(this.all[j].Process === 'Kutoa'){
          this.kutoa = this.kutoa*1 + this.all[j].Amount*1


        }
        else if(this.all[j].Process === 'Kuweka'){
          this.kuweka = this.kuweka*1 + this.all[j].Amount*1
          

        }
        this.baki = this.kutoa*1 - this.kuweka*1


      }
      
    })

  }
  All(){
    this.sum =0;
    this.kutoa =0;
    this.kuweka =0;
    this.baki = 0;
    this.restframework.getReport().then(data=>{
      this.bank='all'
      this.all=data;
      for(let j=0; j < this.all.length; j++){
        // console.log(this.all.length)
        this.dom = j;
        this.sum = this.sum*1 + this.all[j].Amount*1
        if(this.all[j].Process === 'Kutoa'){
          this.kutoa = this.kutoa*1 + this.all[j].Amount*1
          


        }
        else if(this.all[j].Process === 'Kuweka'){
          this.kuweka = this.kuweka*1 + this.all[j].Amount*1
          

        }
        this.baki =  this.kutoa*1 - this.kuweka*1
     

        
        // for(const m of this.all){
        //   this.sum += m[j].Salio

        // }
        
       
  
          // console.log(this.sum)


      }

    })

  }

  getdatavisible(){
    this.restframework.getProcessors(localStorage.getItem('wakala')).then(data=>{
      this.alls=data;
      this.allz = this.alls.results;
      this.next1 = this.alls.next
      this.prev1 = this.alls.previous
      // for(const j of this.allz){
      //   this.jina=localStorage.getItem('wakala')

      // }
    })
  }

  selcom(){
    this.sum =0;
    this.kutoa =0;
    this.kuweka =0;
    this.baki = 0;
    
    this.restframework.getReportGen('Selcom', localStorage.getItem('wakala')).then(data=>{
      this.bank='Selcom'
      this.all=data;
      // for(const m of this.all){
      //   // console.log(m)
      //   this.value = m;
        

      // }
      

      for(let j=0; j < this.all.length; j++){
        this.dom = j;
        this.sum = this.sum*1 + this.all[j].Amouoant*1
        if(this.all[j].Process === 'Kutoa'){
          this.kutoa = this.kutoa*1 + this.all[j].Amount*1


        }
        else if(this.all[j].Process === 'Kuweka'){
          this.kuweka = this.kuweka*1 + this.all[j].Amount*1
          

        }
        this.baki = this.kutoa*1 - this.kuweka*1


      }
      
    })


  }


  KCB(){
    this.sum =0;
    this.kutoa =0;
    this.kuweka =0;
    this.baki = 0;
    
    this.restframework.getReportGen('Selcom', localStorage.getItem('wakala')).then(data=>{
      this.bank='KCB'
      this.all=data;
      // for(const m of this.all){
      //   // console.log(m)
      //   this.value = m;
        

      // }
      

      for(let j=0; j < this.all.length; j++){
        this.dom = j;
        this.sum = this.sum*1 + this.all[j].Amouoant*1
        if(this.all[j].Process === 'Kutoa'){
          this.kutoa = this.kutoa*1 + this.all[j].Amount*1


        }
        else if(this.all[j].Process === 'Kuweka'){
          this.kuweka = this.kuweka*1 + this.all[j].Amount*1
          

        }
        this.baki = this.kutoa*1 - this.kuweka*1


      }
      
    })


  }
  tpb(){
    this.sum =0;
    this.kutoa =0;
    this.kuweka =0;
    this.baki = 0;
    this.restframework.getReportGen('TPB', localStorage.getItem('wakala')).then(data=>{
      this.bank='TPB'
      this.all=data;
      // for(const m of this.all){
      //   // console.log(m)
      //   this.value = m;

      // }

      for(let j=0; j < this.all.length; j++){
        this.dom = j;
        this.sum = this.sum*1 + this.all[j].Amount*1
        if(this.all[j].Process === 'Kutoa'){
          this.kutoa = this.kutoa*1 + this.all[j].Amount*1


        }
        else if(this.all[j].Process === 'Kuweka'){
          this.kuweka = this.kuweka*1 + this.all[j].Amount*1
          // this.baki = this.kuweka*1 - this.kutoa*1

        }
        this.baki = this.kutoa*1 - this.kuweka*1


      }
    })

  }

  Access_Bank(){
    this.sum =0;
    this.kutoa =0;
    this.kuweka =0;
    this.baki = 0;
    this.restframework.getReportGen('Access_Bank', localStorage.getItem('wakala')).then(data=>{
      this.bank='Access_Bank'
      this.all=data;
      // for(const m of this.all){
      //   // console.log(m)
      //   this.value = m;

      // }

      for(let j=0; j < this.all.length; j++){
        this.dom = j;
        this.sum = this.sum*1 + this.all[j].Amount*1
        if(this.all[j].Process === 'Kutoa'){
          this.kutoa = this.kutoa*1 + this.all[j].Amount*1


        }
        else if(this.all[j].Process === 'Kuweka'){
          this.kuweka = this.kuweka*1 + this.all[j].Amount*1
          // this.baki = this.kuweka*1 - this.kutoa*1

        }
        this.baki = this.kutoa*1 - this.kuweka*1


      }
    })

  }

  Equity(){
    this.sum =0;
    this.kutoa =0;
    this.kuweka =0;
    this.baki = 0;
    this.restframework.getReportGen('Equity', localStorage.getItem('wakala')).then(data=>{
      this.bank='Equity'
      this.all=data;
      // for(const m of this.all){
      //   // console.log(m)
      //   this.value = m;

      // }

      for(let j=0; j < this.all.length; j++){
        this.dom = j;
        this.sum = this.sum*1 + this.all[j].Amount*1
        if(this.all[j].Process === 'Kutoa'){
          this.kutoa = this.kutoa*1 + this.all[j].Amount*1


        }
        else if(this.all[j].Process === 'Kuweka'){
          this.kuweka = this.kuweka*1 + this.all[j].Amount*1
          // this.baki = this.kuweka*1 - this.kutoa*1

        }
        this.baki = this.kutoa*1 - this.kuweka*1


      }
    })

  }

  Airtel_Money(){
    this.sum =0;
    this.kutoa =0;
    this.kuweka =0;
    this.baki = 0;
    this.restframework.getReportGen('Airtel_Money', localStorage.getItem('wakala')).then(data=>{
      this.bank='Airtel_Money'
      this.all=data;
      // for(const m of this.all){
      //   // console.log(m)
      //   this.value = m;

      // }

      for(let j=0; j < this.all.length; j++){
        this.dom = j;
        this.sum = this.sum*1 + this.all[j].Amount*1
        if(this.all[j].Process === 'Kutoa'){
          this.kutoa = this.kutoa*1 + this.all[j].Amount*1


        }
        else if(this.all[j].Process === 'Kuweka'){
          this.kuweka = this.kuweka*1 + this.all[j].Amount*1
          // this.baki = this.kuweka*1 - this.kutoa*1

        }
        this.baki = this.kutoa*1 - this.kuweka*1


      }
    })

  }

  Halopesa(){
    this.sum =0;
    this.kutoa =0;
    this.kuweka =0;
    this.baki = 0;
    this.restframework.getReportGen('Halopesa', localStorage.getItem('wakala')).then(data=>{
      this.bank='Halopesa'
      this.all=data;
      // for(const m of this.all){
      //   // console.log(m)
      //   this.value = m;

      // }

      for(let j=0; j < this.all.length; j++){
        this.dom = j;
        this.sum = this.sum*1 + this.all[j].Amount*1
        if(this.all[j].Process === 'Kutoa'){
          this.kutoa = this.kutoa*1 + this.all[j].Amount*1


        }
        else if(this.all[j].Process === 'Kuweka'){
          this.kuweka = this.kuweka*1 + this.all[j].Amount*1
          // this.baki = this.kuweka*1 - this.kutoa*1

        }
        this.baki = this.kutoa*1 - this.kuweka*1


      }
    })

  }

  mpesa(){
    this.sum =0;
    this.kutoa =0;
    this.kuweka =0;
    this.baki = 0;
    this.restframework.getReportGen('Mpesa', localStorage.getItem('wakala')).then(data=>{
      this.bank='Mpesa';
      this.all=data;
      // for(const m of this.all){
      //   // console.log(m)
      //   this.value = m;

      // }

      for(let j=0; j < this.all.length; j++){
        this.dom = j;
        this.sum = this.sum*1 + this.all[j].Amount*1
        if(this.all[j].Process === 'Kutoa'){
          this.kutoa = this.kutoa*1 + this.all[j].Amount*1


        }
        else if(this.all[j].Process === 'Kuweka'){
          this.kuweka = this.kuweka*1 + this.all[j].Amount*1
          // this.baki = this.kuweka*1 - this.kutoa*1

        }
        this.baki = this.kutoa*1 - this.kuweka*1


      }
    })

  }

  MpesaWorking_Balance(){
    this.sum =0;
    this.kutoa =0;
    this.kuweka =0;
    this.baki = 0;
    this.restframework.getReportGen('MpesaWorking_Balance', localStorage.getItem('wakala')).then(data=>{
      this.bank='MpesaWorking_Balance';
      this.all=data;
      // for(const m of this.all){
      //   // console.log(m)
      //   this.value = m;

      // }

      for(let j=0; j < this.all.length; j++){
        this.dom = j;
        this.sum = this.sum*1 + this.all[j].Amount*1
        if(this.all[j].Process === 'Kutoa'){
          this.kutoa = this.kutoa*1 + this.all[j].Amount*1


        }
        else if(this.all[j].Process === 'Kuweka'){
          this.kuweka = this.kuweka*1 + this.all[j].Amount*1
          // this.baki = this.kuweka*1 - this.kutoa*1

        }
        this.baki = this.kutoa*1 - this.kuweka*1


      }
    })

  }

  Mpesa_Float(){
    this.sum =0;
    this.kutoa =0;
    this.kuweka =0;
    this.baki = 0;
    this.restframework.getReportGen('Mpesa_Float', localStorage.getItem('wakala')).then(data=>{
      this.bank='Mpesa_Float';
      this.all=data;
      // for(const m of this.all){
      //   // console.log(m)
      //   this.value = m;

      // }

      for(let j=0; j < this.all.length; j++){
        this.dom = j;
        this.sum = this.sum*1 + this.all[j].Amount*1
        if(this.all[j].Process === 'Kutoa'){
          this.kutoa = this.kutoa*1 + this.all[j].Amount*1


        }
        else if(this.all[j].Process === 'Kuweka'){
          this.kuweka = this.kuweka*1 + this.all[j].Amount*1
          // this.baki = this.kuweka*1 - this.kutoa*1

        }
        this.baki = this.kutoa*1 - this.kuweka*1


      }
    })

  }

  Vodacom_SuperAgent(){
    this.sum =0;
    this.kutoa =0;
    this.kuweka =0;
    this.baki = 0;
    this.restframework.getReportGen('Mpesa_Float', localStorage.getItem('wakala')).then(data=>{
      this.bank='Mpesa_Float';
      this.all=data;
      // for(const m of this.all){
      //   // console.log(m)
      //   this.value = m;

      // }

      for(let j=0; j < this.all.length; j++){
        this.dom = j;
        this.sum = this.sum*1 + this.all[j].Amount*1
        if(this.all[j].Process === 'Kutoa'){
          this.kutoa = this.kutoa*1 + this.all[j].Amount*1


        }
        else if(this.all[j].Process === 'Kuweka'){
          this.kuweka = this.kuweka*1 + this.all[j].Amount*1
          // this.baki = this.kuweka*1 - this.kutoa*1

        }
        this.baki = this.kutoa*1 - this.kuweka*1


      }
    })

  }
  tigopesa(){
    this.sum =0;
    this.kutoa =0;
    this.kuweka =0;
    this.baki = 0;
    this.restframework.getReportGen('Tigopesa', localStorage.getItem('wakala')).then(data=>{
      this.bank='Tigopesa';
      this.all=data;
      // for(const m of this.all){
      //   // console.log(m)
      //   this.value = m;

      // }

      for(let j=0; j < this.all.length; j++){
        // console.log(this.all.length)
        this.dom = j;
        this.sum = this.sum*1 + this.all[j].Amount*1
        if(this.all[j].Process === 'Kutoa'){
          this.kutoa = this.kutoa*1 + this.all[j].Amount*1


        }
        else if(this.all[j].Process === 'Kuweka'){
          this.kuweka = this.kuweka*1 + this.all[j].Amount*1
          

        }
        this.baki = this.kutoa*1 - this.kuweka*1


      }
    })

  }

  nbc(){
    this.sum =0;
    this.kutoa =0;
    this.kuweka =0;
    this.baki = 0;
    this.restframework.getReportGen('Nbc', localStorage.getItem('wakala')).then(data=>{
      this.bank='Nbc';
      this.all=data;
      // for(const m of this.all){
      //   // console.log(m)
      //   this.value = m.Amount;
      //   // console.log(this.value)
        

      // }
      for(let j=0; j < this.all.length; j++){
        // console.log(this.all.length)
        this.dom = j;
        this.sum = this.sum*1 + this.all[j].Amount*1
        if(this.all[j].Process === 'Kutoa'){
          this.kutoa = this.kutoa*1 + this.all[j].Amount*1


        }
        else if(this.all[j].Process === 'Kuweka'){
          this.kuweka = this.kuweka*1 + this.all[j].Amount*1

        }
        this.baki = this.kutoa*1 - this.kuweka*1
     

        
        // for(const m of this.all){
        //   this.sum += m[j].Salio

        // }
        
       
  
          // console.log(this.sum)


      }

      
    })

  }

  req(){
    console.log(this.end)
    console.log(this.start)
    this.sum =0;
    this.kutoa =0;
    this.kuweka =0;
    this.baki = 0;
    this.restframework.getworkerTimeTransaction(this.bank, this.start, this.end).then(data=>{
      this.all=data;

      for(let j=0; j < this.all.length; j++){
        // console.log(this.all.length)
        this.dom = j;
        this.sum = this.sum*1 + this.all[j].Amount*1
        if(this.all[j].Process === 'Kutoa'){
          this.kutoa = this.kutoa*1 + this.all[j].Amount*1


        }
        else if(this.all[j].Process === 'Kuweka'){
          this.kuweka = this.kuweka*1 + this.all[j].Amount*1

        }
        this.baki = this.kutoa*1 - this.kuweka*1
     

        
        // for(const m of this.all){
        //   this.sum += m[j].Salio

        // }
        
       
  
          // console.log(this.sum)


      }

      
    })

  }

}
