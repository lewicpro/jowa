import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RestframeworkService } from '../apiservice/restframework.service';

@Component({
    selector: 'app-directpayment',
    templateUrl: './directpayment.component.html',
    styleUrls: ['./directpayment.component.css'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class DirectpaymentComponent implements OnInit {
  givenid;
  datar;
  datara;
  selectedData;
  name;
  mkoa;
  baki;
  wilaya;
  username;
  nyumbaname;
  past;
  allgem;

  constructor(public router:Router, public route:ActivatedRoute, public pullinfo:RestframeworkService) { 
    this.givenid = parseInt(this.route.snapshot.paramMap.get('id'))
    localStorage.setItem('genid', this.givenid)
    // this.pullinfo.getLists().then(results =>{
    //   this.datar = results;
    //   for(const m of this.datar){
    //     if(String(this.givenid) === String(m.generated_id)){
    //       this.username = m.Username;
    //       this.name = m.jina;
    //       this.wilaya = m.wilaya;
    //       this.mkoa = m.mkoa;
    //       // this.name = m.jina;
    //       this.name = m.jina;
    //       this.givenid = parseInt(this.route.snapshot.paramMap.get('id'))
    //       console.log("1 degree")
    this.pullinfo.getUserId().then(res=>{
      this.allgem = res;
    })
    this.pullinfo.getWapangajiLists().then(results =>{
      this.datara = results;
      // console.log("2 degree")
      for(const n of this.datara){

        if(String(n.generated_id) === String(this.givenid) ){
          // console.log("2 degree")
          // console.log("4 degree")
          if(String(n.status) === 'clean'){

            // console.log(" degree", n.Deni)
            this.username = n.name;
            this.baki = n.deni;
            this.name = n.full_name;
            this.nyumbaname = n.nyumbaname;

          }
          
          

        }
        if(String(n.name) === String(this.username) ){
          if(String(n.status) === 'paying'){
            // console.log("4 degree", n.baki)
            this.past=n.baki;

          }
          


        }

      }

    })
          

    //     }

    //   }

    // })
  }

  ngOnInit() {
    
  }


  pay(){

    
  }

  onselected(k){
    localStorage.removeItem('idfront');
    this.selectedData = k;
    // console.log(k)
    localStorage.setItem('idfront', this.selectedData.pk);
    this.router.navigate(['/Details/']);
  // console.log(this.selectedData.pk );



  }

}
