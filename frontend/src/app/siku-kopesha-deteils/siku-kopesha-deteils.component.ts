import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { RestframeworkService } from '../apiservice/restframework.service';

@Component({
    selector: 'app-siku-kopesha-deteils',
    templateUrl: './siku-kopesha-deteils.component.html',
    styleUrls: ['./siku-kopesha-deteils.component.css'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class SikuKopeshaDeteilsComponent implements OnInit {
  all;
  mwaka;
  tar12;
  tar1;
  tar3;
  tar2;
  tar4;
  // tar12;
  tar5;
  tar7;
  tar9;
  tar8;
  tar10;
  tar11;
  tar14;
  tar6;
  tar13;
  tar15;
  tar19;
  tar18;
  tar23;
  tar16;
  tar20;
  tar21;
  tar17;
  tar25;
  tar27;
  mwezi;
  tar26;
  mwakae;
  tar28;
  tar29;
  tar24;
  tar30;
  tar31;
  tar22;

  constructor(public restframework: RestframeworkService) { 
    this.restframework.getSikuKopesha().then(data=>{
      this.all = data;
      this.mwaka = localStorage.getItem('mwaka')
      for (const m of this.all){
        if (m.mwaka === this.mwaka){
          this.tar1 =m.tr1
          this.tar2 =m.tr2
          this.tar3 =m.tr3
          this.tar4 =m.tr4
          this.tar5 =m.tr5
          this.tar6 =m.tr6
          this.tar7 =m.tr7
          this.tar8 =m.tr8
          this.tar9 =m.tr9
          this.tar10 =m.tr10
          this.tar11 =m.tr11
          this.tar12 =m.tr12
          this.tar13 =m.tr13
          this.tar14 =m.tr14
          this.tar15 =m.tr15
          this.tar16 =m.tr16
          this.tar17 =m.tr17
          this.tar18 =m.tr18
          this.tar19 =m.tr19
          this.tar20 =m.tr20
          this.tar21 =m.tr21
          this.tar22 =m.tr22
          this.tar23 =m.tr23
          this.tar24 =m.tr24
          this.tar25 =m.tr25
          this.tar26 =m.tr26
          this.tar27 =m.tr27
          this.tar28 =m.tr28
          this.tar29 =m.tr29
          this.tar30 =m.tr30
          this.tar31 =m.tr31
          this.mwakae =m.mwaka
          this.mwezi =m.mwezi


        }

      }
    })
  }

  ngOnInit() {
  }

}
