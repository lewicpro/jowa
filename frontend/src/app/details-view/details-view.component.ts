import { Component, OnInit, Input, ViewChild, AfterViewInit  } from '@angular/core';
import { RestframeworkService } from '../apiservice/restframework.service';
import { WotewatejaComponent } from '../wotewateja/wotewateja.component';
import { Injectable } from '@angular/core';
import {Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
@Injectable()
@Component({
  selector: 'app-details-view',
  templateUrl: './details-view.component.html',
  styleUrls: ['./details-view.component.css']
})
export class DetailsViewComponent implements OnInit {
  @ViewChild(WotewatejaComponent) child;
  @Input() form;
  users;
  Username;
  jina;
  mwei;
  pin;
  // d = new Date();
  Account_no;
  kata;
  mkopo;
  allr;
  getlisttoto;
  file_no;
  mona;
  mwaka;
  array =['moja', 'mbili'];
  wilaya;
  monthes = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December', 'January', 'February', 'Mach', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  all;
  malipo;
  mopa  = '';
  Faida;
  Rejesho_mwezi;
  malipzo;
  mez;
  details;
  date;
  malip;
  d = new Date();
  Simu;
  mwezi;
  Balance;
  datar;
  riba;
  imageUrl;
  malipz;
  als;
  mkoa;
  infos;
  selectedFile: File = null;

  //(file: FileList) {
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

  constructor(public restframework: RestframeworkService) {
    this.restframework.getStoredLists().then(ngoma=>{
      this.als = ngoma;
      for (const m of this.malip){
        // console.log('misemo;'+m.nyumba)



        this.mona = m.Username
        this.file_no = m.file_no
        //.log( m.Username)


        }

    })
    // this.restframework.getLists().then(data => {
    //   this.malip = data;
    //   this.datar = localStorage.getItem('id')

    //   for (const m of this.malip){
    //     // console.log('misemo;'+m.nyumba)

    //     if (String(m.pk) === String(this.datar)){

    //       this.mona = m.Username
    //       this.file_no = m.file_no
    //       //.log( m.Username)


    //     }


    //   }
    // });
    this.restframework.getPersonalToa().then(data => {
      this.malipz = data;
      for(const m of this.malipz){

        if(m.user === this.mona){
          // console.log('user: '+ m.mwaka)
          // console.log('mona: '+ this.mwaka)
          if(String(this.mwaka) === String(m.mwaka)){
            if(this.mwei === 'January'){
              this.mez = m.January;

            }
            else if(this.mwei === 'February'){
              this.mez = m.February;

            }
            else if(this.mwei === 'March'){
              this.mez = m.March;

            }
            else if(this.mwei === 'April'){
              this.mez = m.April;

            }
            else if(this.mwei === 'June'){
              this.mez = m.June;

            }
            else if(this.mwei === 'July'){
              this.mez = m.July;

            }
            else if(this.mwei === 'August'){
              this.mez = m.August;

            }
            else if(this.mwei === 'September'){
              this.mez = m.September;

            }
            else if(this.mwei === 'October'){
              this.mez = m.October;

            }
            else if(this.mwei === 'November'){
              //.log('inaingia')
              this.mez = m.November;

            }
            else if(this.mwei === 'December'){

              this.mez = m.December;

            }

          }



        }


      }



    });
    this.restframework.getPersonalWeka().then(data => {
      this.malipzo = data;



    });
    this.time();

    this.restframework.getMieziToa().then(datas => {
      this.users = datas;
    });

    this.getdata();
   }

   onUploadProfileData() {
    // this.user = localStorage.getItem('user');
    // this.ngProgress.start();
    this.restframework.postProfiledata(this.selectedFile, this.Username, this.pin, this.Simu).subscribe(
      data => {
        //.log('done');
        // this.ngProgress.done();
      }
    );

  }
  awesome(){
    //.log('mimi nimeipata')
    this.getdata();
  }
  time(){
    this.mwaka = this.d.getFullYear();
    for (let i = this.d.getMonth(); i <= this.monthes.length; i++) {
      this.mopa += this.monthes[i] + ',';
      this.array.push(this.monthes[i]);
      this.mwei=this.monthes[this.d.getMonth()]
      //.log(this.mwei)
      // console.log(this.mwaka)
  }}


  getdata(){



    this.restframework.getListsTotal(localStorage.getItem('id')).then(res=>{
      this.getlisttoto=res;
      for(const m of this.getlisttoto){
        this.Username = m.Username;
        this.jina = m.jina;
        this.kata = m.kata;
        this.mkoa = m.mkoa;
        this.Simu = m.Simu;
        this.wilaya = m.wilaya;
        this.pin = m.pin;
        this.Account_no = m.Account_no;

      }

    })



      this.restframework.getInfoStoredData().then(dats =>{
        this.infos = dats;
        for(const n of this.infos){
          this.datar = localStorage.getItem('id');
          if(n.user === this.Username){
            this.riba = n.Riba;
            this.Balance = n.Balance;
            this.mwezi = n.mwezi;
            this.mkopo = n.mkopo;
            this.Faida = n.Faida;
            this.Rejesho_mwezi = n.Rejesho_mwezi;
            this.date = this.d.getMonth() + 1;

          }

        }
      });
      this.restframework.getStoredProfilestats().then(giv =>{
        this.allr = giv;
        for(const j of this.allr){
          // console.log('kwenye picha')

          if(j.user){

              this.imageUrl = j.photo;
              // console.log('picha : '+ j.photo)

          } else{

              this.imageUrl = '/assets/profile.png';


          }

        }
      })


  }

  ngOnInit() {

  }

  fuck(){
    // console.log('yeeeeeeeahhhhhh we getdata')
    this.getdata();
  }



}
