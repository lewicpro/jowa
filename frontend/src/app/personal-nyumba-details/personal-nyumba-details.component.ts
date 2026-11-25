import { Component, OnInit } from '@angular/core';
import { RestframeworkService } from '../apiservice/restframework.service';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
@Component({
  selector: 'app-personal-nyumba-details',
  templateUrl: './personal-nyumba-details.component.html',
  styleUrls: ['./personal-nyumba-details.component.css']
})
export class PersonalNyumbaDetailsComponent implements OnInit {

  // @Input() form;
  users;
  Username;
  jina;
  pin;
  days;
  totor;
  num;
  deni;
  deniback;
  boz;
  miezi3
  miezi2
  cash;
  ActualDeni;
  Account_no;
  morn;
  kata;
  mwezi1;
  nyumbaname;
  selectedData;
  caution;
  mkopo;
  wilaya;
  responseData;
  poze;
  year;
  ins;
  baki;
  balanc;
  diffDays;
  d = new Date();
  oneday;
  FirstDate;
  SecDate;
  getTime;
  condtn={ 'condition':'stop', 'name':this.Username};

  STP={ 'condition':'start', 'name':this.Username};
  estmatd: number;
  last;
  // d = new Date();
  all;
  Jumla_priceDays;
  Faida;
  jumla;
  divident;
  daily;
  Rejesho_mwezi;
  file_no;
  details;
  date;
  // d = new Date();
  Simu;
  mwezi;
  Balance;
 
  datar;
  remainder;
  riba;
  imageUrl;
  estimated
  mkoa;
  infos;
  selectedFile: File = null;

  // onfileSelected(file: FileList) {
  //   this.selectedFile = file[0];
  // }


  onfileSelected(file: FileList) {
    this.selectedFile = file.item(0);

    // to show image preview
    const reader = new FileReader();
    reader.onload = (event: any ) => {
      this.imageUrl = event.target.result;
    };
    reader.readAsDataURL(this.selectedFile);


  }

  constructor( public router:Router, public restframework: RestframeworkService) {


    this.getvalue();

    
   }


    getvalue(){
      this.restframework.getWapangajiLists().then(data => {
        this.users = data;
        // console.log('yeap')
        for (const m of this.users) {
          this.datar = localStorage.getItem('mpangajiid');
          // console.log('users' + m.pk);
          // console.log('yeap 1' + m.pk)
          // console.log('yeap 2' + this.datar)
          //   console.log('from local' + this.datar);
          if (String(m.pk) === String(this.datar)) {
            this.Username = m.name;
            this.num = m.pk;
            this.morn = m.condition
            // this.deniback = m.deni
          
            // console.log(this.jina)
            // console.log('woaa:' + this.Username)
            this.restframework.Taarifa().then(datw =>{
              this.ins = datw;
              // console.log(this.ins)
              for(const n of this.ins){
                
                // this.datar = localStorage.getItem('mpangajiid');
        
                if(n.user === this.Username){
                  // console.log('maviiiii2')
                  this.jumla = n.Jumla_malipo;
                  this.Faida = n.Faida
                  this.Jumla_priceDays= n.Jumla_priceDays;
                  this.mwezi = n.Madai;
                  this.mkopo = n.mkopo;
                  
                  this.Faida = n.Faida;
                  this.Rejesho_mwezi = n.Rejesho_mwezi;
                  this.date = this.d.getMonth() + 1;
                  this.restframework.getProfileNyumbastats().then(giv =>{
                    this.all = giv;
                    for(const j of this.all){
                      // console.log(j.photo)
              
                      if(j.user === this.Username){
                        
                          this.imageUrl = j.photo;
              
                        
                        
              
                      } else{
                        
                          this.imageUrl = '/assets/profile.png';
              
                      
                      }
              
                    }
                    if (m.condition === 'start'){
                      this.oneday = 24*60*60*1000;
            
                      this.SecDate = new Date(this.d.getFullYear(),this.d.getMonth(),this.d.getDate());
                      this.FirstDate = new Date(new Date(m.date).getFullYear(), new Date(m.date).getMonth(), new Date(m.date).getDate());
            
                      this.diffDays = Math.round(Math.abs(this.FirstDate.getTime() - this.SecDate.getTime())/(this.oneday));
                      // console.log('FirstDate'+ this.FirstDate)
                      // console.log('DiffDays'+this.diffDays)
                      this.estmatd = parseInt(this.diffDays) * m.daily
                      this.days = this.diffDays;
                      this.balanc = parseInt(this.diffDays) * m.daily;
                      this.deni = this.balanc - this.jumla;
                      // console.log('mwezi1: '+ m.mwezi1)
                      // console.log('miezi2: '+ m.miezi2)
                      // console.log('miezi3: '+m.miezi3)
                      // console.log('year: '+m.year)
                      if(m.mwezi1){
                        this.cash = m.mwezi1;
                      }
                      else if(m.miezi2){
                        this.cash = m.miezi2;
                      }
                      else if(m.miezi3){
                        this.cash = m.miezi3;
                      }
                      else if(m.year){
                        this.cash = m.year;
                      }
                      if (parseInt(this.deni) > 0){
                        this.remainder = parseInt(this.cash) % parseInt(this.deni);
                        this.divident = (parseInt(this.deni) / parseInt(this.cash)) 
                        // console.log('deni: '+this.deni)
                        // console.log('cash: '+this.cash)
                        // console.log('divident: '+ parseInt(this.divident))
                        if(this.remainder){
                          this.totor = parseInt(this.divident) * this.cash + this.cash*1;
                          // console.log('toto: '+ this.totor)
                          this.ActualDeni= parseInt(this.totor)
                          // .log('deni: '+this.ActualDeni)

                        }

                      }
                      

                      // console.log('estmatd'+this.estmatd)
                      if(this.diffDays < 1){
  
                      }
                      else 
                      {
                        // this.restframework.wapangajiPos1(this.poze, 'wapangaji/' +  m.pk+ '/').then((result) => {
                        //   this.responseData = result;
                        //   // console.log('weee'+this.balanc)
                        //   // localStorage.setItem('userData2', this.responseData);
                        //   // this.router.navigate(['/Nyumba-dash/personalDetails/Personali-details']);
                        //   // this.ngProgress.done();
                        //   }, (err) => {
                        //     alert('error');
                     
                        //   });
  
                      }
      
      
      
                      this.poze = {
                        'name':this.Username,
                        'baki':this.deni
                      }
  
                      
      
                      
            
                    }
          
                  })
    
    
                  
                }
        
              }
            });
            // console.log( new Date(m.date).getDate())
            
    
            
            // console.log('yeap 2')
            this.jina = m.full_name;
            this.kata = m.kata;
            this.mkoa = m.mkoa;
            this.estimated = m.estimated_Dept;
            this.baki = m.baki;
            this.file_no = m.file_no;
            this.daily = m.daily;
            this.caution = m.caution
            this.year = m.year
            this.miezi2 = m.miezi2
            this.mwezi1 = m.miezi1
            this.miezi3 = m.miezi3
            this.Simu = m.simu;
            this.wilaya = m.wilaya;
            this.pin = m.pin;
            this.Account_no = m.nyumba_number;
            this.nyumbaname = m.nyumbaname;
    
            // console.log('from local' + this.datar);
    
          }
    
        }
    
        });
        this.restframework.getUserRent().then(resulz=>{
          this.boz = resulz
          for(const m of this.boz){
            // console.log('denee'+m.deni)
            this.deniback = m.Deni;

          }
        })

        

    }


  //  fuo(){
  //   this.oneday = 24*60*60*1000;

  //   this.SecDate = new Date(this.d.getFullYear(),this.d.getMonth(),this.d.getDate());
  //   this.FirstDate = new Date(2008,1,22);

  //   this.diffDays = Math.round(Math.abs(this.FirstDate.getTime() - this.SecDate.getTime())/(this.oneday));
  //   console.log(this.diffDays)
  // }


   onselect(form){
    localStorage.removeItem('id');
    this.selectedData = form;
    // localStorage.setItem('id', this.selectedData.pk);
    // console.log(localStorage.getItem('id'))
    this.router.navigate(['Nyumba-dash/personalDetails']);
  // console.log(this.selectedData.pk );


   }


   gigaoption(){
    
    this.restframework.wapangajiPos1(this.condtn, 'wapangaji/id/' + this.num + '/').then((result) => {
      this.responseData = result;
      // console.log('weee'+this.balanc)
      localStorage.setItem('userData2', this.responseData);
      // this.router.navigate(['/Nyumba-dash/personalDetails/Personali-details']);
      // this.ngProgress.done();
      this.getvalue()
      }, (err) => {
        alert('error');
 
      });
   }

   giga(){
    
    this.restframework.wapangajiPos1(this.STP, 'wapangaji/id/' + this.num + '/').then((result) => {
      this.responseData = result;
      // console.log('weee'+this.balanc)
      localStorage.setItem('userData2', this.responseData);
      // this.router.navigate(['/Nyumba-dash/personalDetails/Personali-details']);
      // this.ngProgress.done();
      this.getvalue()
      }, (err) => {
        alert('error');
 
      });
   }

   onUploadProfileData() {
    // this.user = localStorage.getItem('user');
    // this.ngProgress.start();
    this.restframework.postProfileNyumbadata(this.selectedFile, this.Username, this.pin, this.Simu).subscribe(
      data => {
        // console.log('done');
        // this.ngProgress.done();
      }
    );
  
  }


  ngOnInit() {

  }



}

