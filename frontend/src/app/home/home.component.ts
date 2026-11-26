import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import * as $ from 'jquery';
import { interval } from 'rxjs';
// import 'rxjs/add/operator/flatMap';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class HomeComponent implements OnInit {
  mono = {color: 'yellow'};
  title = 'abgular 4 with jquery';
  mor: number = 1;

  constructor() {

    interval(10000).subscribe(() => this.mata());

    








    // setInterval(function(){ 
    //   $('.yourdiv').toggleClass('magictime foolishOut');
    // }, 5000 );


   
   }

   mata(){
   
      $('.yourdiv').addClass('magictime spaceInUp');

     
     
   }

  public ngOnInit(){

  }

  run(){
    $('.yourdiv').hover(function () {
      //.log("passed hap")
      $(this).addClass('magictime magic');
      
    });
    
  }
//   timeLeft: number = 60;
//   interval;

// startTimer() {
//     this.interval = setInterval(() => {
//       if(this.timeLeft > 0) {
//         this.timeLeft--;
//       } else {
//         this.timeLeft = 60;
//       }
//     },1000)
//   }

//   pauseTimer() {
//     clearInterval(this.interval);
//   }


  

}
