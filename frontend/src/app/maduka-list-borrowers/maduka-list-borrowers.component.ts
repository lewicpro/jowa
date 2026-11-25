import { Component, OnInit, TemplateRef } from '@angular/core';
import { RestframeworkService } from '../apiservice/restframework.service';
import { Router } from '@angular/router';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { BsModalService } from 'ngx-bootstrap/modal';
import Swal from 'sweetalert2/dist/sweetalert2.js'


@Component({
  selector: 'app-maduka-list-borrowers',
  templateUrl: './maduka-list-borrowers.component.html',
  styleUrls: ['./maduka-list-borrowers.component.css']
})
export class MadukaListBorrowersComponent implements OnInit {
  [x: string]: any;
  options;
  paycard="false";
  userdata;
  Jina_Mteja;
  Amountval;
  Descriptionval;
  Productval;
  givenpk;
  amount;
  pk;
  process=['Kutoa','Kuweka']
  userData;
    malipouser;
    next1;
    tambulisha;
    edit="noedit";
    cash;
    userdb;
    filtertext;
    allx;
    modalRef: BsModalRef;
    selectedData;
    jum: number;
    showOTPInput: boolean = false;
    OTPmessage: string = 'An OTP is sent to your number. You should receive it in 15 s'
    OTP: string = '';
    message: string;
    prev1;
    malipouser2;
    mkopo;
    day;
    Balancem;
    lservice_officer;
    mwezi;
    infosw;
    Faida;
    Quantityval;
    riba;
    date;
    jina;
    Rejesho_mwezi;
    Tarehe;
    array1 = [1, 2, 3, 4];
    reducer = (accumulator, currentValue) => accumulator + currentValue;
    jinalote;
    awamu;
    getMwezi;
    mdaa;
    array =['moja', 'mbili'];
    men;
    mopa  = '';
    responseDat;
    info;
    Create;
    v1: number;
    bwoy;
    v2: number;
    tarehe;
    no: number;
    v3: number;
    loan1: number;
    values: number;
    user;
    Interest: number;
    momba: number;
    Total_pay;
    loan_repay;
    Balance: number;
    mopai;

    responseData;
    kilichokopwa;
    d = new Date();
    Simu;
    worker;
    mwaka;
    monthes = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December', 'January', 'February', 'Mach', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    wilaya;
    all;
    stored;
    moxt
    infos;
    mwzi;
    company;
    returne;
    hour;
    times
    sec;
    min;
    allz;
    mxoxt;


  constructor(private modalService: BsModalService, public restframework:RestframeworkService, public router:Router) {
    this.min = this.d.getMinutes();
    this.hour = this.d.getHours()
    this.sec = this.d.getSeconds()
    this.mwzi = this.d.getMonth()
    this.moxt = parseInt(this.mwzi) + 1
    this.times = this.d.getFullYear() + "-" + this.moxt + "-" + this.d.getDate() + "  " + this.hour + ":" + this.min + ":" + this.sec
    this.Tarehe = this.times
    this.user = localStorage.getItem('DirectorDuka')
    this.company = localStorage.getItem('company')
    this.getdata()
    this.givenpk=null
    this.Quantityval = null
    this.Productval = null
    this.Amountval = null
    this.Descriptionval = null
    this.Jina_Mtejaval = null




   }
   Totalvalfun(box){
    this.Totalval=box
   }
   cancel23(){
     this.option="False"

   }
   returned(){
    this.option = 'False'
    console.log('returned : ', this.pk)
    this.restframework.returnSales('borrowereturn/'+this.pk+'/').then((comp) =>{
      this.option = 'False'
      this.getdata()
    })
   }
   optiones(pk,quantity, product, amount, description, jina){
     this.option="True"
     this.pk = pk;
     this.quantity = quantity;
     this.product = product;
     this.jina = jina;
     this.description = description;
     this.amount = amount;

   }
   getdata(){
    this.restframework.getDukWebMadeni(localStorage.getItem('company')).then(data=>{
      this.all=data;
    })

   }









  ngOnInit() {
  }

  openModal(template: TemplateRef<any>, pk) {
    this.pk = pk
    this.modalRef = this.modalService.show(template, {class: 'modal-sm'});
  }

  confirm(): void {
   this.delete()
    this.modalRef.hide();
  }

  decline(): void {
    this.modalRef.hide();
  }

  Productfun(box){
    this.Productval=box
  }

  Quantityfun(box){
    this.Quantityval=box
  }

  Amountfun(box){
    console.log('before: ', box)
    this.Amountval=box
    console.log('after: ', this.Amountval)
  }
  Jina_Mtejafun(box){
    this.Jina_Mtejaval=box
  }
  Descriptionfun(box){
    this.Descriptionval=box
  }

  openModal2(template2: TemplateRef<any>) {

    this.modalRef = this.modalService.show(template2, {class: 'modal-sm'});
  }

  confirm2(): void {
   this.tuma()
    this.modalRef.hide();
  }

  decline2(): void {
    this.modalRef.hide();
  }

  delete(){
    this.restframework.deletePost('borowdel/'+this.pk+'/').then(res=>{
      this.getdata()

    })


  }




  // }
  tuma() {
    console.log('amount given :', this.Amountval)
    this.userData={

        'Tarehe':this.times ,
        'user':this.user,
        'Amount': this.Amountval,
        'Product': this.Productval,
        'Quantity': this.Quantityval,
        'Jina_Mteja': this.Jina_Mtejaval,
        'Description': this.Descriptionval,
        'company': this.company,
        }


    this.restframework.TransactionsWorkerPosts(this.userData,'DukaMadeni/'+ localStorage.getItem('username') + '/').then((result) => {
      this.responseDat = result;

      this.restframework.getDukWebMadeni(localStorage.getItem('company')).then(data=>{
        this.all=data;
      })

      }, (err) => {
        alert('error');

      });


  }
  editstatus(){
    Swal.fire({

      icon: 'success',
      title: 'Has been Edited',
      showConfirmButton: false,
      timer: 1500
    })
   }



  prev(){
    this.restframework.getTransactionlistWorker1(this.prev1).then(data=>{
      this.all=data;
      this.allz = this.all.results;
      this.next1 = this.all.next
      this.prev1 = this.all.previous


    })

  }

  cashfunct(momo){
    this.cash=momo;
  }
  next(){
    this.restframework.getTransactionlistWorker1(this.next1).then(data=>{
      this.all=data;
      this.allz = this.all.results;
      this.prev1 = this.all.previous
      this.next1 = this.all.next

    })

  }
  editborrower(){
    this.option="False"
    // this.givenpk=pk
    this.edit="onedit";
    this.Jina_Mtejaval = this.jina
    this.Quantityval = this.quantity
    this.Productval = this.product
    this.Amountval = this.amount
    this.Descriptionval = this.description
    // this.Jina_Mtejaval = Jina_Mteja




  }

  search(keyword){
    if(keyword === ''){

      this.dax='null'
    }
    else{
      this.dax=keyword

    }



    this.restframework.getSearchBorrower(localStorage.getItem('company'), this.dax).then(res=>{

      this.all = res;
    })

  }
  // async presentToast(message, show_button, position, duration) {
  //   const toast = await this.toastCtrl.create({
  //     message: message,
  //     showCloseButton: show_button,
  //     position: position,
  //     duration: duration
  //   });
  //   toast.present();

  // }


  pay(pk){
    this.paycard='true'
    localStorage.setItem('pk',pk)
  }
  cancel(){
    this.paycard='false'

  }
  submit(){

    this.paycard='false'
    console.log('cash'+ this.cash)
    this.userdb={
      'Amount':this.cash,
    }


    this.restframework.getLoginPosts(this.userdb, 'UpdateBorowers/'+localStorage.getItem('pk')+'/').then((result)=>{
      this.responseDat=result
      localStorage.removeItem('pk')
      this.getdata()
    })
    localStorage.removeItem('pk')

  }




  register() {

  }



  logout(){
    this.router.navigate(['login'])
  }
  doRefresh(event) {
    console.log('Begin async operation');

    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
      this.getdata();
    }, 2000);
  }

  submitmark(){
    this.edit="noedit"
    this.givenpk=null

    this.Quantityval = null
    this.Productval = null
    this.Amountval = null
    this.Descriptionval = null
    this.Jina_Mtejaval = null


  }
  Editdata(){
    // console.log('givyeee ak:'+this.givenpk)
    this.userdata={
      'Amount':this.Amountval,
      'Product':this.Productval,
      'Quantity': this.Quantityval,
      'Jina_Mteja': this.Jina_Mtejaval,
      'Description':this.Descriptionval,
    }
    console.log('in submit'+ this.Amountval)
    this.restframework.getLoginPut(this.userdata, 'directorborroweredit/' + this.givenpk +'/').then(data=>{
      // console.log('posted data')
      this.getdata()
      this.editstatus()


    })


  }





}
