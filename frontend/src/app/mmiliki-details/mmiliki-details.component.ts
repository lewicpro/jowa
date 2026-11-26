import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { RestframeworkService } from '../apiservice/restframework.service';

@Component({
    selector: 'app-mmiliki-details',
    templateUrl: './mmiliki-details.component.html',
    styleUrls: ['./mmiliki-details.component.css'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class MmilikiDetailsComponent implements OnInit {
  details;
  datar;
  Username;
  jina;
  kata;
  file_no;
  mkoa;
  d = new Date();
  oneday;
  FirstDate;
  SecDate;
  imageUrl;
  diffDays;
  caution;
  getTime;
  Simu;
  wilaya;
  files;
  Jumla_malipo;
  Balance;
  morn;
  Madeni;

  Account_no;
  pin;

  constructor(public restframework:RestframeworkService) {
    this.getValue()
  
   }


   getValue(){
    this.restframework.getLists().then(data =>{
      this.details = data;
      this.datar = localStorage.getItem('mmilikiid')
      // console.log('user: '+this.datar)

      for (const m of this.details){
        // console.log('user1: '+ m.pk)
        if(String(m.pk) === String(this.datar)){
          this.Username = m.Username;
          this.jina = m.jina;
          this.kata = m.kata;
          this.mkoa = m.mkoa;
          this.file_no = m.file_no;
          this.Simu = m.Simu;
          this.wilaya = m.wilaya;
          this.caution = m.caution;
          this.Madeni = m.Madai;
          this.morn = m.consdition;
          this.pin = m.pin;
          this.Balance = m.Balance
          this.Jumla_malipo = m.Jumla_malipo
          this.Account_no = m.Account_no;

          this.oneday = 24*60*60*1000;
            
          this.SecDate = new Date(this.d.getFullYear(),this.d.getMonth(),this.d.getDate());
          this.FirstDate = new Date(new Date(m.Registered).getFullYear(), new Date(m.Registered).getMonth(), new Date(m.Registered).getDate());

          this.diffDays = Math.round(Math.abs(this.FirstDate.getTime() - this.SecDate.getTime())/(this.oneday));

        }

      }

    })

   }

  ngOnInit() {
  }
  onUploadProfileData(){

  }

  onfileSelected(){

  }

  

}
