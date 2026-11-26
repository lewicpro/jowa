import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { RestframeworkService } from '../apiservice/restframework.service';
import { NgProgress } from 'ngx-progressbar';

@Component({
    selector: 'app-ongeza-chumba',
    templateUrl: './ongeza-chumba.component.html',
    styleUrls: ['./ongeza-chumba.component.css'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class OngezaChumbaComponent implements OnInit {

  responseDat;
  user;
  all;
  NyumbaId;
  selectedFile: File = null;
  selectedFile2: File = null;
  selectedFile3: File = null;
  selectedFile4: File = null;
  selectedFile5: File = null;
  selectedFile6: File = null;

  onfileSelected(file: FileList) {
    this.selectedFile = file[0];
    //.log(this.selectedFile.name)
  }
  onfileSelected2(file: FileList) {
    this.selectedFile2 = file[0];
    //.log(this.selectedFile2.name)
  }

  onfileSelected3(file: FileList) {
    this.selectedFile3 = file[0];
    //.log(this.selectedFile3.name)
  }

  onfileSelected4(file: FileList) {
    this.selectedFile4 = file[0];
    //.log(this.selectedFile4.name)
  }

  onfileSelected5(file: FileList) {
    this.selectedFile5 = file[0];
    //.log(this.selectedFile5.name)
  }
  onfileSelected6(file: FileList) {
    this.selectedFile6 = file[0];
    //.log(this.selectedFile6.name)
  }

  giveoout;

  constructor(public router:Router, public ngProgress:NgProgress, public restframework:RestframeworkService) {
    this.NyumbaId= localStorage.getItem('nyumbaid')
    this.Create = {Bei:'', sifa:'', Chumba_No:'', ukubwa:'', nyumba_number:this.NyumbaId, photo:'', simu:'' , Account_no:'', IdadiVyumba:'', huduma:''}

   }


  Create;

  ngOnInit() {
  }



  run(Bei, ukubwa, sifa, Chumba_No ){
    this.ngProgress.ref().start();
    this.Create.Bei = Bei.value
    
      
    
    
    this.restframework.postFiledata1(this.selectedFile, this.selectedFile2, this.selectedFile3, this.selectedFile4, this.selectedFile5,  this.selectedFile6, Bei.value, ukubwa.value, Chumba_No.value, sifa.value, this.NyumbaId).subscribe(
      data => {
        //.log('done');
        this.ngProgress.ref().complete();
      }
    );
  

  }
  onUploadfiles() {
    // this.user = localStorage.getItem('user');
    // this.ngProgress.ref().start();
    
  
  }

  validate(){

    this.restframework.getVyumba().then(data=>{

      this.all = data;
      // console.log('come first')
      for(const m of this.all){
        // console.log('comes sec')
        

        if(m.Chumba_No === this.Create.Chumba_No){
          
          this.giveoout= m.Chumba_No
          console.log(this.giveoout)

        
        }
         

      }

    })

  }

}
