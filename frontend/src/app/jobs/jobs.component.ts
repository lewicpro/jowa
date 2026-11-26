import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { RestframeworkService } from '../apiservice/restframework.service';
import Swal from 'sweetalert2/dist/sweetalert2.js'

@Component({
    selector: 'app-jobs',
    templateUrl: './jobs.component.html',
    styleUrls: ['./jobs.component.css'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class JobsComponent implements OnInit {
  dialog='false'
  heading='';
  datagiven;
  responsedata;

  constructor(public restapi:RestframeworkService) { }

  ngOnInit() {
  }

  apply(subject){

    this.dialog='True'
    this.heading=subject



  }
  status(){
    Swal.fire({

      icon: 'success',
      title: 'Your Application has been submitted, we will get to you soon.',
      showConfirmButton: false,
      timer: 1500
    })
   }

  cancel(){
    this.dialog='False'
  }
  submit(applicantname, birthdate, location, phone, email, myaddress, reffered, myskills){
    if(!applicantname || !birthdate || !location || !phone || !email || !myaddress || !reffered || !myskills){
      alert('fill all the form')

    }else{
      this.datagiven={
        applicant_name:applicantname,
        birthdate:birthdate,
        location:location,
        phone:phone,
        email:email,
        myaddress:myaddress,
        reffered:reffered,
        skills:myskills,
        applied_for:this.heading


       }
        this.restapi.postDuka(this.datagiven, 'Jobspost/').then(result=>{
          this.responsedata=result;
          this.status();
          this.cancel();

        })

    }




  }





}
