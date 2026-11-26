import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatListModule} from '@angular/material/list';
export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}
@Component({
    selector: 'app-about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.css'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class AboutComponent implements OnInit {
  call='loan';
  breakpoint;
  colspan: number;
  menu="unclicked";
  heights;
  tiles: Tile[] = [
    {text: 'One', cols: 3, rows: 8, color: 'lightblue'},
    {text: 'Two', cols: 1, rows: 8, color: 'lightgreen'},
    // {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
    // {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'},
  ];

  constructor( ) { }

  menuclicked(){
    this.menu ="clicked"
  }

  menuunclicked(){
    this.menu ="unclicked"

  }

  onResize(event) {
    console.log('resizeeed')
    this.colspan = event.target.innerWidth;
    this.heights = event.target.outerHeight;
    console.log('iner width : ' + this.breakpoint)
    console.log('heights : ' + this.heights)
  }

  ngOnInit() {
    this.colspan = window.innerWidth;
    console.log('width :'+ this.colspan)
  }

  loan(){

    this.call='loan'
  }
  realestate(){
    this.call='realestate'

  }

  shop(){
    this.call='shop'

  }
  transaction(){
    this.call='transaction'

  }
  distribution(){
    this.call='distribution'

  }


  getclass(menu){
    if(menu=='unclicked'){
      return {'animated' : menu=='unclicked', 'slideOutLeft' : menu=='unclicked'}

    }
    else{
      return {'animated' : menu=='clicked', 'slideInLeft' : menu=='clicked'}

    }
   

  }

  

}
