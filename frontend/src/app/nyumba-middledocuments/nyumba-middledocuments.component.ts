import { Component, OnInit } from '@angular/core';
import { RestframeworkService } from '../apiservice/restframework.service';
import { NgProgress } from 'ngx-progressbar';
import { NyumbaMkatabaComponent } from '../nyumba-mkataba/nyumba-mkataba.component';
@Component({
  selector: 'app-nyumba-middledocuments',
  templateUrl: './nyumba-middledocuments.component.html',
  styleUrls: ['./nyumba-middledocuments.component.css']
})
export class NyumbaMiddledocumentsComponent implements OnInit {
  datar;
  users;
  user;
  jina;
  phone;
  pin;
  Userdata={user:'meme'}
  jomo;
  selectedFile: File = null;

  onfileSelected(file: FileList) {
    this.selectedFile = file[0];
  }

  constructor(public restframework: RestframeworkService, public ngProgress: NgProgress, public mkataba:NyumbaMkatabaComponent) {
    this.restframework.getWapangajiLists().then(data => {
      this.datar = localStorage.getItem('mpangajiid');
      this.users = data;
      // console.log('datar:'+ this.datar)
      // console.log('users:'+ this.users.pk)
      for (const m of this.users) {
        if ( String(m.pk) === String(this.datar)) {
          // console.log('datar:'+ this.datar)
      // console.log('users:'+ m.pk)
          this.user = m.name;
          this.jina = 'mimi';
          this.pin = '6767';
          this.phone ='0765454355';
          // console.log('user' + this.user);
          // console.log('jina' + this.jina);

        }

      }


    });
    this.restframework.getPayments().then(datad => {
      this.jomo = datad;
      //.log(this.jomo.user);

      // console.log('come jomo' + this.jomo);
      for (const n of this.jomo) {
        // console.log('pk ' + n.user);
        this.datar = localStorage.getItem('id');
        if ( n.user === this.user) {
          // console.log('come come' + n.Balance);
          if (n.Balance != null) {
            // console.log(n.Balance);
          }
          // this.balancem = n.Balance;
          // this.twobalacnce = this.jumla + this.balancem;
          // localStorage.setItem('balancem', n.Balance);
          // console.log('come go' + this.twobalacnce);


        }

      }
    });
  }

  onUploadmkatabafiles() {
    // this.user = localStorage.getItem('user');
    this.ngProgress.start();
    this.restframework.postMkatabafile(this.selectedFile, this.user, this.pin, this.phone).subscribe(
      data => {
        //.log('done');
        
        this.ngProgress.done();
      }
    );
    this.mkataba.getvalue();
  
  }


  onUploadkitambulishoData() {
    // this.user = localStorage.getItem('user');
    this.ngProgress.start();
    this.restframework.postkitambulishofile(this.selectedFile, this.user, this.pin, this.phone).subscribe(
      data => {
        //.log('done');
        this.ngProgress.done();
      }
    );
  
  }

  onUploadappData() {
    // this.user = localStorage.getItem('user');
    this.ngProgress.start();
    this.restframework.postApplicationfile(this.selectedFile, this.user, this.pin, this.phone).subscribe(
      data => {
        //.log('done');
        this.ngProgress.done();
      }
    );
  
  }
  onUploadSlipData() {
    // this.user = localStorage.getItem('user');
    this.ngProgress.start();
    this.restframework.postSlipefile(this.selectedFile, this.user, this.pin, this.phone).subscribe(
      data => {
        //.log('done');
        this.ngProgress.done();
      }
    );
  
  }

  ngOnInit() {
  }



}
