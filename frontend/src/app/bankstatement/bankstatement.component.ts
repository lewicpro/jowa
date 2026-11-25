import { Component, OnInit } from '@angular/core';
import { RestframeworkService } from '../apiservice/restframework.service';

@Component({
  selector: 'app-bankstatement',
  templateUrl: './bankstatement.component.html',
  styleUrls: ['./bankstatement.component.css']
})
export class BankstatementComponent implements OnInit {
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

  constructor(public restframework: RestframeworkService) {
    this.restframework.getLists().then(data => {
      this.datar = localStorage.getItem('id');
      this.users = data;
      for (const m of this.users) {
        if ( String(m.pk) === String(this.datar)) {
          this.user = m.Username;
          this.jina = m.jina;
          this.pin = m.pin;
          this.phone = m.Simu;
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

  onUploadfiles() {
    // this.user = localStorage.getItem('user');
    // this.ngProgress.start();
    this.restframework.postFiledata(this.selectedFile, this.user, this.pin, this.phone).subscribe(
      data => {
        //.log('done');
        // this.ngProgress.done();
      }
    );
  
  }


  onUploadData() {
    // this.user = localStorage.getItem('user');
    // this.ngProgress.start();
    this.restframework.postdata(this.selectedFile, this.user, this.pin, this.phone).subscribe(
      data => {
        //.log('done');
        // this.ngProgress.done();
      }
    );
  
  }

  onUploadAtmData() {
    // this.user = localStorage.getItem('user');
    // this.ngProgress.start();
    this.restframework.postAtmdata(this.selectedFile, this.user, this.pin, this.phone).subscribe(
      data => {
        //.log('done');
        // this.ngProgress.done();
      }
    );
  
  }
  onUploadSlipData() {
    // this.user = localStorage.getItem('user');
    // this.ngProgress.start();
    this.restframework.postSlipdata(this.selectedFile, this.user, this.pin, this.phone).subscribe(
      data => {
        //.log('done');
        // this.ngProgress.done();
      }
    );
  
  }
  onUploadkitambulishoData(){
    
  }

  ngOnInit() {
  }



}
