import { Component, OnInit, ViewChild, ChangeDetectionStrategy } from '@angular/core';
import { RestframeworkService } from '../apiservice/restframework.service';
import { NgProgress } from 'ngx-progressbar';

@Component({
    selector: 'app-nyumba-details',
    templateUrl: './nyumba-details.component.html',
    styleUrls: ['./nyumba-details.component.css'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class NyumbaDetailsComponent implements OnInit {

  users;
  Username;

 
  jina;
  pin;
  days;
  Account_no;
  kata;
  selectedData;
  caution;
  mkopo;
  wilaya;
  mwez;
  responseData;
  poze;
  ins;
  Madai;
  baki;
  balanc;
  diffDays;
  d = new Date();
  oneday;
  simu;
  FirstDate;
  SecDate;
  result;
  getTime;
  estmatd: number;
  last;
  // d = new Date();
  all;
  Jumla_priceDays;
  Faida;
  jumla;
  daily;
  Rejesho_mwezi;
  details;
  date;
  // d = new Date();
  Simu;
  mwezi;
  Balance;
 
  datar;
  riba;
  imageUrl;
  estimated;
  jumla_malipo;
  mkoa;
  infos;
  houslink;
 
  name;
  imagesa = ['assets/images/danube.jpg', 'assets/images/danube.jpg', 'assets/images/danube.jpg']


  Account_number;
 
  eneo;

  mona;
  malip;


  nyumba_number;
  selectedFile: File = null;

  // onfileSelected(file: FileList) {
  //   this.selectedFile = file[0];
  // }


  onfileSelected(file: FileList) {
    this.ngProgress.ref().start();
    this.selectedFile = file.item(0);

    // to show image preview
    const reader = new FileReader();
    reader.onload = (event: any ) => {
      this.imageUrl = event.target.result;
    };
    reader.readAsDataURL(this.selectedFile);
    this.ngProgress.ref().complete();


  }

  constructor(public restframework: RestframeworkService, public ngProgress:NgProgress, public restFramework: RestframeworkService ) {
   
    this.restframework.UserInfo1().then(data => {
      this.malip = data;
      this.datar = localStorage.getItem('nyumbaid')
      
      for (const m of this.malip){
        // console.log('mise;'+this.datar)
        // console.log('mwez;'+m.mwez)
        
        if (String(m.nyumba) === String(this.datar)){
          
         
          this.mona = m.nyumba
          this.mwez = m.mwezi
          if(this.mwez === 'January'){
            this.Rejesho_mwezi = m.January;

          }
          else if(String(this.mwez) === 'February'){
            // console.log('imefika2')
            this.Rejesho_mwezi = m.February;

          }
          else if(this.mwez === 'March'){
            this.Rejesho_mwezi = m.March;

          }
          else if(this.mwez === 'April'){
            this.Rejesho_mwezi = m.April;

          }
          else if(this.mwez === 'June'){
            this.Rejesho_mwezi = m.June;

          }
          else if(this.mwez === 'July'){
            this.Rejesho_mwezi = m.July;

          }
          else if(this.mwez === 'August'){
            this.Rejesho_mwezi = m.August;

          }
          else if(this.mwez === 'September'){
            this.Rejesho_mwezi = m.September;

          }
          else if(this.mwez === 'October'){
            this.Rejesho_mwezi = m.October;

          }
          else if(this.mwez === 'November'){
            this.Rejesho_mwezi = m.November;

          }
          else if(this.mwez === 'December'){
            this.Rejesho_mwezi = m.December;

          }

          


        }


      }
    });
    


    
    this.getvalu()
    this.restframework.getNyumbaLists().then(data => {
    this.users = data;
    

    for (const m of this.users) {
      this.datar = localStorage.getItem('nyumbaid');
      // console.log('users' + m.pk);
      //   console.log('from local' + this.datar);
      if (String(m.pk) === String(this.datar)) {
        this.name = m.name;
        this.makeSlides();
        this.nyumba_number = m.nyumba_number;
        this.kata = m.kata;
        this.mkoa = m.mkoa;
        this.simu = m.simu;
        this.wilaya = m.wilaya;
        this.eneo = m.eneo;
        this.Account_number = m.Account_number;

        // console.log('from local' + this.datar);

      }

    }

    });

    this.restframework.UserInfo().then(dats =>{
      this.infos = dats;
      for(const n of this.infos){
        // this.dat = localStorage.getItem('id');
        if(n.user === this.Username){
          this.riba = n.Riba;
          this.Balance = n.Balance;
          this.mwezi = n.mwezi;
          this.mkopo = n.mkopo;
          this.Faida = n.Faida;
          this.date = this.d.getMonth() + 1;

        }

      }
    });(
    this.restframework.getProfilestats().then(giv =>{
      this.all = giv;
      for(const j of this.all){
        // console.log(j.photo)

        if(j.user === this.Username){
          
            this.imageUrl = j.photo;

          
          

        } else{
          
            this.imageUrl = '/assets/profile.png';

        
        }

      }
    }))

    

    
   }



  getvalu(){
    this.ngProgress.ref().start();
    this.restFramework.gethouses().then(hous =>{
      this.houslink = hous;
      this.makeSlides();
      this.result = this.houslink.filter(user => this.name)
        
        

      
    
      
    })
    this.restFramework.getInfoNyumbaAll().then(data => {
      this.all = data;
      // console.log('yeap' + this.all)
      // console.log('yeap')
      for (const m of this.all) {
        this.datar = localStorage.getItem('nyumbaid');
        // console.log('users' + m.pk);
        // console.log('yeap 1' + m.pk)
        // console.log('yeap 2' + this.datar)
        //   console.log('from local' + this.datar);
        // console.log('yeap' + m.user)
        if (String(m.user) === String(this.datar)) {
          this.jumla_malipo = m.Jumla_malipo;
          this.Jumla_priceDays = m.Jumla_priceDays;
          this.Madai = m.Madai;
      


          // console.log(this.jina)
          // console.log('woaa:' + this.Username)
          this.restFramework.Taarifa().then(datw =>{
            this.ins = datw;
            // console.log(this.ins)
            for(const n of this.ins){
              
              // this.datar = localStorage.getItem('mpangajiid');
      
              if(n.user === this.Username){
                //.log('maviiiii2')
                this.jumla = n.Jumla_malipo;
                this.Jumla_priceDays= n.Jumla_priceDays;
                this.mwezi = n.Madai;
                this.mkopo = n.mkopo;
                this.Faida = n.Faida;
           
                this.date = this.d.getMonth() + 1;
  
  
                if (m.condition == 'start'){
                  this.oneday = 24*60*60*1000;
                  
        
                  this.SecDate = new Date(this.d.getFullYear(),this.d.getMonth(),this.d.getDate());
                  this.FirstDate = new Date(new Date(m.date).getFullYear(), new Date(m.date).getMonth(), new Date(m.date).getDate());
        
                  this.diffDays = Math.round(Math.abs(this.FirstDate.getTime() - this.SecDate.getTime())/(this.oneday));
                  // console.log('FirstDate'+ this.FirstDate)
                  // console.log('DiffDays'+this.diffDays)
                  this.estmatd = parseInt(this.diffDays) * m.daily
                  this.days = this.diffDays;
                  this.balanc = parseInt(this.diffDays) * m.daily - parseInt(this.jumla)
                  //.log('estmatd'+this.estmatd)
  
  
  
                 

                
                 
  
                  
        
                }
      
              }
      
            }
          });
          // console.log( new Date(m.date).getDate())
          
  
          
          // console.log('yeap 2')
          this.jina = m.name;
          this.kata = m.kata;
          this.mkoa = m.mkoa;
          this.estimated = m.estimated_Dept;
          this.baki = m.baki;
          this.daily = m.daily;
          this.caution = m.caution
          this.Simu = m.simu;
          this.wilaya = m.wilaya;
          this.pin = m.pin;
          this.Account_no = m.nyumba_number;
  
          // console.log('from local' + this.datar);
  
        }
  
      }
  
      });

      this.ngProgress.ref().complete();

  }



   onUploadProfileData() {
    
    // this.user = localStorage.getItem('user');
    // this.ngProgress.ref().start();
    this.restframework.UploadPictureNyumba(this.selectedFile, this.name).subscribe(
      data => {
        console.log('done');
        this.ngProgress.ref().start();
        this.getvalu()
        this.ngProgress.ref().complete();
        // this.ngProgress.ref().complete();
      }
    );
    
  
  }


  // ================= house photos slider =================

  slides = [];       // the photos of this house: { url: '...', missing: false }
  current = 0;       // the photo shown now
  timer = null;      // changes the photo every 5 seconds
  queue = [];        // photos being uploaded: { file, name, preview, state }
  dragging = false;  // a photo is dragged over the slider
  touchX = 0;        // where a finger started on the phone

  // keep only the photos of this house (they are saved with the house name)
  makeSlides() {
    if (this.houslink == null || this.name == null) {
      return;
    }
    const list = [];
    for (const h of this.houslink) {
      if (h.house && String(h.user).toLowerCase().trim() === String(this.name).toLowerCase().trim()) {
        list.push({ url: h.house, missing: false });
      }
    }
    this.slides = list;
    if (this.current >= this.slides.length) {
      this.current = 0;
    }
    this.startAuto();
  }

  // ---------- moving between photos ----------

  next() {
    if (this.slides.length > 0) {
      this.current = (this.current + 1) % this.slides.length;
    }
  }

  prev() {
    if (this.slides.length > 0) {
      this.current = (this.current - 1 + this.slides.length) % this.slides.length;
    }
  }

  goTo(i) {
    this.current = i;
    this.startAuto();
  }

  // change the photo every 5 seconds
  startAuto() {
    this.stopAuto();
    if (this.slides.length > 1) {
      this.timer = setInterval(() => {
        this.next();
      }, 5000);
    }
  }

  stopAuto() {
    if (this.timer != null) {
      clearInterval(this.timer);
      this.timer = null;
    }
  }

  // swipe on the phone
  onTouchStart(event) {
    this.touchX = event.touches[0].clientX;
  }

  onTouchEnd(event) {
    const moved = event.changedTouches[0].clientX - this.touchX;
    if (moved > 50) {
      this.prev();
    } else if (moved < -50) {
      this.next();
    }
  }

  // the photo file is not on the server
  onImageError(slide) {
    slide.missing = true;
  }

  // ---------- adding photos ----------

  // photos chosen in the window (you can choose many)
  onPhotosPicked(input) {
    for (let i = 0; i < input.files.length; i++) {
      this.addToQueue(input.files[i]);
    }
    input.value = '';
    this.uploadNext();
  }

  onDragOver(event) {
    event.preventDefault();
    this.dragging = true;
  }

  onDragLeave() {
    this.dragging = false;
  }

  onDrop(event) {
    event.preventDefault();
    this.dragging = false;
    for (let i = 0; i < event.dataTransfer.files.length; i++) {
      this.addToQueue(event.dataTransfer.files[i]);
    }
    this.uploadNext();
  }

  // put a photo in the list waiting to be uploaded (only pictures)
  addToQueue(file) {
    if (file.type.indexOf('image/') !== 0) {
      return;
    }
    this.queue.push({
      file: file,
      name: file.name,
      preview: URL.createObjectURL(file),
      state: 'waiting'
    });
  }

  // upload the photos one by one
  uploadNext() {
    if (this.name == null) {
      alert('Taarifa za nyumba bado zinapakia. Jaribu tena baada ya muda mfupi.');
      return;
    }
    // one at a time
    for (const item of this.queue) {
      if (item.state === 'uploading') {
        return;
      }
    }
    let item = null;
    for (const q of this.queue) {
      if (q.state === 'waiting') {
        item = q;
        break;
      }
    }
    if (item == null) {
      return;
    }

    item.state = 'uploading';
    this.restframework.UploadPictureNyumba(item.file, this.name).subscribe(
      data => {
        // done: take it out of the list and show the new photo
        URL.revokeObjectURL(item.preview);
        this.queue.splice(this.queue.indexOf(item), 1);
        this.restFramework.gethouses().then(hous => {
          this.houslink = hous;
          this.makeSlides();
          this.current = this.slides.length - 1;
          this.startAuto();
        });
        this.uploadNext();
      },
      err => {
        // failed: it stays red, click it to try again
        item.state = 'error';
        this.uploadNext();
      }
    );
  }

  // a red (failed) photo was clicked
  retry(item) {
    item.state = 'waiting';
    this.uploadNext();
  }

  ngOnDestroy() {
    this.stopAuto();
  }

  ngOnInit() {

  }



}
