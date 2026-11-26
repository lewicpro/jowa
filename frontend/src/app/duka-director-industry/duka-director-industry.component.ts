import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { RestframeworkService } from '../apiservice/restframework.service';

@Component({
    selector: 'app-duka-director-industry',
    templateUrl: './duka-director-industry.component.html',
    styleUrls: ['./duka-director-industry.component.css'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class DukaDirectorIndustryComponent implements OnInit {
  rawmaterialval="True";
  industryexpensesval="False";
  beautyindustryval="False";
  statux='sell'
  foodindustryval="false"
  outputval="False"
  loss="False"
  worker="False"
  rawmaterial;
  materialtypeval;
  settingsval="False"
  lossdata;
  workersdata;
  material_nameval;
  locationval;
  amountofmaterialval;
  Buyingpriceval
  materialavailableval;
  Descriptionval;
  datagiven;
  responseData;
  getradata;
  materia_numberval;
  company;
  stored;
  moxt
  infos;
  mwzi;
  returne;
  hour;
  times
  sec;
  min;
  allz;
  d = new Date();
  mxoxt;
  tareheval: any;
  Name_of_the_officerval: any;
  Amountval: any;
  Purchasingval: any;
  Measureval: any;
  Remainingval: any;
  Amount_of_materialval: any;
  Material_numberval: any;
  Name_of_the_materialval: any;
  Sellingval: any;
  outpute;
  Expense;
  username;
  amountval: any;
  inchargeval: any;
  causesvar: any;
  discriptionchargeval: any;
  statusval: any;
  userdata;
  Locationval: any;
  Fullnameval: any;
  Genderval: any;
  Birthdateval: any;
  WorkingHoursval: any;
  Positionval: any;
  Noteval: any;
  givendata: {};
  fullnameval: any;
  tarehgvn: any;

  constructor(public restapi:RestframeworkService) {



    this.rawmaterialval = localStorage.getItem('rawmaterial')
    this.industryexpensesval = localStorage.getItem('industry')
    this.getrawdata()
    this.getoutputdata()
    this.getlossdata()
    this.getExpensesdata()
    this.username=localStorage.getItem('user')
    this.min = this.d.getMinutes();
    this.hour = this.d.getHours()
    this.sec = this.d.getSeconds()
    this.mwzi = this.d.getMonth()
    this.moxt = parseInt(this.mwzi) + 1
    this.getworkers()

    this.times = this.d.getFullYear() + "-" + this.moxt + "-" + this.d.getDate() + "  " + this.hour + ":" + this.min + ":" + this.sec
    this.rawmaterialval="True";
   }

  ngOnInit() {
  }

  Settings(){
    this.settingsval="True"
    this.loss="True"
    this.rawmaterialval='False'
    this.outputval='False'
    this.worker='False'
    // this.settingsval="False"

    this.industryexpensesval='False'
    this.loss='False'
  }
  getworkers(){
    this.restapi.getindustry('workers/'+localStorage.getItem('company')+'/').then(res=>{
      this.workersdata=res
    })
  }
  getlossdata(){
    this.restapi.getindustry('loss/'+localStorage.getItem('company')+'/').then(res=>{
      this.lossdata=res
    })
  }
  getrawdata(){
    this.company=localStorage.getItem('company')
    this.restapi.getindustry('Rawmaterial/'+localStorage.getItem('company')+'/').then(res=>{
      this.rawmaterial=res

    })
  }
  getoutputdata(){
    this.company=localStorage.getItem('company')
    this.restapi.getindustry('Output/'+localStorage.getItem('company')+'/').then(res=>{
      this.outpute=res

    })
  }
  getExpensesdata(){
    this.company=localStorage.getItem('company')
    this.restapi.getindustry('Expenses/'+localStorage.getItem('company')+'/').then(res=>{
      this.Expense=res

    })
  }


  output(){
    this.min = this.d.getMinutes();
    this.hour = this.d.getHours()
    this.sec = this.d.getSeconds()
    this.mwzi = this.d.getMonth()
    this.moxt = parseInt(this.mwzi) + 1

    this.times = this.d.getFullYear() + "-" + this.moxt + "-" + this.d.getDate() + "  " + this.hour + ":" + this.min + ":" + this.sec

    this.getoutputdata()
    this.outputval='True'
    this.rawmaterialval='False'
    this.industryexpensesval='False'
    this.loss='False'
    this.worker='False'
    this.settingsval="False"
  }
  materials(){
    this.statux="sell"
  }

//Top navigation bar
  rawmaterials(){
    this.getrawdata()
    this.rawmaterialval='True'
    this.outputval='False'
    this.loss='False'
    this.worker='False'

    this.industryexpensesval='False'
  }
  industryexpenses(){
    this.min = this.d.getMinutes();
    this.hour = this.d.getHours()
    this.sec = this.d.getSeconds()
    this.mwzi = this.d.getMonth()
    this.moxt = parseInt(this.mwzi) + 1

    this.times = this.d.getFullYear() + "-" + this.moxt + "-" + this.d.getDate() + "  " + this.hour + ":" + this.min + ":" + this.sec
    this.getExpensesdata()
    this.industryexpensesval='True'

    this.outputval='False'
    this.rawmaterialval='False'
    this.loss='False'
    this.worker='False'
    this.settingsval="False"
  }

  //Top registration
  regis(){
    this.foodindustryval = localStorage.getItem('food')
    this.beautyindustryval = localStorage.getItem('beauty')

    this.statux="register"
    this.rawmaterialval='False'
    this.settingsval="False"


  }
  regform(){

    this.statux="form"
  }

  subregister(){
    this.min = this.d.getMinutes();
    this.hour = this.d.getHours()
    this.sec = this.d.getSeconds()
    this.mwzi = this.d.getMonth()
    this.moxt = parseInt(this.mwzi) + 1

    this.times = this.d.getFullYear() + "-" + this.moxt + "-" + this.d.getDate() + "  " + this.hour + ":" + this.min + ":" + this.sec


    this.datagiven={
      Tarehe:this.times,
      Name_of_raw_materials:this.material_nameval,
      Number_of_rawproducts:this.materia_numberval,
      Amount_of_rawmaterial_used:this.amountofmaterialval,
      buying_price:this.Buyingpriceval,
      Description:this.Descriptionval,
      company:this.company,
    }
    this.restapi.postIndustry(this.datagiven, 'Rawmaterial/'+this.company+'/').then((result)=>{
      this.getrawdata()
      this.statux='form'
    })

  }
  Tarehe(box){
    this.tareheval=box
  }
  Name_of_the_officer(box){
    this.Name_of_the_officerval=box
  }
  Descriptionone(box){
    this.Descriptionval=box
  }
  Tarehevas(box){
    this.tareheval=box
  }
  foodindustry(){
    this.foodindustryval='true'
    localStorage.removeItem('beauty')
    localStorage.setItem('food',  this.foodindustryval)
  }
  beautyindustry(){
    this.beautyindustryval='true'
    localStorage.removeItem('food')
    localStorage.setItem('beauty',  this.beautyindustryval)
  }
  cancel(){
    this.statux ='sell'
    this.rawmaterialval='True'
  }

  material_name(box){
    console.log(box)
    this.material_nameval=box
  }
  materialtype(box){
    console.log(box)
    this.materialtypeval=box
  }
  location(box){
    console.log(box)
    this.locationval=box
  }
  materia_number(box){
    console.log(box)
    this.materia_numberval=box
  }
  amountofmaterial(box){
    console.log(box)
    this.amountofmaterialval=box
  }
  Buyingprice(box){
    console.log(box)
    this.Buyingpriceval=box
  }
  materialavailable(box){
    console.log(box)
    this.materialavailableval=box
  }
  Description(box){
    console.log(box)
    this.Descriptionval=box
  }
  Amount(box){
    this.Amountval=box
  }


  submitexpenses(tareh){

    this.getradata={
      Tarehe:tareh,
      Name_of_the_officer:this.Name_of_the_officerval,
      Amount:this.Amountval,
      Description:this.Descriptionval,
      company:this.company
    }


    this.restapi.postIndustry(this.getradata, 'Expenses/'+this.company+'/').then(rest=>{
      this.responseData=rest;
      this.getExpensesdata()
    })
  }
  Selling(box){
    this.Sellingval=box
  }

  Measure(box){
    this.Measureval=box
  }
  Remaining(box){
    this.Remainingval=box
  }
  Amount_of_material(box){
    this.Amount_of_materialval=box
  }
  Material_number(box){
    this.Material_numberval=box
  }
  Name_of_the_material(box){
    this.Name_of_the_materialval=box
  }
  Tareheout(box){
    this.tareheval=box

  }

  submitoutput(tareheval){

    this.getradata={
      Tarehe:tareheval,
      Name_of_the_officer:this.Name_of_the_officerval,
      Amount:this.Amountval,
      Description:this.Descriptionval,
      Name_of_the_raw_material:this.Name_of_the_materialval,
      Number_of_output:this.Material_numberval,
      Remaining:this.Remainingval,
      amountofmaterialval:this.Amount_of_materialval,
      selling_price:this.Sellingval,
      company:this.company,
      Officer_worker:this.username,
      user:this.username
    }


    this.restapi.postIndustry(this.getradata, 'Output/'+this.company+'/').then(res=>{
      this.getoutputdata()
    })

  }



  lossfaults(){
    this.getlossdata()
    this.loss="True"
    this.rawmaterialval='False'
    this.outputval='False'
    this.settingsval="False"
    this.worker='False'

    this.industryexpensesval='False'
    this.loss='True'
  }

  incharge(box){
    console.log('1')
    this.inchargeval=box

  }
  causes(box){
    console.log('2')
    this.causesvar=box

  }
  amountgiven(box){
    console.log('3')
    this.amountval=box

  }
  discriptionchange(box){
    console.log('4')
    this.discriptionchargeval=box

  }
  status(box){
    console.log('5')
    this.statusval=box

  }
  Tareheoute(box){
    this.tarehgvn=box
  }
  submitloss(Tareh){
    console.log('waterre :'+Tareh)
    console.log('waterre2 :'+this.tarehgvn)
    this.userdata={
      Tarehe:Tareh,
      cause:this.causesvar,
      Amount_cost:this.amountval,
      status:this.statusval,
      Discription:this.discriptionchargeval,
      Officer:this.inchargeval,
      company:this.company,
    }
    this.restapi.postIndustry(this.userdata,'loss/'+localStorage.getItem('company')+'/').then(rest=>{
      this.responseData=rest;
      this.getlossdata();
    })
  }


  fullname(box){
    this.fullnameval=box

  }
  Gender(box){
    this.Genderval=box

  }
  Birthdate(box){
    this.Birthdateval=box

  }
  WorkingHours(box){
    this.WorkingHoursval=box

  }
  Location(box){
    this.Locationval=box

  }
  Position(box){
    this.Positionval=box

  }
  Note(box){
    this.Noteval=box

  }

  submitworker(data){
    this.givendata={
      Tarehe:data,
      fullname:this.fullnameval,
      Gender:this.Genderval,
      Birthdate:this.Birthdateval,
      Workinghours:this.WorkingHoursval,
      Physicallocation:this.Locationval,
      Note:this.Noteval,
      Position:this.Positionval,
      company:this.company,

    }
    this.restapi.postIndustry(this.givendata,'workers/'+localStorage.getItem('company')+'/').then(ware=>{
      this.getworkers()

    })
  }




  workers(){
    this.loss="False"
    this.rawmaterialval='False'
    this.outputval='False'
    this.industryexpensesval='False'
    this.worker='True'
    this.settingsval="False"
    this.getworkers()


  }

  delete(section, pk){

    this.restapi.postIndustry(this.givendata,'delete/'+localStorage.getItem('company')+'/'+section+'/'+pk+'/').then(resp=>{
      this.responseData=resp;
      this.getrawdata()
      this.getoutputdata()
      this.getlossdata()
      this.getExpensesdata()
      this.getworkers()
    })


  }



}
