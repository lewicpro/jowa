import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { RestframeworkService } from '../apiservice/restframework.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-pangisha',
    templateUrl: './rudia-mkataba.component.html',
    styleUrls: ['./rudia-mkataba.component.css'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class RudiaMkatabaComponent  implements OnInit {
  value;
  mor;
  vers;
  datara;
  malipz;

  values;
  baki;
  poze={
    'name':'',
    'simu':'',
    'nyumba_number':'',
    'shughuri':'',
    'ulipoajiriwa':'',
    'idara':'',
    'anwani':'',
    'aina_ya_chumba':'',
    'wilaya_kikazi':'',
    'kulipia':'',
    'kiasi':'',
    'miezi1':'',
    'file':'',
    'miezi2':'',
    'malipo':'',
    'miezi3':'',
    'kata':'',
    'eneo':'',
    'wilaya':'',
    'status':'',
    'muda':'',
    'last_date':'',
    'nyumbaid':'',
    'mkoa':'',
    'baki':'',
    'jina_mdhamini':'',
    'cheo':'',
    'simu_dalali':'',

  }
  responseData;
 

  constructor(public rest_framework: RestframeworkService, public router:Router) {
    // console.log(localStorage.getItem('nyumbaid'))
    // this.poze.nyumbaid = String(localStorage.getItem('nyumbaid'))
    this.rest_framework.getWapangajiLists().then(data=>{
      this.values =data;
      for (const m of this.values) {
        this.datara = localStorage.getItem('nyumbaid');
        if (String(m.nyumbaid) === String(this.datara)) {
          
          this.poze.wilaya = m.wilaya;
          this.poze.mkoa = m.mkoa;
          this.poze.kata = m.kata;
          this.poze.name = m.name;
          this.poze.simu = m.simu;
          this.poze.anwani = m.anwani;
          this.poze.nyumba_number = m.nyumba_number;
          this.poze.shughuri = m.shughuri;
          this.poze.ulipoajiriwa = m.ulipoajiriwa;
          this.poze.idara = m.idara;
          this.poze.aina_ya_chumba = m.aina_ya_chumba;
          this.poze.wilaya_kikazi = m.wilaya_kikazi;
          this.poze.miezi1 = m.miezi1;
          this.poze.miezi2 = m.miezi2;
          this.poze.miezi3 = m.miezi3;
          // this.poze.muda = m.miezi3;
          this.poze.status = 'repay';
          this.poze.eneo = m.eneo;
          this.poze.last_date = m.last_date;
          this.poze.baki = m.baki;
          this.poze.jina_mdhamini = m.jina_mdhamini;
          this.poze.simu_dalali = m.simu_dalali;


        }
      }
    })

    this.rest_framework.getLists().then(result =>{

    });



  

   }

  ngOnInit() {
  }




  UserCreate() {
    // this.ngProgress.ref().start();
    this.rest_framework.wapangajiPost(this.poze, 'wapangaji/').then((result) => {
      this.responseData = result;

      localStorage.setItem('userData2', this.responseData);
      this.router.navigate(['/Nyumba-dash/personalDetails/Personali-details']);
      // this.ngProgress.ref().complete();
      }, (err) => {
        alert('error');
 
      });
 
  }



  malip(){
    if (this.malipz === 'malizia'){
      this.poze.malipo = 'malizia' 

    }
    else if( this.malipz === 'ongeza'){
      this.poze.malipo = 'ongeza'

    }

  }


 

 

}
