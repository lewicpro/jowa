import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/flatMap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  mono = {color: 'yellow'};
  title = 'abgular 4 with jquery';
  mor: number = 1;

  constructor() {

    Observable.interval(10000).takeWhile(() => true).subscribe(() => this.mata());

    








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
