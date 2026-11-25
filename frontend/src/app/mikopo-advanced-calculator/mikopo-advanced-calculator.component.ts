import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mikopo-advanced-calculator',
  templateUrl: './mikopo-advanced-calculator.component.html',
  styleUrls: ['./mikopo-advanced-calculator.component.css']
})
export class MikopoAdvancedCalculatorComponent implements OnInit {
  periodval;
  amountval;
  interestval;
  countval;
  Payback;

  constructor() { }

  ngOnInit() {
  }



  //A = P {r(1+r)n} / {(1+r)n –1}


  amount(box){
    console.log('period'+ box)
    this.amountval = box;



  }

  Interest(box){
    console.log('Interest'+ box)
    this.interestval = box;


  }
  count(box){
    console.log('count'+ box)
    console.log('count'+ parseInt(box))
    console.log('parseFloat(this.interestval)'+ parseFloat(this.interestval))
    console.log('parseFloat(this.amountval)'+ parseFloat(this.amountval))
    this.countval = box;
    this.Payback=parseFloat(this.amountval)*(this.interestval* (1*1+ parseFloat(this.interestval)*1)*parseInt(box)*1 / ((1*1+ parseFloat(this.interestval)*1)*parseInt(box)*1 - 1*1))

    console.log('wager'+this.Payback)



  }
  period(box){
    console.log('period'+ box)

    this.periodval = box;

  }






}
