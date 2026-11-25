import { Component, OnInit, TemplateRef } from '@angular/core';
import { RestframeworkService } from '../apiservice/restframework.service';
import { Router } from '@angular/router';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { BsModalService } from 'ngx-bootstrap/modal';
import Swal from 'sweetalert2/dist/sweetalert2.js'

@Component({
  selector: 'app-maduka-list-products',
  templateUrl: './maduka-list-products.component.html',
  styleUrls: ['./maduka-list-products.component.css']
})
export class MadukaListProductsComponent implements OnInit {
  all;
  receipt="off";
  tz;
  typeprod;
  sumtax;
  Expiritydateval;
  alls;
  nameoftheborrowerval;
  Credit="False"
  nameprod;
  imageUrl;
  productname;
  Selectd="True"
  submitbutt="False"
  photosd;
  phoneshop="False"
  useMOData;
  wambo;
  cloth="False"
  food="False"
  editidata;
  Purchasing_price;
  selectedFile: File = null;
  shelf;
  userDats;
  Expire_date;
  total_available;
  descriptionoftheborrowerval;
  Descriptionval;
  phonenooftheborrowerval;
  responseData1;
  Total_bought;
  Serialnumberval;
  Productnum;
  tax;
  Product_serialVal;
  expire;
  industry;
  menu="False"
  priceye;
  Selling_price;
  malipo;
  toolsshop;
  sum;
  pharma: string;
  domesticretails: string;
  domesticwholesale: string;
  dataobtained;
  modalRef: BsModalRef;
  username;
  dax;
  productdis;
  purchasingprice;
  productaddnumber;
  shelfing;
  typeproduct;
  dated;
  Type_of_product;
  editdata;
  route='active';
  purchasing;
  selling;
  pk;
  diag="off";
  Edit="False";
  allgiven;
  quantity;
  Email;
  alldata;
  dataCreated;
  barcode;
  allgiv;
  new_receipt;
  Profit;
  Tin;
  name;
  discount;
  price;
  waka;
  statux="sell";
  userData={'Tarehe':'', 'user':'', 'Amount':'', 'Description':'', 'Number_of_products':'', 'Selling_price':'', 'Product_number':'', 'Type_of_product':'', 'Name_of_the_product':''}
  options;
  process=['Kutoa','Kuweka']
  UserData={
    'Tarehe': '',
    'user': '',
    'Amount': '',
    'Description': '',

    // 'TotalAmount': '',
    // 'body': '',
    }
    malipouser;
    next1;
    Total_Purchased;
    Purchasing_P;
    tambulisha;
    filtertext;
    allx;
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
    riba;
    date;
    jina;
    company;
    Rejesho_mwezi;
    Tarehe;
    array1 = [1, 2, 3, 4];
    reducer = (accumulator, currentValue) => accumulator + currentValue;
    jinalote;
    given;
    imagediag="False"
    awamu;
    getMwezi;
    added="False"
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
    dom;
    Wholesale_profit: any;
  Whiolesale_price: any;
  Wholesale_price: any;
  shelfpositionprice: any;
  Total_sold: any;
  Total_profit: any;
  C_name: any;
  C_phone: any;
  Number_of_productsval;
  Number_of_productsva: number;
  amountofproductval: any;
  Arts: string;
  Expiritydat: any;
;
    no: number;
    newprice;
    allMmilikiData;
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
    mxoxt;
    mkoa: any;
  post_office: any;
  kata: any;
  constructor(private modalService: BsModalService, public rest_framework:RestframeworkService, public router:Router) {
    this.getdata()
    this.pullmmilikidata()
    this.getproduct()
    this.min = this.d.getMinutes();
    this.hour = this.d.getHours()
    this.TotalDatacheck()
    this.sec = this.d.getSeconds()
    this.mwzi = this.d.getMonth()
    this.moxt = parseInt(this.mwzi) + 1
    this.times = this.d.getFullYear() + "-" + this.moxt + "-" + this.d.getDate() + "  " + this.hour + ":" + this.min + ":" + this.sec
    this.pharma = localStorage.getItem('pharma')
    this.domesticwholesale = localStorage.getItem('domesticwholesale')
    this.domesticretails = localStorage.getItem('domesticretails')
    this.toolsshop = localStorage.getItem('toolsshop')
    this.company=localStorage.getItem('company');
    this.userData.Tarehe = this.times

    if(this.route=='inactive'){
      this.route ='active'
      this.tax = 18.00

    }else{
      this.route = 'inactive'
      this.tax = 0.00

    }
    if(this.isNumber(parseInt('10'))){
      console.log('A number,  True')

    }
    else{

    }
    this.isNumber(10)
   }
   isNumber(val): boolean { return typeof val === 'number'; }


  ngOnInit() {
  }
  pullmmilikidata(){
    this.rest_framework.getMmilikiDukaInfo(localStorage.getItem('company')).then(data=>{
      this.allMmilikiData=data
      for(const m of this.allMmilikiData){
        this.username = m.user
        this.post_office = m.post_office
        this.company = m.company
        this.expire = m.expire
        this.industry = m.industry
        this.Simu = m.Simu
        this.Simu = m.Simu
        this.kata = m.kata
        this.Email = m.Email
        this.mkoa = m.mkoa
        this.mkoa = m.mkoa
        this.Tin = m.Tin_no
        this.wilaya = m.wilaya

      }
      console.log('mmiliki info :    '+ this.expire)

    })
  }

  canceled9(){
    this.imagediag="False"
    this.Selectd="True"
    this.submitbutt="False"
  }

  outofstock(){
    Swal.fire({

      icon: 'warning',
      title: 'Your out of stock',
      showConfirmButton: false,
      timer: 1500
    })
   }

   submited(){
    Swal.fire({

      icon: 'success',
      title: 'Submited to borrowers',
      showConfirmButton: false,
      timer: 1500
    })
   }

  getdata(){
    this.rest_framework.getProcductPages(localStorage.getItem('company')).then(dataz=>{
      this.alldata=dataz;

      this.all = this.alldata.results;
      this.next1 = this.alldata.next
      this.prev1 = this.alldata.previous

    })

  }


  selectCredit(){
    this.Credit="True"
    this.diag="off"

  }
  canceled6(){
    this.Credit="false"


  }

  NameofBorrower(box){
    this.nameoftheborrowerval = box;


  }
  Expiritydate(box){
    this.Expiritydateval=box



  }
  DescriptionData(box){
    this.descriptionoftheborrowerval = box;


  }
  phoneNumber(box){
    this.phonenooftheborrowerval = box;


  }

  submitCredit(){
    this.Credit="false"
    if(this.Purchasing_P == null){
      this.Purchasing_P =0
    }
    if(this.Purchasing_P == ''){
      this.Purchasing_P =0
    }
    if(this.quantity === 1){
      this.waka =this.price;
      this.Number_of_productsva =parseFloat(this.Number_of_productsval)*1 - 1*1;
    }
    if(this.quantity > 1){
      // this.waka =this.price;
      this.Number_of_productsva =parseFloat(this.Number_of_productsval)*1 - 1*1;
    }
    this.min = this.d.getMinutes();
    this.hour = this.d.getHours()
    this.sec = this.d.getSeconds()
    this.mwzi = this.d.getMonth()
    this.moxt = parseInt(this.mwzi) + 1
    // console.log("price14: "+ this.price)
    // console.log("Profit4 : "+ this.Profit)

    this.times = this.d.getFullYear() + "-" + this.moxt + "-" + this.d.getDate() + "  " + this.hour + ":" + this.min + ":" + this.sec
    this.userData.Tarehe = this.times
    this.userDats={

        Tarehe:this.times ,
        user:this.user,
        Amount: this.price,
        Product: this.name,
        Quantity: this.quantity,
        Jina_Mteja: this.nameoftheborrowerval,
        Matumizi: this.Descriptionval,
        Description: this.descriptionoftheborrowerval,
        Phone: this.phonenooftheborrowerval,
        Name_of_the_product:this.name,
        Selling_price:this.price,
        Product_seller:localStorage.getItem('duka'),
        quantity:this.quantity,
        quantity_remained:this.Number_of_productsva,
        Officer_worker:localStorage.getItem('duka'),
        Price_bought:this.price,
        company:localStorage.getItem('company'),
        Profit:this.Profit,
        Total_Purchased:this.waka,
        Type_of_product:this.Type_of_product,
        barcode:this.barcode,
        receipt:this.new_receipt,
        Product_serial:this.Serialnumberval,
        Customer_name:this.C_name,
        Customer_phone:this.C_phone,
        Total:this.waka,
        }


    this.rest_framework.TransactionsWorkerPosts(this.userDats,'DukaMadeni/'+ localStorage.getItem('username') + '/').then((result) => {
      this.responseDat = result;

      this.rest_framework.getDukWebMadeni(localStorage.getItem('company')).then(data=>{
        // this.all=data;
        this.submited()
        this.router.navigate(['DukaMmilikiDashboard/Borrowers'])
        this.editidata={
          Number_of_products:this.quantity
        }
        this.rest_framework.getLoginPosts(this.editidata, 'EditBorrower/'+this.pk+'/').then(san=>{

        }
          )


      })

      }, (err) => {
        alert('error');

      });
  }
  tools(){
    this.toolsshop="true"
    this.pharma="false"
    this.domesticretails="false"
    this.phoneshop="false"
    this.domesticwholesale="false"
    this.cloth = 'false'
    this.Arts = 'false'
    this.food = 'false'
    localStorage.removeItem('domesticwholesale')
    localStorage.removeItem('pharma')
    localStorage.removeItem('domesticretails')
    localStorage.setItem('toolsshop', 'true')
  }
  pharmafunct(){
    this.toolsshop="false"
    this.pharma="true"
    this.domesticretails="false"
    this.phoneshop="false"
    this.cloth = 'false'
    this.Arts = 'false'
    this.food = 'false'
    this.domesticwholesale="false"
    localStorage.removeItem('domesticwholesale')
    localStorage.removeItem('toolsshop')
    localStorage.removeItem('domesticretails')
    localStorage.setItem('pharma', 'true')
  }
  wholesaledomestic(){
    this.toolsshop="false"
    this.pharma="false"
    this.domesticretails="false"
    this.domesticwholesale="true"
    this.cloth = 'false'
    this.phoneshop="false"
    this.Arts = 'false'
    this.food = 'false'
    localStorage.removeItem('pharma')
    localStorage.removeItem('toolsshop')
    localStorage.removeItem('domesticretails')
    localStorage.setItem('domesticwholesale', 'true')
  }

  Artsfunct(){
    this.toolsshop="false"
    this.pharma="false"
    this.domesticretails="false"
    this.domesticwholesale="false"
    this.cloth = 'false'
    this.phoneshop="false"
    this.Arts = 'true'
    this.food = 'false'
    localStorage.removeItem('pharma')
    localStorage.removeItem('toolsshop')
    localStorage.removeItem('domesticretails')
    localStorage.setItem('domesticwholesale', 'true')
  }
  foodfunct(){
    this.toolsshop="false"
    this.pharma="false"
    this.domesticretails="false"
    this.domesticwholesale="false"
    this.cloth = 'false'
    this.phoneshop="false"
    this.Arts = 'false'
    this.food = 'true'
    localStorage.removeItem('pharma')
    localStorage.removeItem('toolsshop')
    localStorage.removeItem('domesticretails')
    localStorage.setItem('domesticwholesale', 'true')
  }
  Retaildomestic(){
    this.toolsshop="false"
    this.pharma="false"
    this.cloth = 'false'
    this.domesticretails="true"
    this.domesticwholesale="false"
    localStorage.removeItem('pharma')
    this.phoneshop="false"
    this.Arts = 'false'
    this.food = 'false'
    localStorage.removeItem('toolsshop')
    localStorage.removeItem('domesticwholesale')
    localStorage.setItem('domesticretails', 'true')

  }
  phoneshopfunc(){
    this.phoneshop="true"
    this.toolsshop="false"
    this.pharma="false"
    this.cloth = 'false'
    this.domesticretails="false"
    this.Arts = 'false'
    this.food = 'false'
    this.domesticwholesale="false"
    localStorage.removeItem('pharma')
    localStorage.removeItem('toolsshop')
    localStorage.removeItem('domesticwholesale')
    localStorage.setItem('domesticretails', 'true')
  }

  cancel(){
    this.diag="off"

  }
  product(data){
    // localStorage.setItem('product', data)
    this.userData.Name_of_the_product = data
  }

  producttype(data){
    this.userData.Type_of_product = data

  }
  productNumber(data){
    this.userData.Product_number = data

  }
  SerialNo(data){
    this.Serialnumberval = data

  }
  productexpiredate(data){
    this.Expire_date = data

  }
  productSellingPrice(data){
    this.Selling_price = data

  }
  ProductProfit(data){
    this.Profit = data

  }
  Wholesaleprice(data){
    this.Wholesale_price = data

  }
  amountofproduct(data){
    this.amountofproductval = data

  }
  Wholesaleprofit(data){
    this.Wholesale_profit = data

  }

  productPurchasingPrice(data){
    this.Purchasing_price = data

  }
  Product_serial(data){
    this.Product_serialVal = data

  }
  Description(data){
    this.Descriptionval = data

  }
  NumberOfProducts(data){
    this.userData.Number_of_products = data

  }
  ProductDescription(data){
    this.userData.Description = data
    this.Description = data


  }
  Moveproduct(){
    this.router.navigate(['DukaMmilikiDashboard/movement'])
  }
  subregister(){
    if(this.Purchasing_P == ''){
      this.Purchasing_P =0
    }
    if(this.Purchasing_P == null){
      this.Purchasing_P =0
    }
    this.Profit = parseInt(this.Selling_price)*1 - parseInt(this.Purchasing_price)*1
    this.min = this.d.getMinutes();
    this.hour = this.d.getHours()
    this.sec = this.d.getSeconds()
    this.mwzi = this.d.getMonth()
    this.moxt = parseInt(this.mwzi) + 1
    this.tz = this.d.getFullYear() + "-" + this.moxt + "-" + this.d.getDate() + "  " + this.hour + ":" + this.min + ":" + this.sec
    this.useMOData={
      Tarehe:this.tz,
      user:localStorage.getItem('user'),
         Description:this.Descriptionval,
          Number_of_products:this.userData.Number_of_products,
           Selling_price:this.Selling_price,
            Product_number:this.userData.Product_number,
              Product_serial:this.Product_serialVal,
                Profit:this.Profit,
                  Wholesale_price:this.Wholesale_price,
                    Wholesale_profit:this.Wholesale_profit,
                      company:localStorage.getItem('company'),
                        Shelf_No:this.shelf,
                          Type_of_product:this.userData.Type_of_product,
                            Name_of_the_product:this.userData.Name_of_the_product,
                              Price_bought:this.Purchasing_price,
                                amountofproduct:this.amountofproductval,
                                  Expiration_date:this.Expire_date
                  }

      this.rest_framework.getLoginPosts(this.useMOData,'ProductsDir2/'+ localStorage.getItem('company')+'/').then((results=>{
        this.rest_framework.getProductLists(localStorage.getItem('company')).then(data=>{
          this.all = data;
        });
      }))
      localStorage.removeItem('Number_of_products')
      localStorage.removeItem('Type_of_product')
      localStorage.removeItem('Product_number')
      localStorage.removeItem('Product_number')
      localStorage.removeItem('Selling_price')
      localStorage.removeItem('Number_of_products')
      localStorage.removeItem('Description')
      this.statux ='sell';
  }

  shelfno(box){
    // console.log('sell')
    this.shelf=box

  }



  submit(template){

    if(this.Purchasing_P == null){
      this.Purchasing_P =0
    }
    if(this.Purchasing_P == ''){
      this.Purchasing_P =0
    }
    if(this.quantity === 1){
      this.waka =this.price;
      this.Profit = parseFloat(this.price)*1 - parseFloat(this.Purchasing_P)*1

      this.Number_of_productsva =parseFloat(this.Number_of_productsval)*1 - 1*1;
    }
    if(this.quantity > 1){

      // this.Profit = parseFloat(this.waka)*1 - parseFloat(this.Purchasing_P)*this.quantity*1

      this.Number_of_productsva =parseFloat(this.Number_of_productsval)*1 - 1*1;
    }

    this.min = this.d.getMinutes();
    this.hour = this.d.getHours()
    this.sec = this.d.getSeconds()
    this.mwzi = this.d.getMonth()
    this.moxt = parseInt(this.mwzi) + 1
    console.log("price14: "+ this.price)
    console.log("Profit4 : "+ this.Profit)

    this.times = this.d.getFullYear() + "-" + this.moxt + "-" + this.d.getDate() + "  " + this.hour + ":" + this.min + ":" + this.sec
    this.userData.Tarehe = this.times
    this.dataCreated={
            Tarehe:this.times,
            user:localStorage.getItem('user'),
            Name_of_the_product:this.name,
            Selling_price:this.price,
            Product_seller:localStorage.getItem('user'),
            quantity:this.quantity,
            quantity_remained:this.Number_of_productsva,
            Officer_worker:localStorage.getItem('user'),
            Price_bought:this.price,
            company:localStorage.getItem('company'),
            Profit:this.Profit,
            Total_Purchased:this.waka,
            Type_of_product:this.Type_of_product,
            barcode:this.barcode,
            receipt:this.new_receipt,
            Description:this.Descriptionval,
            Product_serial:this.Serialnumberval,
            Customer_name:this.C_name,
            Customer_phone:this.C_phone,
            Total:this.waka

    }


    this.rest_framework.getLoginPosts(this.dataCreated, 'DirectorSale/' + this.company +'/'+this.pk+'/').then((result)=>{
      this.rest_framework.getProductLists(localStorage.getItem('company')).then(data=>{
        this.all = data;
        this.sum =0;
        this.given =0;


        this.rest_framework.getProductPurchasedId(this.new_receipt).then(data=>{
          this.allgiv=data
          for(let j=0; j < this.allgiv.length; j++){
            this.dom = j;
            this.sum = this.sum*1 + this.allgiv[j].Selling_price*1*this.allgiv[j].quantity*1
            if(this.allgiv[j].status !== 'deleted'){
              this.given = this.given*1 + this.allgiv[j].Selling_price*1*this.allgiv[j].quantity*1
              this.sumtax=this.given*1 * this.tax*1/100


            }



          }

        })
      });

    })




    this.diag="onn"
    // this.menu="False"
  }
  calculate(){

  }
  Register(){
    // console.log('register')
    this.statux="register"

  }
  Sell(){
    // console.log('sell')
    this.statux="sell"

  }

  addproduct(){
    this.menu="False"
    this.added="True"
  }
  Editproduct(){
    this.menu="False"
    this.Edit="True"
  }
  menufunct(n){
    this.menu="True"
    this.selling = n.Selling_price
    this.purchasing = n.Price_bought;
    this.productdis = n.Name_of_the_product
    this.Type_of_product = n.Type_of_product
    this.Productnum = n.Number_of_products
    this.Serialnumberval = n.Product_serial
    this.Descriptionval = n.Description
    this.typeprod = n.Type_of_product
    this.Expiritydateval = n.Expiration_date
    this.shelfing = n.Shelf_No
    this.pk = n.pk
    if (n.Price_bought == null){
      this.purchasing = "No data entered"
    }
    if (n.Selling_price == null){
      this.selling = "No data entered"
    }

  }
  canceled(){
    this.menu="True"
    this.added="False"

  }
  prodno(numbe){
    this.productaddnumber=this.Productnum
    if(numbe){
      this.productaddnumber=numbe

    }


  }
  sellingpriced(numbe){
    this.newprice=this.selling

    if(numbe){
      this.newprice=numbe

    }
  }

  productname1(numbe){
    this.productname=this.productdis
    if(numbe){
      this.productname=numbe

    }
  }

  typeproduct1(numbe){
    this.typeproduct=this.typeprod
    if(numbe){
      this.typeproduct=numbe

    }
    // console.log('mog2 : '+this.newprice)
  }

  purchasingpriced(numbe){

    this.purchasingprice=numbe
    if(numbe){
      this.purchasingprice=numbe
    }

  }
  shelfplace(numbe){

    this.shelfpositionprice=numbe
    if(numbe){
      this.shelfpositionprice=numbe

    }

  }
  postedit(pk){

    if(!this.productaddnumber ){
      this.productaddnumber=this.Productnum




    }
    // console.log('mog1 : '+this.newprice)
    if(!this.purchasingprice ){
      this.purchasingprice=this.purchasing



    }
    if(!this.newprice ){
      this.newprice=this.selling


    }

    this.editdata={
      'Number_of_products':this.productaddnumber,
      'Selling_price':this.newprice,
      'Price_bought':this.purchasingprice,
      'Tarehe':this.times,
      'Officer_worker':localStorage.getItem('user')
    }
    this.rest_framework.getLoginPosts(this.editdata, 'EditProduct/'+localStorage.getItem('company')+'/'+pk+'/').then((res)=>{
      this.canceled()

    })
  }
  addedw(){
    this.router.navigate(['DukaMmilikiDashboard/Added'])
  }

  submiteditproduct(pk,box25){
    if(!this.typeproduct ){
      this.typeproduct=this.typeprod




    }
    if(!this.productname ){
      this.productname=this.productdis
    }

    if(!this.productaddnumber ){
      this.productaddnumber=this.Productnum
    }


    if(!this.purchasingprice ){
      this.purchasingprice=this.purchasing



    }

    if(!this.shelfpositionprice ){
      this.shelfpositionprice=this.shelfing
    }
    if(!this.newprice ){
      this.newprice=this.selling
    }
    if(!this.Expiritydat){
      console.log('Expirity date2:  '+ this.Expiritydateval)
      this.Expiritydat=this.Expiritydateval
    }


    this.editdata={
      'Name_of_the_product':this.productname,
      'Number_of_products':this.productaddnumber,
      'Selling_price':this.newprice,
      'Price_bought':this.purchasingprice,
      'Type_of_product':this.typeproduct,
      'Shelf_No':this.shelfpositionprice,
      'Product_serial':this.Serialnumberval,
      'Description':this.Descriptionval,
      'Expiration_date':this.Expiritydat
    }
    this.rest_framework.getLoginPosts(this.editdata, 'EditProductAll/'+localStorage.getItem('company')+'/'+pk+'/').then((res)=>{
      this.getdata()
      this.productname =null
      this.productaddnumber = null
      this.newprice=null
      this.purchasingprice=null
      this.shelfpositionprice=null
      this.typeproduct=null
      this.Serialnumberval=null


    })
    this.Edit="False"
    this.menu="False"

  }

  canceled2(){
    this.menu="True"
    this.Edit="False"

  }
  canceled1(){
    this.menu="False"

  }
  clothfunc(){
    this.cloth = 'true'
    this.phoneshop="false"
    this.toolsshop="false"
    this.pharma="false"
    this.domesticretails="false"
    this.domesticwholesale="false"
    localStorage.removeItem('pharma')
    localStorage.removeItem('pharma')
    localStorage.removeItem('toolsshop')
    localStorage.removeItem('domesticwholesale')
    localStorage.setItem('domesticretails', 'true')


  }

  selprodct(ho, template){
    this.C_name=null
    this.nameoftheborrowerval=null
    this.C_phone=null
    this.phonenooftheborrowerval=null
    if(this.new_receipt ==undefined){
      if(ho.Number_of_products !== '0'){
      this.openModal(template)

      }

    }
    if(ho.Number_of_products == '0'){
      this.outofstock()

    }else{
      this.price =ho.Selling_price;
      this.quantity = 1;
      this.discount =0;
      this.Profit = ho.Profit
      this.pk = ho.pk
      this.price =ho.Selling_price;
      this.priceye =ho.Selling_price;
      this.name=ho.Name_of_the_product
      this.Serialnumberval=ho.Product_serial
      this.Number_of_productsval=ho.Number_of_products
      this.Descriptionval=ho.Description
      this.barcode=ho.barcode
      this.Type_of_product=ho.Type_of_product
      this.Purchasing_P=ho.Price_bought
      this.diag="on";

    }

  }
  search(keyword){
    console.log('keyword : ', keyword)
    if(keyword === ''){
      this.getdata()
    }
    else{
      this.dax=keyword

    }

    this.rest_framework.getSearchproduct(localStorage.getItem('company'), this.dax).then(res=>{
      this.all = res;
    })

  }
  newreceipt(){
    this.rest_framework.getProductId(localStorage.getItem('company')).then(data=>{
      this.allgiven=data

    for(const m of this.allgiven){

      this.wambo = parseInt(m.receipt) + 1
      if(String(this.wambo) !== String(m.receipt)){
        this.new_receipt =this.wambo

      }

      this.sum =0;
      this.given =0;
      this.rest_framework.getProductPurchasedId(this.new_receipt).then(data=>{
        this.allgiv=data
        for(let j=0; j < this.allgiv.length; j++){
          this.dom = j;
          this.sum = this.sum*1 + this.allgiv[j].Selling_price*1*this.allgiv[j].quantity*1
          if(this.allgiv[j].status !== 'deleted'){
            this.given = this.given*1 + this.allgiv[j].Selling_price*1*this.allgiv[j].quantity*1
            this.sumtax=this.given*1 * this.tax*1/100
          }
        }
      })
      this.rest_framework.getMmilikiDukaInfo(localStorage.getItem('user')).then(data=>{
        this.allMmilikiData=data
        for(const m of this.allMmilikiData){
          this.username = m.user
          this.post_office = m.post_office
          this.company = m.company
          this.Simu = m.Simu
          this.kata = m.kata
          this.Email = m.Email
          this.mkoa = m.mkoa
          this.mkoa = m.mkoa
          this.Tin = m.Tin_no
          this.wilaya = m.wilaya

        }

      })
    }
    })
  }
  add(){
    if(this.receipt=="off"){
      this.sum =0;
      this.given =0;
      this.rest_framework.getProductId(localStorage.getItem('company')).then(data=>{
        this.allgiven=data
      for(const m of this.allgiven){
        this.new_receipt = parseInt(m.receipt)
        this.rest_framework.getProductPurchasedId(this.new_receipt).then(data=>{
          this.allgiv=data
          for(let j=0; j < this.allgiv.length; j++){
            this.dom = j;
            this.sum = this.sum*1 + this.allgiv[j].Selling_price*1*this.allgiv[j].quantity*1
            if(this.allgiv[j].status !== 'deleted'){
              this.given = this.given*1 + this.allgiv[j].Selling_price*1*this.allgiv[j].quantity*1
              this.sumtax=this.given*1 * this.tax*1/100
            }
          }
          this.rest_framework.getMmilikiDukaInfo(localStorage.getItem('user')).then(data=>{
            this.allMmilikiData=data
            for(const m of this.allMmilikiData){
              this.username = m.user
              this.post_office = m.post_office
              this.company = m.company
              this.Simu = m.Simu
              this.kata = m.kata
              this.Email = m.Email
              this.mkoa = m.mkoa
              this.mkoa = m.mkoa
              this.Tin = m.Tin_no
              this.wilaya = m.wilaya

            }

          })

        })
      }
      })
      this.receipt="on"
    }else if(this.receipt=="on"){
      this.receipt="off"
    }
  }
  pricey(wat){
    this.price= wat
    this.Profit = parseFloat(wat)*1 - parseFloat(this.Purchasing_P)*1
    console.log("price1 : "+ this.price)
    console.log("Profit1 : "+ this.Profit)
  }
  quantitey(wat){
    this.quantity= wat
    this.waka = parseFloat(this.price) * parseFloat(wat)
    this.Profit = parseFloat(this.waka)*1 - parseFloat(this.Purchasing_P)*wat
    this.Number_of_productsva = parseInt(this.Number_of_productsval)*1 - parseInt(this.quantity)*1
    // console.log('quantity :'+ this.quantity)
    // console.log('number :'+this.Number_of_productsva)

  }
  discountey(wat){
    this.discount= wat
    if (parseInt(wat) > 0){
      // this.price = parseInt(this.price)*1 - parseInt(wat)*1
      if (this.waka){
        this.waka = parseInt(this.waka)*1 - parseInt(wat)*1
      }else{
        this.waka = parseInt(this.price)*1 - parseInt(wat)*1

      }

      this.Profit = parseInt(this.Profit)*1 - parseInt(wat)*1


    }
    else{
      this.price=this.priceye;
    }
  }
  remove(){
    this.receipt="off"
  }
  Customer_phone(box){

    this.C_phone=box
    this.phonenooftheborrowerval=box

  }
  Customer_name(box){
    this.C_name=box
    this.nameoftheborrowerval=box

  }

  PostData(){
    this.rest_framework.getLoginPosts(this.UserData, 'Order-Matumizi/' + localStorage.getItem('Orderworker') + '/').then((result)=>{

    })
  }
   onselected(){
    // this.router.navigate(['/Orders/Directors-dashboard'])
  }
  activated(){

    if(this.route=='inactive'){
      this.route ='active'
      this.tax = 18.00
      this.sum =0;
      this.given =0;
      this.rest_framework.getProductPurchasedId(this.new_receipt).then(data=>{
        this.allgiv=data
        for(let j=0; j < this.allgiv.length; j++){
          // console.log(this.all.length)
          this.dom = j;
          this.sum = this.sum*1 + this.allgiv[j].Selling_price*1*this.allgiv[j].quantity*1
          if(this.allgiv[j].status !== 'deleted'){
            this.given = this.given*1 + this.allgiv[j].Selling_price*1*this.allgiv[j].quantity*1
            this.sumtax=this.given*1 * this.tax*1/100
            // this.kilichokopwa = this.kilichokopwa*1 + this.allgiv[j].kilichokopwa*1


          }
          // else if(this.all[j].Process === 'Kuweka'){
          //   this.kuweka = this.kuweka*1 + this.all[j].Amount*1

          // }
          // this.baki = this.kutoa*1 - this.kuweka*1



          // for(const m of this.all){
          //   this.sum += m[j].Salio

          // }



            // console.log(this.sum)


        }

      })

    }else{
      this.route = 'inactive'
      this.tax = 0.00
      this.sum =0;
      this.given =0;
      this.rest_framework.getProductPurchasedId(this.new_receipt).then(data=>{
        this.allgiv=data
        for(let j=0; j < this.allgiv.length; j++){
          // console.log(this.all.length)
          this.dom = j;
          this.sum = this.sum*1 + this.allgiv[j].Selling_price*1*this.allgiv[j].quantity*1
          if(this.allgiv[j].status !== 'deleted'){
            this.given = this.given*1 + this.allgiv[j].Selling_price*1*this.allgiv[j].quantity*1
            this.sumtax=this.given*1 * this.tax*1/100
            // this.kilichokopwa = this.kilichokopwa*1 + this.allgiv[j].kilichokopwa*1


          }
          // else if(this.all[j].Process === 'Kuweka'){
          //   this.kuweka = this.kuweka*1 + this.all[j].Amount*1

          // }
          // this.baki = this.kutoa*1 - this.kuweka*1



          // for(const m of this.all){
          //   this.sum += m[j].Salio

          // }



            // console.log(this.sum)


        }

      })

    }
  }
  getproduct(){
    this.rest_framework.getProductLists(localStorage.getItem('company')).then(data=>{

      this.alls = data;
    });
   }


  download(){

    this.rest_framework.downloadFile(this.alls, localStorage.getItem('company'));
  }

  deleteproduct(yp){
    // console.log(yp)
    this.canceled1()

    this.rest_framework.deletePost('proddel/'+yp+'/').then(res=>{
      this.getdata()

    })


  }
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, {class: 'modal-sm'});
  }
  confirm(): void {
    // this.add()
    this.rest_framework.getProductId(localStorage.getItem('company')).then(data=>{
      this.allgiven=data
      for(const m of this.allgiven){
        // console.log('passsseeed :'+ m.receipt)
        this.new_receipt = parseInt(m.receipt) + 1
        // console.log('passsseeed1 :'+ m.receipt)
      }})
    // this.newreceipt()
    // this.message = 'Confirmed!';
    this.modalRef.hide();
  }

  decline(): void {
    // this.message = 'Declined!';
    this.add();
    this.modalRef.hide();
  }


  print(divName){
    this.receipt ='off'
    console.log('imepita 1')
    const printContent = document.getElementById(divName);
    console.log('imepita 2')
    const WindowPrt = window.open('', '', 'left=10,top=10,width=500,height=900,toolbar=0,scrollbars=0,status=0');
    console.log('imepita 3')
    WindowPrt.document.write('<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">', '<link href="//db.onlinewebfonts.com/c/64f1eefbab43c6104b2cfa147cb7eb24?family=Fake+Receipt" rel="stylesheet" type="text/css"/>','<link href="//db.onlinewebfonts.com/c/d821dfc602894bda0db9e4f546f9d444?family=ReceiptDemo" rel="stylesheet" type="text/css"/>');
    WindowPrt.document.write(printContent.innerHTML);
    console.log('imepita 4')
    WindowPrt.document.close();
    console.log('imepita 5')
    WindowPrt.focus();

    WindowPrt.print();

    WindowPrt.close();

  }

  print4(divName) {
    var printContents = document.getElementById(divName).innerHTML;
			var originalContents = document.body.innerHTML;

			document.body.innerHTML = printContents;
      window.print()
      document.body.innerHTML = originalContents;
  }



  TotalDatacheck(){
    this.rest_framework.getTotalProducts('?company='+localStorage.getItem('company')).then(res=>{
      this.responseData1=res;
      this.Total_sold = this.responseData1.total_stock_sold
      this.Total_profit = this.responseData1.total_stock_profit
      this.total_available = this.responseData1.total_stock_available
      this.Total_bought = this.responseData1.total_stock_bought
      console.log(JSON.stringify(this.responseData1.total_stock_profit))

    })

  }




  onfileSelected(file: FileList) {
    this.submitbutt="True"
    this.Selectd="False"
    this.selectedFile = file.item(0);

    // to show image preview
    const reader = new FileReader();
    reader.onload = (event: any ) => {
      this.imageUrl = event.target.result;
    };

    reader.readAsDataURL(this.selectedFile);



  }
  onUploadProfileData() {
    // this.user = localStorage.getItem('user');
    // this.ngProgress.start();
    this.Selectd="True"
    this.submitbutt="False"
    this.rest_framework.postProdata(this.selectedFile, this.pk).subscribe(
      data => {
        //.log('done');
        this.imagediag="False"
        this.getdata()
        // this.ngProgress.done();
      }
    );

  }

  imagedialog(mom){
    this.pk = mom.pk
    this.imagediag="True"
    this.imageUrl=mom.photo
  }

  uploadimage(){

  }


  prev(){
    // console.log(this.prev1)
    this.rest_framework.getTransactionlistWorker1(this.prev1).then(data=>{
      this.allz=data;
      // for(const j of this.all){
      //   this.next1 = j.next;
      //   console.log('1: '+ this.next1)
      //   console.log('2: '+ j.next)

      // }
      this.all = this.allz.results;
      this.next1 = this.allz.next
      this.prev1 = this.allz.previous
      // for(const n of this.all.results){
      //   this.allz = n;

      // }

    })

  }
  next(){
    // console.log(this.next1)
    this.rest_framework.getTransactionlistWorker1(this.next1).then(data=>{
      this.allz=data;

      this.all = this.allz.results;
      this.prev1 = this.allz.previous
      this.next1 = this.allz.next


    })

  }






}
