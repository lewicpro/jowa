import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Response } from '@angular/http';
import { RequestOptions, RequestMethod } from '@angular/http';
import {Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { IPosts } from './restframework.model';
import { NyumbaDashboardRoomPriceComponent } from '../nyumba-dashboard-room-price/nyumba-dashboard-room-price.component';
import { ActivatedRoute } from '@angular/router';

@Injectable()
export class RestframeworkService {
    link='http://localhost:8000';
    // link='https://igtv.africa';
    company_username =localStorage.getItem('company_username/');
    usercreate = this.link+'/api/Adworker/';
    getusercreate = this.link+'/api/Adworker/UserCreate/';
    usercreatemo = this.link+'/api/Adworker/Register/';
    Dukage = this.link+'/api/Adworker/Dukage/';
    usercreatemoduka = this.link+'/api/Adworker/RegisterWamiliki/';
    malipo = this.link+'/api/Adworker/Malipo/';
    malipo2 = this.link+'/api/Adworker/Malipo2/';
    mkopo = this.link+'/api/Adworker/Mkopo/';
    Jumla = this.link+'/api/Adworker/Jumla/1/';
    JumlaNyumba = this.link+'/api/Adworker/Jumla/1/';
    userinfo = this.link+'/api/Adworker/Info/';
    MalipoGet;
    MalipoSingl;
    OveralDirector;
    Balance;
    username;
    idee;
    usernamemop;
    matumiziWorker = this.link+'/api/Adworker/MatumiziWorker/';
    microData;
    OwnerWakala;
    userinfoNyumba = this.link+'/api/Adworker/InfoNyumba/';
    auth = this.link+'/api/Adworker/LoginAuth/';
    PersonalVyumba = this.link+'/api/Adworker/Vyumba/';
    OrderDirectors = this.link+'/api/Adworker/Director/';
    OrderWorker = this.link+'/api/Adworker/Worker/';
    OrderManager = this.link+'/api/Adworker/Manager/';
    bankstat = this.link+'/api/Adworker/Statement/';
    atm = this.link+'/api/Adworker/Atm/';
    OwnerKitambulisho = this.link+'/api/Adworker/OwnerKitambulisho/';
    OwnerSlip = this.link+'/api/Adworker/OwnerSlip/';
    OwnerMkataba = this.link+'/api/Adworker/OwnerMkataba/';
    OwnerApplication = this.link+'/api/Adworker/OwnerApplication/';
    infos = this.link+'/api/Adworker/infos/';
    infosAll = this.link+'/api/Adworker/NyumbaAll/';
    PersonalWeka = this.link+'/api/Adworker/PersonalWeka/';
    MkopoDeposit = this.link+'/api/Adworker/MkopoDeposit/';
    MkopoWithdraw = this.link+'/api/Adworker/MkopoWithdraw/';
    Microcredit = this.link+'/api/Adworker/Microcredit/';
    PersonalToa = this.link+'/api/Adworker/PersonalToa/';
    NyumbaMiezi = this.link+'/api/Adworker/infosNyumba/';
    userinfoNyumbaThem = this.link+'/api/Adworker/InfoNyumbaThem/';
    OwnerDeposit = this.link+'/api/Adworker/OwnerDeposit/';
    OwnerWithdraw = this.link+'/api/Adworker/OwnerWithdraw/';
    NyumbaMieziToa = this.link+'/api/Adworker/MieziToaNyumba/';
    toamiez = this.link+'/api/Adworker/MieziToa/';
    identity = this.link+'/api/Adworker/Identity/';
    poste = this.link+'/api/Adworker/wapangajiDeleted/';
    posteUpdate = this.link+'/api/Adworker/wapangaji/';
    HouseInfo = this.link+'/api/Adworker/HouseInfo/';
    houses = this.link+'/api/Adworker/house/'
    Slip = this.link+'/api/Adworker/Slip/';
    Slipe = this.link+'/api/Adworker/Slipe/';
    kutambulisho = this.link+'/api/Adworker/Kitambulisho/';
    messeji = this.link+'/api/Adworker/Meseji/';
    application = this.link+'/api/Adworker/Application_form/';
    Mkataba = this.link+'/api/Adworker/Mkataba/';
    Profile = this.link+'/api/Adworker/Profile/';
    ProfileNyumba = this.link+'/api/Adworker/ProfileNyumba/';
    nyumba = this.link+'/api/Adworker/Nyumba/';
    UserNyumba = this.link+'/api/Adworker/NyumbaInfourl/';
    siku = this.link+'/api/Adworker/Siku/';
    sikuKopesha = this.link+'/api/Adworker/Siku-Kopesha/';
    wapangaji = this.link+'/api/Adworker/';
    wapangajie = this.link+'/api/Adworker/wapangaji/';
    wakala = this.link+'/api/Adworker/wakala/';
    workersTransactions = this.link+'/api/Adworker/';
    Mmiliki = this.link+'/api/Adworker/WakalaMmiliki/';
    wakalaWorkers = this.link+'/api/Adworker/worker/';
    marekebisho= this.link+'/api/Adworker/marekebisho/';
    micro= this.link+'/api/Adworker/JumlaMicrofinance2/';
    microregisters;
    waliokopaMkopo;
    microToaData;
    rente;
    malipoz;
    process
    worker;
    searchdata;
    datar;
    datedata;
    datara;
    rentee;
    wakalaq;
    wakalaWorker;
    givenid;
    Worker: string;



  constructor(public http: HttpClient, public route:ActivatedRoute,) {
    // this.givenid = parseInt(this.route.snapshot.paramMap.get('id'))
      this.company_username =localStorage.getItem('company_username')
      this.datar =localStorage.getItem('id')
   }



  getLists() {
    return new Promise(resolve => {

          this.http.get(this.usercreatemo).subscribe(data => {
              resolve(data);
              },

          err => {
              console.log(err);
              });
          });
    }

  getListsTotal(id) {
    return new Promise(resolve => {

          this.http.get(this.link+'/api/Adworker/getRegister/' + id + '/').subscribe(data => {
              resolve(data);
              },

          err => {
              console.log(err);
              });
          });
    }
    getremained(id) {
    return new Promise(resolve => {

          this.http.get(this.link+'/api/Adworker/getremained/'+ localStorage.getItem('company')+ '/' + id + '/').subscribe(data => {
              resolve(data);
              },

          err => {
              console.log(err);
              });
          });
    }
    getaddedproducts(company) {
    return new Promise(resolve => {

          this.http.get(this.link+'/api/Adworker/AddedProducts/' + company + '/').subscribe(data => {
              resolve(data);
              },

          err => {
              console.log(err);
              });
          });
    }

  dukaz() {
    return new Promise(resolve => {

          this.http.get(this.Dukage).subscribe(data => {
              resolve(data);
              },

          err => {
              console.log(err);
              });
          });
    }

    postProdata(selectedFile: any, pk: any){
      // alert('imefikaaaaa')
      const endpoint = this.link+'/api/Adworker/productimage/'+pk+'/';
      const formData: FormData = new FormData();


      const headers = new HttpHeaders();
      formData.append('photo', selectedFile);
      // alert(formData.append('photo', selectedFile))
      // formData.append('user', user);
      // formData.append('pin', pin);
      // formData.append('phone', phone);
      return this.http
            .put(endpoint, formData);


  }

  getDukaWamilikiLists() {
    return new Promise(resolve => {

          this.http.get(this.usercreatemoduka).subscribe(data => {
              resolve(data);
              },

          err => {
              console.log(err);
              });
          });
    }

  getDirectorsLists() {
    return new Promise(resolve => {

          this.http.get(this.OrderDirectors).subscribe(data => {
              resolve(data);
              },

          err => {
              console.log(err);
              });
          });
    }
  getManagerLists() {
    return new Promise(resolve => {

          this.http.get(this.OrderManager).subscribe(data => {
              resolve(data);
              },

          err => {
              console.log(err);
              });
          });
    }

    getDirectorManagerLists(username) {
    this.datar =localStorage.getItem('id')
      this.microregisters = this.link+'/api/Adworker/DirectorManagers/' + username + '/';
        return new Promise(resolve => {

            this.http.get(this.microregisters).subscribe(data => {
                resolve(data);
                },

            err => {
                console.log(err);
                });
            });
    }
  getDukaPaymentsLists(username) {
    this.datar =localStorage.getItem('id')
      this.microregisters = this.link+'/api/Adworker/PaymentsDuka/' + username + '/';
        return new Promise(resolve => {

            this.http.get(this.microregisters).subscribe(data => {
                resolve(data);
                },

            err => {
                console.log(err);
                });
            });
    }


  PostDukaWorkers(username) {
    this.datar =localStorage.getItem('id')
      this.microregisters = this.link+'/api/Adworker/DukaInfo/' + username + '/';
        return new Promise(resolve => {

            this.http.get(this.microregisters).subscribe(data => {
                resolve(data);
                },

            err => {
                console.log(err);
                });
            });
    }

  getWorkersDirectorLists(username) {
    this.datar =localStorage.getItem('id')
      this.microregisters = this.link+'/api/Adworker/DirectorWorkers/' + username + '/';
        return new Promise(resolve => {

            this.http.get(this.microregisters).subscribe(data => {
                resolve(data);
                },

            err => {
                console.log(err);
                });
            });
    }
  getWorkerLists() {
    return new Promise(resolve => {

          this.http.get(this.OrderWorker).subscribe(data => {
              resolve(data);
              },

          err => {
              console.log(err);
              });
          });
    }

  getOrderClientLists(username) {
    this.datar =localStorage.getItem('id')
      this.microregisters = this.link+'/api/Adworker/OrderClients/' + username + '/';
    return new Promise(resolve => {

          this.http.get(this.microregisters).subscribe(data => {
              resolve(data);
              },

          err => {
              console.log(err);
              });
          });
    }
    getDirectorsMatumiziLists(username) {
    this.datar =localStorage.getItem('id')
      this.microregisters = this.link+'/api/Adworker/DirectorMatumizi/' + username + '/';
    return new Promise(resolve => {

          this.http.get(this.microregisters).subscribe(data => {
              resolve(data);
              },

          err => {
              console.log(err);
              });
          });
    }
  getMatumiziLists(username) {
    this.datar =localStorage.getItem('id')
      this.microregisters = this.link+'/api/Adworker/OrderLists/' + username + '/';
    return new Promise(resolve => {

          this.http.get(this.microregisters).subscribe(data => {
              resolve(data);
              },

          err => {
              console.log(err);
              });
          });
    }

  getMatumiziLists2(username) {
    this.datar =localStorage.getItem('id')
      this.microregisters = this.link+'/api/Adworker/MatumiziWorker/' + username + '/';
    return new Promise(resolve => {

          this.http.get(this.microregisters).subscribe(data => {
              resolve(data);
              },

          err => {
              console.log(err);
              });
          });
    }

  getOrderMatumiziLists(username) {
    this.datar =localStorage.getItem('id')
      this.microregisters = this.link+'/api/Adworker/OrderMatumizi/' + username + '/';
    return new Promise(resolve => {

          this.http.get(this.microregisters).subscribe(data => {
              resolve(data);
              },

          err => {
              console.log(err);
              });
          });
    }
    getOrderReport(username) {
    this.datar =localStorage.getItem('id')
      this.microregisters = this.link+'/api/Adworker/OrderReport/' + username + '/';
    return new Promise(resolve => {

          this.http.get(this.microregisters).subscribe(data => {
              resolve(data);
              },

          err => {
              console.log(err);
              });
          });
    }

    getOrderOrderReportWorkerReport(username) {
    this.datar =localStorage.getItem('id')
      this.microregisters = this.link+'/api/Adworker/OrderReportWorker/' + username + '/';
    return new Promise(resolve => {

          this.http.get(this.microregisters).subscribe(data => {
              resolve(data);
              },

          err => {
              console.log(err);
              });
          });
    }


    getOrderApprovaReport(username) {
    this.datar =localStorage.getItem('id')
      this.microregisters = this.link+'/api/Adworker/OrderApprouvedReportWorker/' + username + '/';
    return new Promise(resolve => {

          this.http.get(this.microregisters).subscribe(data => {
              resolve(data);
              },

          err => {
              console.log(err);
              });

          });
    }
getManagerOrderLists(username) {
    this.datar =localStorage.getItem('id')
      this.microregisters = this.link+'/api/Adworker/OrderManagerListWorker/' + username + '/';
    return new Promise(resolve => {

          this.http.get(this.microregisters).subscribe(data => {
              resolve(data);
              },

          err => {
              console.log(err);
              });
          });
    }

getWorkerOrderLists(username) {
    this.datar =localStorage.getItem('id')
      this.microregisters = this.link+'/api/Adworker/OrderListWorker/' + username + '/';
    return new Promise(resolve => {

          this.http.get(this.microregisters).subscribe(data => {
              resolve(data);
              },

          err => {
              console.log(err);
              });
          });
    }
getDirectorOrderLists(username) {
    this.datar =localStorage.getItem('id')
      this.microregisters = this.link+'/api/Adworker/Director-Accept/' + username + '/';
    return new Promise(resolve => {

          this.http.get(this.microregisters).subscribe(data => {
              resolve(data);
              },

          err => {
              console.log(err);
              });
          });
    }

getDirectorOrderListsAll(username) {
    this.datar =localStorage.getItem('id')
      this.microregisters = this.link+'/api/Adworker/AllOrders/' + username + '/';
    return new Promise(resolve => {

          this.http.get(this.microregisters).subscribe(data => {
              resolve(data);
              },

          err => {
              console.log(err);
              });
          });
    }

  getWaliokopaLists() {
    this.datar =localStorage.getItem('id')
      this.microregisters = this.link+'/api/Adworker/DukaWaliokopa/';
    return new Promise(resolve => {

          this.http.get(this.microregisters).subscribe(data => {
              resolve(data);
              },

          err => {
              console.log(err);
              });
          });
    }

  getMatumiziDukaLists() {
    this.datar =localStorage.getItem('id')
      this.microregisters = this.link+'/api/Adworker/DukaWebMatumizi/';
    return new Promise(resolve => {

          this.http.get(this.microregisters).subscribe(data => {
              resolve(data);
              },

          err => {
              console.log(err);
              });
          });
    }

    getMalipoDukaLists() {
    this.datar =localStorage.getItem('id')
      this.microregisters = this.link+'/api/Adworker/DukaWebMalipo/';
    return new Promise(resolve => {

          this.http.get(this.microregisters).subscribe(data => {
              resolve(data);
              },

          err => {
              console.log(err);
              });
          });
    }

  getWakalaLists() {
    return new Promise(resolve => {

          this.http.get(this.wakala).subscribe(data => {
              resolve(data);
              },

          err => {
              console.log(err);
              });
          });
    }

  getMmilikiList() {
    return new Promise(resolve => {

          this.http.get(this.Mmiliki).subscribe(data => {
              resolve(data);
              },

          err => {
              console.log(err);
              });
          });
    }
  getWakalaWorkersLists() {
    return new Promise(resolve => {

          this.http.get(this.wakalaWorkers).subscribe(data => {
              resolve(data);
              },

          err => {
              console.log(err);
              });
          });
    }
  getJumlaMicrofinance() {
    return new Promise(resolve => {

          this.http.get(this.micro).subscribe(data => {
              resolve(data);
              },

          err => {
              console.log(err);
              });
          });
    }
  getListsMicrocredit() {
    this.company_username =localStorage.getItem('company_username')
    this.datar =localStorage.getItem('id')
      this.microregisters = this.link+'/api/Adworker/purchases/' + this.company_username + '/';
    return new Promise(resolve => {

          this.http.get(this.Microcredit).subscribe(data => {
              resolve(data);
              },

          err => {
              console.log(err);
              });
          });
    }

  getBidhaaList() {
    this.company_username =localStorage.getItem('company_username')
    this.datar =localStorage.getItem('id')
      this.microregisters = this.link+'/api/Adworker/Bidhaa/';
    return new Promise(resolve => {

          this.http.get(this.microregisters).subscribe(data => {
              resolve(data);
              },

          err => {
              console.log(err);
              });
          });
    }

  getTransactionlistWorker() {
    this.worker =localStorage.getItem('worker-dir')
    this.process =localStorage.getItem('process')
    this.microregisters = this.link+'/api/Adworker/List/' + this.worker + '/' + this.process + '/';
    return new Promise(resolve => {

          this.http.get(this.microregisters).subscribe(data => {
              resolve(data);
              },

          err => {
              console.log(err);
              });
          });
    }

  getMadukaYote() {
    this.worker =localStorage.getItem('worker-dir')
    this.process =localStorage.getItem('process')
    this.microregisters = this.link+'/api/Adworker/AllDuka/';
    return new Promise(resolve => {

          this.http.get(this.microregisters).subscribe(data => {
              resolve(data);
              },

          err => {
              console.log(err);
              });
          });
    }

  getDukaZote(username) {
    this.worker =localStorage.getItem('worker-dir')
    this.process =localStorage.getItem('process')
    this.microregisters = this.link+'/api/Adworker/dukazote/'+username+'/';
    return new Promise(resolve => {

          this.http.get(this.microregisters).subscribe(data => {
              resolve(data);
              },

          err => {
              console.log(err);
              });
          });
    }
  getWorkersDukaZote(username) {
    this.worker =localStorage.getItem('worker-dir')
    this.process =localStorage.getItem('process')
    this.microregisters = this.link+'/api/Adworker/workersdukazote/'+username+'/';
    return new Promise(resolve => {

          this.http.get(this.microregisters).subscribe(data => {
              resolve(data);
              },

          err => {
              console.log(err);
              });
          });
    }

    getMtajiListWakala() {
    this.worker =localStorage.getItem('worker-dir')
    this.process =localStorage.getItem('process')
    this.microregisters = this.link+'/api/Adworker/ListMtaji/' + localStorage.getItem('wakala') + '/';
    return new Promise(resolve => {

          this.http.get(this.microregisters).subscribe(data => {
              resolve(data);
              },

          err => {
              console.log(err);
              });
          });
    }
    getMtandao(m) {
        this.worker =localStorage.getItem('worker-dir')

        this.microregisters = this.link+'/api/Adworker/Mtandao/' + m + '/';
        return new Promise(resolve => {

              this.http.get(this.microregisters).subscribe(data => {
                  resolve(data);
                  },

              err => {
                  console.log(err);
                  });
              });
        }

    getCustomers(m) {
        this.worker =localStorage.getItem('worker-dir')

        this.microregisters = this.link+'/api/Adworker/Customer/' + m + '/';
        return new Promise(resolve => {

              this.http.get(this.microregisters).subscribe(data => {
                  resolve(data);
                  },

              err => {
                  console.log(err);
                  });
              });
        }

  getworkerTimeTransaction(bank, start, end) {
    this.worker =localStorage.getItem('worker-dir')
    this.process =localStorage.getItem('process')
    this.microregisters = this.link+'/api/Adworker/GeneralTimerReport/' + this.worker + '/' + bank + '/' + start + '/' + end + '/';
    return new Promise(resolve => {

          this.http.get(this.microregisters).subscribe(data => {
              resolve(data);
              },

          err => {
              console.log(err);
              });
          });
    }


  getMalipoTransaction(company, start, end) {
    // this.worker =localStorage.getItem('user')
    this.username =localStorage.getItem('user')
    this.microregisters = this.link+'/api/Adworker/GeneralMalipoReport/' + this.username + '/' + company + '/' + start + '/' + end + '/';
    return new Promise(resolve => {

          this.http.get(this.microregisters).subscribe(data => {
              resolve(data);
              },

          err => {
              console.log(err);
              });
          });
    }

  getMkopoTransaction1(company, start, end) {
    // this.worker =localStorage.getItem('user')
    this.username =localStorage.getItem('user')
    this.microregisters = this.link+'/api/Adworker/GeneralMkopoReport/' + this.username + '/' + company + '/' + start + '/' + end + '/';
    return new Promise(resolve => {

          this.http.get(this.microregisters).subscribe(data => {
              resolve(data);
              },

          err => {
              console.log(err);
              });
          });
    }

  getOrderWorkers() {
    // this.worker =localStorage.getItem('user')
    this.username =localStorage.getItem('user')
    this.microregisters = this.link+'/api/Adworker/Workers/';
    return new Promise(resolve => {

          this.http.get(this.microregisters).subscribe(data => {
              resolve(data);
              },

          err => {
              console.log(err);
              });
          });
    }

  getOrderManagerWorkers(n) {
    // this.worker =localStorage.getItem('user')
    this.username =localStorage.getItem('user')
    this.microregisters = this.link+'/api/Adworker/ManagerWorkers/' + n + '/';
    return new Promise(resolve => {

          this.http.get(this.microregisters).subscribe(data => {
              resolve(data);
              },

          err => {
              console.log(err);
              });
          });
    }

  getTransactionlistWorker1(n) {
    this.worker =localStorage.getItem('worker-dir')
    this.process =localStorage.getItem('process')
    this.microregisters = n;
    return new Promise(resolve => {

          this.http.get(this.microregisters).subscribe(data => {
              resolve(data);
              },

          err => {
              console.log(err);
              });
          });
    }
    getStoredLists() {
    this.idee =localStorage.getItem('id')
    this.process =localStorage.getItem('process')
    this.microregisters = this.link+'/api/Adworker/Regstr/' + this.idee + '/';
    console.log('second one')
    return new Promise(resolve => {

          this.http.get(this.microregisters).subscribe(data => {
              resolve(data);
              },

          err => {
              console.log(err);
              });
          });
    }

    getPartReport(company,day,date) {
    this.idee =localStorage.getItem('id')
    this.process =localStorage.getItem('process')
    this.microregisters = this.link+'/api/Adworker/dukadatareport/' + company +'/'+ day + '/' + date + '/';
    console.log('second one')
    return new Promise(resolve => {

          this.http.get(this.microregisters).subscribe(data => {
              resolve(data);
              },

          err => {
              console.log(err);
              });
          });
    }
    getOrderManagerProducts(m) {
    this.idee =localStorage.getItem('id')
    this.process =localStorage.getItem('process')
    this.microregisters = this.link+'/api/Adworker/Manager-Products/' + m + '/';
    console.log('second one')
    return new Promise(resolve => {

          this.http.get(this.microregisters).subscribe(data => {
              resolve(data);
              },

          err => {
              console.log(err);
              });
          });
    }

    getStoredProfilestats() {
    this.idee =localStorage.getItem('id')
    this.process =localStorage.getItem('process')
    this.microregisters = this.link+'/api/Adworker/StoredProfile/' + this.idee + '/';
    console.log('second one')
    return new Promise(resolve => {

          this.http.get(this.microregisters).subscribe(data => {
              resolve(data);
              },

          err => {
              console.log(err);
              });
          });
    }

    getReportGen(m, n) {

        console.log(m)
        this.idee =localStorage.getItem('id')
        this.process =localStorage.getItem('process')
        this.microregisters = this.link+'/api/Adworker/General/' + m + '/' + n + '/';
        return new Promise(resolve => {

            this.http.get(this.microregisters).subscribe(data => {
                resolve(data);
                },

            err => {
                console.log(err);
                });
            });
    }

  getOverAllWorkerData() {
    this.worker =localStorage.getItem('worker-dir')
    this.process =localStorage.getItem('process')
    this.microregisters = this.link+'/api/Adworker/WorkerInfo/' + this.worker + '/';
    return new Promise(resolve => {

          this.http.get(this.microregisters).subscribe(data => {
              resolve(data);
              },

          err => {
              console.log(err);
              });
          });
    }

  getDirectorDukaProfile(Director) {
    this.worker =localStorage.getItem('worker-dir')
    this.process =localStorage.getItem('process')
    this.microregisters = this.link+'/api/Adworker/DirectorDukaInfo/' + Director + '/';
    return new Promise(resolve => {

          this.http.get(this.microregisters).subscribe(data => {
              resolve(data);
              },

          err => {
              console.log(err);
              });
          });
    }
    getWorkerDukaProfile(worker) {
    this.worker =localStorage.getItem('worker-dir')
    this.process =localStorage.getItem('process')
    this.microregisters = this.link+'/api/Adworker/DukaInfo/' + worker + '/';
    return new Promise(resolve => {

          this.http.get(this.microregisters).subscribe(data => {
              resolve(data);
              },

          err => {
              console.log(err);
              });
          });
    }


  getKilichobakilist(m) {
    this.worker =localStorage.getItem('worker-dir')
    this.process =localStorage.getItem('process')
    this.microregisters = this.link+'/api/Adworker/Kilichobaki/' + m + '/';
    return new Promise(resolve => {

          this.http.get(this.microregisters).subscribe(data => {
              resolve(data);
              },

          err => {
              console.log(err);
              });
          });
    }

  getOrderCustomersLists(m) {
    this.worker =localStorage.getItem('worker-dir')
    this.process =localStorage.getItem('process')
    this.microregisters = this.link+'/api/Adworker/Customers/' + m + '/';
    return new Promise(resolve => {

          this.http.get(this.microregisters).subscribe(data => {
              resolve(data);
              },

          err => {
              console.log(err);
              });
          });
    }
    getOrderProducts() {
    this.worker =localStorage.getItem('worker-dir')
    this.process =localStorage.getItem('process')
    this.microregisters = this.link+'/api/Adworker/OrderProducts/';
    return new Promise(resolve => {

          this.http.get(this.microregisters).subscribe(data => {
              resolve(data);
              },

          err => {
              console.log(err);
              });
          });
    }
    getReportSuccessLists(m) {
    this.worker =localStorage.getItem('worker-dir')
    this.process =localStorage.getItem('process')
    this.microregisters = this.link+'/api/Adworker/Success/' + m + '/';
    return new Promise(resolve => {

          this.http.get(this.microregisters).subscribe(data => {
              resolve(data);
              },

          err => {
              console.log(err);
              });
          });
    }


  getDirectorWorkerslist(m) {
    this.worker =localStorage.getItem('worker-dir')
    this.process =localStorage.getItem('process')
    this.microregisters = this.link+'/api/Adworker/DirectorWorkers/' + m + '/';
    return new Promise(resolve => {

          this.http.get(this.microregisters).subscribe(data => {
              resolve(data);
              },

          err => {
              console.log(err);
              });
          });
    }

  getWorkerloginddtails() {
    this.worker =localStorage.getItem('user')
    this.process =localStorage.getItem('process')
    this.microregisters = this.link+'/api/Adworker/detailWorker/' + this.worker + '/';
    return new Promise(resolve => {

          this.http.get(this.microregisters).subscribe(data => {
              resolve(data);
              },

          err => {
              console.log(err);
              });
          });
    }

  getInfoStoredData() {
    this.idee =localStorage.getItem('id')
    this.process =localStorage.getItem('process')
    this.microregisters = this.link+'/api/Adworker/got/' + this.idee + '/';
    return new Promise(resolve => {

          this.http.get(this.microregisters).subscribe(data => {
              resolve(data);
              },

          err => {
              console.log(err);
              });
          });
    }

  getListsWakalaWorker() {
    this.wakalaWorker =localStorage.getItem('wakala')
    this.datar =localStorage.getItem('id')
      this.microregisters = this.link+'/api/Adworker/wakala/' + this.wakalaWorker + '/';
    return new Promise(resolve => {

          this.http.get(this.microregisters).subscribe(data => {
              resolve(data);
              },

          err => {
              console.log(err);
              });
          });
    }
    getReport() {
    // this.wakalaWorker =localStorage.getItem('wakala')
    this.worker =localStorage.getItem('worker-dir')
      this.microregisters = this.link+'/api/Adworker/TransactionWorkers/' + this.worker + '/';
    return new Promise(resolve => {

          this.http.get(this.microregisters).subscribe(data => {
              resolve(data);
              },

          err => {
              console.log(err);
              });
          });
    }

  getListsWorkers() {
    this.Worker =localStorage.getItem('user')
    this.datar =localStorage.getItem('id')
      this.microregisters = this.link+'/api/Adworker/TransactionWorkers/' + this.Worker + '/';
    return new Promise(resolve => {

          this.http.get(this.microregisters).subscribe(data => {
              resolve(data);
              },

          err => {
              console.log(err);
              });
          });
    }


  getListsMmilikiWakala() {
    //   console.log('IMEFIKA KWENY WAKALA')
    this.wakalaWorker =localStorage.getItem('Director')
    this.datar =localStorage.getItem('id')
      this.microregisters = this.link+'/api/Adworker/DirectorsWakala/' + this.wakalaWorker + '/';
    return new Promise(resolve => {

          this.http.get(this.microregisters).subscribe(data => {
              resolve(data);
              },

          err => {
              console.log(err);
              });
          });
    }

  getListsOveralDirector() {
    //   console.log('IMEFIKA KWENY WAKALA')
    this.OveralDirector =localStorage.getItem('Director')
    this.datar =localStorage.getItem('id')
      this.microregisters = this.link+'/api/Adworker/OveralDirector/' + this.OveralDirector + '/';
    return new Promise(resolve => {

          this.http.get(this.microregisters).subscribe(data => {
              resolve(data);
              },

          err => {
              console.log(err);
              });
          });
    }

  getOrderDashboard(username) {
    //   console.log('IMEFIKA KWENY WAKALA')
    this.OveralDirector =localStorage.getItem('Director')
    this.datar =localStorage.getItem('id')
      this.microregisters = this.link+'/api/Adworker/OrderDash/' + username + '/';
    return new Promise(resolve => {

          this.http.get(this.microregisters).subscribe(data => {
              resolve(data);
              },

          err => {
              console.log(err);
              });
          });
    }
    getDirectorWakalaWorkersLists() {
    //   console.log('IMEFIKA KWENY WAKALA')
    this.wakalaWorker =localStorage.getItem('Director')
    this.datar =localStorage.getItem('id')
      this.microregisters = this.link+'/api/Adworker/DirectorsWakalaWorker/' + this.wakalaWorker + '/';
    return new Promise(resolve => {

          this.http.get(this.microregisters).subscribe(data => {
              resolve(data);
              },

          err => {
              console.log(err);
              });
          });
    }
    getPaymentLists() {
    // this.company_username =localStorage.getItem('company_username')
      this.datara =localStorage.getItem('idfront')
      this.rente = this.link+'/api/Adworker/idfront/' + this.datara + '/';
    //   console.log(this.rente)
    return new Promise(resolve => {

          this.http.get(this.rente).subscribe(data => {
              resolve(data);
              },

          err => {
              console.log(err);
              });
          });
    }

  getUserRent() {
    // this.company_username =localStorage.getItem('company_username')
      this.datara =localStorage.getItem('mpangajiid')
      this.rente = this.link+'/api/Adworker/RentPrice/' + this.datara + '/';
    //   console.log(this.rente)
    return new Promise(resolve => {

          this.http.get(this.rente).subscribe(data => {
              resolve(data);
              },

          err => {
              console.log(err);
              });
          });
    }

  getUserId() {
    this.givenid =localStorage.getItem('genid')
    //   this.givenid =parseInt(this.route.snapshot.paramMap.get('id'))
      this.rentee = this.link+'/api/Adworker/GeneratedId/' + this.givenid + '/';
    //   console.log(this.rente)
    return new Promise(resolve => {

          this.http.get(this.rentee).subscribe(data => {
              resolve(data);
              },

          err => {
              console.log(err);
              });
          });
    }
//   getUsersDateData() {
//     this.company_username =localStorage.getItem('company_username')
//     this.datedata =localStorage.getItem(l'datedata')
//     //   this.givenid =parseInt(this.route.snapshot.paramMap.get('id'))
//       this.rentee = this.link+'/api/Adworker/Geto/' + this.company_username + '/' + this.datedata;
//       console.log(this.rente)
//     return new Promise(resolve => {

//           this.http.get(this.rentee).subscribe(data => {
//               resolve(data);
//               },

//           err => {
//               console.log(err);
//               });
//           });
//     }

  getUsersDateData2(momo, start, end) {
    // this.company_username =localStorage.getItem('company_username')
    // this.datedata =localStorage.getItem(l'datedata')
    //   this.givenid =parseInt(this.route.snapshot.paramMap.get('id'))
      this.rentee = this.link+'/api/Adworker/DukaReportReport/' + momo+'/'+start+'/'+end+'/';
      console.log(this.rentee)
    return new Promise(resolve => {

          this.http.get(this.rentee).subscribe(data => {
              resolve(data);
              },

          err => {
              console.log(err);
              });
          });
    }
    getUsersSearch(momo, start, end) {
    // this.company_username =localStorage.getItem('company_username')
    // this.datedata =localStorage.getItem(l'datedata')
    //   this.givenid =parseInt(this.route.snapshot.paramMap.get('id'))
      this.rentee = this.link+'/api/Adworker/dategiven/' + momo+'/'+start+'/'+end+'/';
      console.log(this.rentee)
    return new Promise(resolve => {

          this.http.get(this.rentee).subscribe(data => {
              resolve(data);
              },

          err => {
              console.log(err);
              });
          });
    }
    getBorrowSearch(momo, start, end) {
    // this.company_username =localStorage.getItem('company_username')
    // this.datedata =localStorage.getItem(l'datedata')
    //   this.givenid =parseInt(this.route.snapshot.paramMap.get('id'))
      this.rentee = this.link+'/api/Adworker/borrowreport/' + momo+'/'+start+'/'+end+'/';
      console.log(this.rentee)
    return new Promise(resolve => {

          this.http.get(this.rentee).subscribe(data => {
              resolve(data);
              },

          err => {
              console.log(err);
              });
          });
    }



  getWakalaOverallTransactionData() {
    this.wakalaq =localStorage.getItem('wakala')
    this.OwnerWakala =localStorage.getItem('OwnerWakala')
    //   this.givenid =parseInt(this.route.snapshot.paramMap.get('id'))
      this.rentee = this.link+'/api/Adworker/TransactionWakala/' + this.wakalaq + '/';
    //   console.log(this.rente)
    return new Promise(resolve => {

          this.http.get(this.rentee).subscribe(data => {
              resolve(data);
              },

          err => {
              console.log(err);
              });
          });
    }

    getProcessors(wakala) {
    this.wakalaq =localStorage.getItem('wakala')
    this.OwnerWakala =localStorage.getItem('OwnerWakala')
    //   this.givenid =parseInt(this.route.snapshot.paramMap.get('id'))
      this.rentee = this.link+'/api/Adworker/GetProcessors/' + wakala + '/';
    //   console.log(this.rente)
    return new Promise(resolve => {

          this.http.get(this.rentee).subscribe(data => {
              resolve(data);
              },

          err => {
              console.log(err);
              });
          });
    }
  getUsersDateData() {
    this.company_username =localStorage.getItem('company_username')
    this.datedata =localStorage.getItem('datedata')
    //   this.givenid =parseInt(this.route.snapshot.paramMap.get('id'))
      this.rentee = this.link+'/api/Adworker/Geto/' + this.company_username + '/' + this.datedata;
    //   console.log(this.rente)
    return new Promise(resolve => {

          this.http.get(this.rentee).subscribe(data => {
              resolve(data);
              },

          err => {
              console.log(err);
              });
          });
    }

  getUsersWatejaSearch() {
    this.company_username =localStorage.getItem('company_username')
    this.searchdata =localStorage.getItem('searchdata')
    //   this.givenid =parseInt(this.route.snapshot.paramMap.get('id'))
      this.rentee = this.link+'/api/Adworker/search/' + this.company_username + '/' + this.searchdata;
    //   console.log(this.rente)
    return new Promise(resolve => {

          this.http.get(this.rentee).subscribe(data => {
              resolve(data);
              },

          err => {
              console.log(err);
              });
          });
    }

  getMicrocreditData() {
    this.company_username =localStorage.getItem('company_username')
    this.datar =localStorage.getItem('id')
      this.microData = this.link+'/api/Adworker/JumlaMicrofinance2/' + this.company_username + '/';
    return new Promise(resolve => {

          this.http.get(this.microData).subscribe(data => {
              resolve(data);
              },

          err => {
              console.log(err);
              });
          });
    }

  getMieziMicrocredit() {
    this.company_username =localStorage.getItem('company_username')
    this.datar =localStorage.getItem('id')
      this.microData = this.link+'api/Adworker/MieziMicrofinance/' + this.company_username + '/';
    return new Promise(resolve => {

          this.http.get(this.microData).subscribe(data => {
              resolve(data);
              },

          err => {
              console.log(err);
              });
          });
    }
   getMieziToaMicrocredit() {
    this.company_username =localStorage.getItem('company_username')
    this.datar =localStorage.getItem('id')
      this.microToaData = this.link+'/api/Adworker/MieziToaMicrofinance/' + this.company_username + '/';
    return new Promise(resolve => {

          this.http.get(this.microToaData).subscribe(data => {
              resolve(data);
              },

          err => {
              console.log(err);
              });
          });
    }

   getloginPush() {
    this.usernamemop=localStorage.getItem('user')
    this.datar =localStorage.getItem('id')
      this.microToaData = this.link+'/api/Adworker/login/' + this.usernamemop + '/';
    return new Promise(resolve => {

          this.http.get(this.microToaData).subscribe(data => {
              resolve(data);
              },

          err => {
              console.log(err);
              });
          });
    }
   getSikuKopeshaMicrofinance() {
    this.company_username =localStorage.getItem('company_username')
    this.datar =localStorage.getItem('id')
      this.microToaData = this.link+'/api/Adworker/SikuKopeshaMicrofinance/' + this.company_username + '/';
    return new Promise(resolve => {

          this.http.get(this.microToaData).subscribe(data => {
              resolve(data);
              },

          err => {
              console.log(err);
              });
          });
    }
   getSikuMicrofinance() {
    this.company_username =localStorage.getItem('company_username')
    this.datar =localStorage.getItem('id')
      this.microToaData = this.link+'/api/Adworker/SikuMicrofinance/' + this.company_username + '/';
    return new Promise(resolve => {

          this.http.get(this.microToaData).subscribe(data => {
              resolve(data);
              },

          err => {
              console.log(err);
              });
          });
    }
  getListsMicrocredit2() {
    this.company_username =localStorage.getItem('company_username')
    this.datar =localStorage.getItem('id')
      this.microregisters = this.link+'/api/Adworker/purchases/' + this.company_username + '/';
    return new Promise(resolve => {

          this.http.get(this.microregisters).subscribe(data => {
              resolve(data);
              },

          err => {
              console.log(err);
              });
          });
    }


    downloadFile(data, filename='data') {
      let csvData = this.ConvertToCSV(data, ['Name_of_the_product', 'Product_serial', 'Price_bought', 'Selling_price', 'Number_of_products', 'Total_Available_product_wise', 'Total_brought_product_wise',  'Type_of_product', 'Number_of_products_sold', 'Description']);
      console.log(csvData)
      let blob = new Blob(['\ufeff' + csvData], { type: 'text/csv;charset=utf-8;' });
      let dwldLink = document.createElement("a");
      let url = URL.createObjectURL(blob);
      let isSafariBrowser = navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1;
      if (isSafariBrowser) {  //if Safari open in new window to save file with random filename.
          dwldLink.setAttribute("target", "_blank");
      }
      dwldLink.setAttribute("href", url);
      dwldLink.setAttribute("download", filename + ".csv");
      dwldLink.style.visibility = "hidden";
      document.body.appendChild(dwldLink);
      dwldLink.click();
      document.body.removeChild(dwldLink);
  }


  ConvertToCSV(objArray, headerList) {
    let array = typeof objArray != 'object' ? JSON.parse(objArray) : objArray;
    let str = '';
    let row = 'S.No,';
for (let index in headerList) {
        row += headerList[index] + ',';
    }
    row = row.slice(0, -1);
    str += row + '\r\n';
    for (let i = 0; i < array.length; i++) {
        let line = (i+1)+'';
        for (let index in headerList) {
           let head = headerList[index];
line += ',' + array[i][head];
        }
        str += line + '\r\n';
    }
    return str;
}

  getdownload(typew) {
    this.company_username =localStorage.getItem('company_username')
    this.datar =localStorage.getItem('id')
      this.microregisters = this.link+'/api/Adworker' + typew;
    return new Promise(resolve => {

          this.http.get(this.microregisters).subscribe(data => {
              resolve(data);
              },

          err => {
              console.log(err);
              });
          });
    }

  getBalnc() {
    this.company_username =localStorage.getItem('company_username')
    this.datar =localStorage.getItem('id')
      this.Balance = this.link+'/api/Adworker/BalanceView/' + this.datar + '/';
    return new Promise(resolve => {

          this.http.get(this.Balance).subscribe(data => {
              resolve(data);
              },

          err => {
              console.log(err);
              });
          });
    }

  getAliekopa() {
    this.company_username =localStorage.getItem('company_username')
    this.datar =localStorage.getItem('id')
      this.Balance = this.link+'/api/Adworker/Aliekopa/' + this.datar + '/';
    return new Promise(resolve => {

          this.http.get(this.Balance).subscribe(data => {
              resolve(data);
              },

          err => {
              console.log(err);
              });
          });
    }

  getMesseji() {
    return new Promise(resolve => {

          this.http.get(this.messeji).subscribe(data => {
              resolve(data);
              },

          err => {
              console.log(err);
              });
          });
    }

  getMalipoGet() {
    this.company_username =localStorage.getItem('company_username')
    this.datar =localStorage.getItem('id')
    this.MalipoGet = this.link+'/api/Adworker/Get/' + this.company_username + '/';
    return new Promise(resolve => {

          this.http.get(this.MalipoGet).subscribe(data => {
              resolve(data);
              },

          err => {
              console.log(err);
              });
          });
    }
  getMalipoSingle() {
    this.company_username =localStorage.getItem('company_username')
    this.datar =localStorage.getItem('id')
    this.MalipoSingl = this.link+'/api/Adworker/Malipo2Single/' + this.company_username + '/' + this.datar + '/';
    return new Promise(resolve => {

          this.http.get(this.MalipoSingl).subscribe(data => {
              resolve(data);
              },

          err => {
              console.log(err);
              });
          });
    }
  getOwnerDeposit() {
    return new Promise(resolve => {

          this.http.get(this.OwnerDeposit).subscribe(data => {
              resolve(data);
              },

          err => {
              console.log(err);
              });
          });
    }
  getMkopoDeposit() {
    return new Promise(resolve => {

          this.http.get(this.MkopoDeposit).subscribe(data => {
              resolve(data);
              },

          err => {
              console.log(err);
              });
          });
    }
  getauth() {
    return new Promise(resolve => {

          this.http.get(this.auth).subscribe(data => {
              resolve(data);
              },

          err => {
              console.log(err);
              });
          });
    }
  getMkopoWithdraw() {
    return new Promise(resolve => {

          this.http.get(this.MkopoWithdraw).subscribe(data => {
              resolve(data);
              },

          err => {
              console.log(err);
              });
          });
    }
  getOwnerWithdraw() {
    return new Promise(resolve => {

          this.http.get(this.OwnerWithdraw).subscribe(data => {
              resolve(data);
              },

          err => {
              console.log(err);
              });
          });
    }

  getSiku() {
    return new Promise(resolve => {

          this.http.get(this.siku).subscribe(data => {
              resolve(data);
              },

          err => {
              console.log(err);
              });
          });
    }

  getPersonalWeka() {
    return new Promise(resolve => {

          this.http.get(this.PersonalWeka).subscribe(data => {
              resolve(data);
              },

          err => {
              console.log(err);
              });
          });
    }

  getPersonalToa() {
    return new Promise(resolve => {

          this.http.get(this.PersonalToa).subscribe(data => {
              resolve(data);
              },

          err => {
              console.log(err);
              });
          });
    }
  getVyumba() {
    return new Promise(resolve => {

          this.http.get(this.PersonalVyumba).subscribe(data => {
              resolve(data);
              },

          err => {
              console.log(err);
              });
          });
    }
    getHouseInfo() {
    return new Promise(resolve => {

          this.http.get(this.HouseInfo).subscribe(data => {
              resolve(data);
              },

          err => {
              console.log(err);
              });
          });
    }

  getSikuKopesha() {
    return new Promise(resolve => {

          this.http.get(this.sikuKopesha).subscribe(data => {
              resolve(data);
              },

          err => {
              console.log(err);
              });
          });
    }
  getInfo() {
    return new Promise(resolve => {

          this.http.get(this.infos).subscribe(data => {
              resolve(data);
              },

          err => {
              console.log(err);
              });
          });
    }

  getInfoNyumbaAll() {
    return new Promise(resolve => {

          this.http.get(this.infosAll).subscribe(data => {
              resolve(data);
              },

          err => {
              console.log(err);
              });
          });
    }

  getUsersAll() {
    return new Promise(resolve => {

          this.http.get(this.getusercreate).subscribe(data => {
              resolve(data);
              },

          err => {
              console.log(err);
              });
          });
    }
  getMieziToa() {
    return new Promise(resolve => {

          this.http.get(this.toamiez).subscribe(data => {
              resolve(data);
              },

          err => {
              console.log(err);
              });
          });
    }
  getInfoNyumba() {
    return new Promise(resolve => {

          this.http.get(this.NyumbaMiezi).subscribe(data => {
              resolve(data);
              },

          err => {
              console.log(err);
              });
          });
    }
  getMieziToaNyumba() {
    return new Promise(resolve => {

          this.http.get(this.NyumbaMieziToa).subscribe(data => {
              resolve(data);
              },

          err => {
              console.log(err);
              });
          });
    }

  getNyumbaLists() {
    return new Promise(resolve => {

          this.http.get(this.nyumba).subscribe(data => {
              resolve(data);
              },

          err => {
              console.log(err);
              });
          });
    }
  getNyumbaMarekebishoLists() {
    return new Promise(resolve => {

          this.http.get(this.marekebisho).subscribe(data => {
              resolve(data);
              },

          err => {
              console.log(err);
              });
          });
    }


  getWapangajiLists() {
    return new Promise(resolve => {

          this.http.get(this.wapangajie).subscribe(data => {
              resolve(data);
              },

          err => {
              console.log(err);
              });
          });
    }

  getSingWapangajiLists(nyumbaid) {
    this.username =localStorage.getItem('user')
    this.datar =localStorage.getItem('id')
    this.microregisters = this.link+'/api/Adworker/Mpangaji/' + nyumbaid + '/';
    return new Promise(resolve => {

          this.http.get(this.microregisters).subscribe(data => {
              resolve(data);
              },

          err => {
              console.log(err);
              });
          });
    }
getWapangajiNyumbaList(mpangajiid) {
    this.username =localStorage.getItem('user')
    this.datar =localStorage.getItem('id')
    this.microregisters = this.link+'/api/Adworker/Mpangajiid/' + mpangajiid + '/';
    return new Promise(resolve => {

          this.http.get(this.microregisters).subscribe(data => {
              resolve(data);
              },

          err => {
              console.log(err);
              });
          });
    }


  Taarifa() {
    return new Promise(resolve => {

          this.http.get(this.userinfoNyumba).subscribe(data => {
              resolve(data);
              },

          err => {
              console.log(err);
              });
          });
    }
    getBankstats() {
    return new Promise(resolve => {

          this.http.get(this.bankstat).subscribe(data => {
              resolve(data);
              },

          err => {
              console.log(err);
              });
          });
    }
    getkutambulishostats() {
        return new Promise(resolve => {

              this.http.get(this.kutambulisho).subscribe(data => {
                  resolve(data);
                  },

              err => {
                  console.log(err);
                  });
              });
        }
    getapplicationstats() {
        return new Promise(resolve => {

              this.http.get(this.application).subscribe(data => {
                  resolve(data);
                  },

              err => {
                  console.log(err);
                  });
              });
        }

    getMkatabastats() {
        return new Promise(resolve => {

                this.http.get(this.Mkataba).subscribe(data => {
                    resolve(data);
                    },

                err => {
                    console.log(err);
                    });
                });
        }

    getSlipstats() {
    return new Promise(resolve => {

          this.http.get(this.Slip).subscribe(data => {
              resolve(data);
              },

          err => {
              console.log(err);
              });
          });
    }


    getSlipestats() {
    return new Promise(resolve => {

          this.http.get(this.Slipe).subscribe(data => {
              resolve(data);
              },

          err => {
              console.log(err);
              });
          });
    }

    getProfilestats() {
    return new Promise(resolve => {

          this.http.get(this.Profile).subscribe(data => {
              resolve(data);
              },

          err => {
              console.log(err);
              });
          });
    }
    getProfileNyumbastats() {
    return new Promise(resolve => {

          this.http.get(this.ProfileNyumba).subscribe(data => {
              resolve(data);
              },

          err => {
              console.log(err);
              });
          });
    }


    getAtmstats() {
    return new Promise(resolve => {

          this.http.get(this.atm).subscribe(data => {
              resolve(data);
              },

          err => {
              console.log(err);
              });
          });
    }

    getOwnerKitambulishostats() {
    return new Promise(resolve => {

          this.http.get(this.OwnerKitambulisho).subscribe(data => {
              resolve(data);
              },

          err => {
              console.log(err);
              });
          });
    }

    getOwnerApplicationstats() {
    return new Promise(resolve => {

          this.http.get(this.OwnerApplication).subscribe(data => {
              resolve(data);
              },

          err => {
              console.log(err);
              });
          });
    }

    getOwnerSlipstats() {
    return new Promise(resolve => {

          this.http.get(this.OwnerSlip).subscribe(data => {
              resolve(data);
              },

          err => {
              console.log(err);
              });
          });
    }

    getOwnerMkatabastats() {
    return new Promise(resolve => {

          this.http.get(this.OwnerMkataba).subscribe(data => {
              resolve(data);
              },

          err => {
              console.log(err);
              });
          });
    }

    gethouses() {
    return new Promise(resolve => {

          this.http.get(this.houses).subscribe(data => {
              resolve(data);
              },

          err => {
              console.log(err);
              });
          });
    }


    getIdentitystats() {
    return new Promise(resolve => {

          this.http.get(this.identity).subscribe(data => {
              resolve(data);
              },

          err => {
              console.log(err);
              });
          });
    }

  UserInfo() {
    return new Promise(resolve => {

          this.http.get(this.userinfo).subscribe(data => {
              resolve(data);
              },

          err => {
              console.log(err);
              });
          });
    }

  UserInfoNyumba() {
    return new Promise(resolve => {

          this.http.get(this.userinfoNyumba).subscribe(data => {
              resolve(data);
              },

          err => {
              console.log(err);
              });
          });
    }

  InfoNyumbaThem() {
    return new Promise(resolve => {

          this.http.get(this.userinfoNyumbaThem).subscribe(data => {
              resolve(data);
              },

          err => {
              console.log(err);
              });
          });
    }

  Jumlalist() {
    return new Promise(resolve => {

          this.http.get(this.Jumla).subscribe(data => {
              resolve(data);
              },

          err => {
              console.log(err);
              });
          });
    }
  UserInfo1() {
    return new Promise(resolve => {

          this.http.get(this.UserNyumba).subscribe(data => {
              resolve(data);
              },

          err => {
              console.log(err);
              });
          });
    }
  JumlaNyumbalist() {
    return new Promise(resolve => {

          this.http.get(this.JumlaNyumba).subscribe(data => {
              resolve(data);
              },

          err => {
              console.log(err);
              });
          });
    }
  getMkopos() {
    return new Promise(resolve => {

          this.http.get(this.mkopo).subscribe(data => {
              resolve(data);
              },

          err => {
              console.log(err);
              });
          });
    }
  getWaliokopa() {
    this.company_username =localStorage.getItem('company_username')
    this.datar =localStorage.getItem('id')
    this.waliokopaMkopo = this.link+'/api/Adworker/Wakopaji/' + this.company_username + '/';
    return new Promise(resolve => {

          this.http.get(this.waliokopaMkopo).subscribe(data => {
              resolve(data);
              },

          err => {
              console.log(err);
              });
          });
    }

  getWaliokopa2() {
    this.company_username =localStorage.getItem('company_username')
    this.datar =localStorage.getItem('id')
    this.waliokopaMkopo = this.link+'/api/Adworker/Wakopaji2/' + this.company_username + '/';
    return new Promise(resolve => {

          this.http.get(this.waliokopaMkopo).subscribe(data => {
              resolve(data);
              },

          err => {
              console.log(err);
              });
          });
    }

  getPayments() {
    return new Promise(resolve => {

          this.http.get(this.malipo).subscribe(data => {
              resolve(data);
              },

          err => {
              console.log(err);
              });
          });
    }

  getmalipoz() {
    this.company_username =localStorage.getItem('company_username')
    this.datar =localStorage.getItem('id')
    this.malipoz = this.link+'/api/Adworker/malipoz/' + this.company_username + '/';
    return new Promise(resolve => {

          this.http.get(this.malipoz).subscribe(data => {
              resolve(data);
              },

          err => {
              console.log(err);
              });
          });
    }
  getmalipoz1() {
    this.company_username =localStorage.getItem('company_username')
    this.datar =localStorage.getItem('id')
    this.malipoz = this.link+'/api/Adworker/malipoz1/' + this.company_username + '/';
    return new Promise(resolve => {

          this.http.get(this.malipoz).subscribe(data => {
              resolve(data);
              },

          err => {
              console.log(err);
              });
          });
    }

    getMtajiLists(username) {
    // this.company_username =localStorage.getItem('company_username')
    // this.datar =localStorage.getItem('id')
    this.malipoz = this.link+'/api/Adworker/Mtaji/' + username + '/';
    return new Promise(resolve => {

          this.http.get(this.malipoz).subscribe(data => {
              resolve(data);
              },

          err => {
              console.log(err);
              });
          });
    }
    getDukaWamilikiLists2(username) {
    // this.company_username =localStorage.getItem('company_username')
    // this.datar =localStorage.getItem('id')
    this.malipoz = this.link+'/api/Adworker/Directolist/' + username + '/';
    return new Promise(resolve => {

          this.http.get(this.malipoz).subscribe(data => {
              resolve(data);
              },

          err => {
              console.log(err);
              });
          });
    }
    getInputMtandao(username) {
    // this.company_username =localStorage.getItem('company_username')
    // this.datar =localStorage.getItem('id')
    this.malipoz = this.link+'/api/Adworker/InputMtandao/' + username + '/';
    return new Promise(resolve => {

          this.http.get(this.malipoz).subscribe(data => {
              resolve(data);
              },

          err => {
              console.log(err);
              });
          });
    }


    getPayments2() {
        return new Promise(resolve => {

              this.http.get(this.malipo2).subscribe(data => {
                  resolve(data);
                  },

              err => {
                  console.log(err);
                  });
              });
        }


    getPosts(): Observable<IPosts[]> {
        return this.http
            .get(this.usercreatemo)
            .map((response: Response) => {
                return <IPosts[]>response.json();
            });
    }
    private handleError(error: Response) {
        return Observable.throw(error.statusText);
    }










// // here to post file
//     postFile(caption: string, fileToUpload: File) {
//       const endpoint = this.link+'/api/all/Dashboard/';
//       const formData: FormData = new FormData();
//       const headers = new HttpHeaders();
//       formData.append('image', fileToUpload, fileToUpload.name);
//       formData.append('caption', caption);
//       return this.http
//         .post(endpoint, formData);
//   }

getListsMicrocredita() {
    this.username =localStorage.getItem('user')
    this.datar =localStorage.getItem('id')
    this.microregisters = this.link+'/api/Adworker/UsersView1/' + this.username + '/';
    return new Promise(resolve => {

          this.http.get(this.microregisters).subscribe(data => {
              resolve(data);
              },

          err => {
              console.log(err);
              });
          });
    }







  getLoginPosts(credentials, type) {

    return new Promise((resolve, reject) => {
        const headers = new HttpHeaders();
        this.http.post(this.usercreate + type, credentials, {headers: headers})
        .subscribe(res => {
            resolve(res);
        }, (err) => {
            reject(err);

        });

    });
}

getLoginPut(credentials, type) {

    return new Promise((resolve, reject) => {
        const headers = new HttpHeaders();
        this.http.put(this.usercreate + type, credentials, {headers: headers})
        .subscribe(res => {
            resolve(res);
        }, (err) => {
            reject(err);

        });

    });
}





deleteuser(momo){
  return new Promise(resolve => {

    this.http.delete(this.usercreate + momo).subscribe(data => {
      resolve(data);
    });
  })
}
getProcductSales1(officer) {
    this.username =localStorage.getItem('username')
    this.datar =localStorage.getItem('id')
    this.microregisters = this.link+'/api/Adworker/ProductSales1/' + officer + '/';
    return new Promise(resolve => {

          this.http.get(this.microregisters).subscribe(data => {
              resolve(data);
              },

          err => {
              console.log(err);
              });
          });
    }
  getProcductPages(officer) {
    this.username =localStorage.getItem('username')
    this.datar =localStorage.getItem('id')
    this.microregisters = this.link+'/api/Adworker/ProductPages/' + officer + '/';
    return new Promise(resolve => {

          this.http.get(this.microregisters).subscribe(data => {
              resolve(data);
              },

          err => {
              console.log(err);
              });
          });
    }

    company;

getDukaInformation(momo) {
    this.username =localStorage.getItem('DirectorDuka')
    this.company=localStorage.getItem('company')
    this.datar =localStorage.getItem('id')
    this.microregisters = this.link+'/api/Adworker/getComanydata/' + this.username + '/'+this.company+'/'+momo+'/';
    return new Promise(resolve => {

          this.http.get(this.microregisters).subscribe(data => {
              resolve(data);
              },

          err => {
              console.log(err);
              });
          });
    }

getPsales(officer) {
    this.username =localStorage.getItem('username')
    this.datar =localStorage.getItem('id')
    this.microregisters = this.link+'/api/Adworker/PSales/' + officer + '/';
    return new Promise(resolve => {

          this.http.get(this.microregisters).subscribe(data => {
              resolve(data);
              },

          err => {
              console.log(err);
              });
          });
    }

geReportLists(officer) {
    this.username =localStorage.getItem('username')
    this.datar =localStorage.getItem('id')
    this.microregisters = this.link+'/api/Adworker/DukaReport/' + officer + '/';
    return new Promise(resolve => {

          this.http.get(this.microregisters).subscribe(data => {
              resolve(data);
              },

          err => {
              console.log(err);
              });
          });
    }

    getProductLists(office) {
    this.username =localStorage.getItem('username')
    this.datar =localStorage.getItem('id')
    this.microregisters = this.link+'/api/Adworker/ProductsDir/' + office + '/';
    return new Promise(resolve => {

          this.http.get(this.microregisters).subscribe(data => {
              resolve(data);
              },

          err => {
              console.log(err);
              });
          });
    }

    getDukWebMadeni(company) {
    this.username =localStorage.getItem('username')
    this.datar =localStorage.getItem('id')
    this.microregisters = this.link+'/api/Adworker/DukaWebMadeni/' + company + '/';
    return new Promise(resolve => {

          this.http.get(this.microregisters).subscribe(data => {
              resolve(data);
              },

          err => {
              console.log(err);
              });
          });
    }

    getProductId(username) {

        this.microregisters = this.link+'/api/Adworker/DukaProducts/' + username + '/';
        return new Promise(resolve => {

            this.http.get(this.microregisters).subscribe(data => {
                resolve(data);
                },

            err => {
                console.log(err);
                });
            });
    }

    public deletePost(momo) {
        return new Promise(resolve => {

          this.http.delete(this.usercreate + momo).subscribe(data => {
            resolve(data);
          });
      })
      }

    public deleteSales(momo) {
        return new Promise(resolve => {

          this.http.delete(this.usercreate + momo).subscribe(data => {
            resolve(data);
          });
      })
      }
    public returnSales(momo) {
        return new Promise(resolve => {
          const headers = new HttpHeaders();

          this.http.post(this.usercreate + momo, {headers:headers}).subscribe(data => {
            resolve(data);
          });
      })
      }
    getProductPurchasedId(receipt) {

        this.microregisters = this.link+'/api/Adworker/PurchasedProducts/' + receipt + '/';
        return new Promise(resolve => {

            this.http.get(this.microregisters).subscribe(data => {
                resolve(data);
                },

            err => {
                console.log(err);
                });
            });
    }

    getTotalProducts(company) {

        this.microregisters = this.link+'/api/Adworker/Totalstock/'+ company;
        return new Promise(resolve => {

            this.http.get(this.microregisters).subscribe(data => {
                resolve(data);
                },

            err => {
                console.log(err);
                });
            });
    }

    getTotalBorrowed(company) {

        this.microregisters = this.link+'/api/Adworker/Totalstockborrowed/'+ company;
        return new Promise(resolve => {

            this.http.get(this.microregisters).subscribe(data => {
                resolve(data);
                },

            err => {
                console.log(err);
                });
            });
    }

    getTotalExpenses(company) {

        this.microregisters = this.link+'/api/Adworker/Totalstockexpenses/'+ company;
        return new Promise(resolve => {

            this.http.get(this.microregisters).subscribe(data => {
                resolve(data);
                },

            err => {
                console.log(err);
                });
            });
    }

    getDirectorsProductLists(id) {

        this.microregisters = this.link+'/apiAdworker/CheckProduct/' + id + '/';
        return new Promise(resolve => {

            this.http.get(this.microregisters).subscribe(data => {
                resolve(data);
                },

            err => {
                console.log(err);
                });
            });
    }

    getSearchproduct(company, keyword) {

        this.microregisters = this.link+'/api/Adworker/SearchProduct/' + company + '/'+keyword+'/';
        return new Promise(resolve => {

            this.http.get(this.microregisters).subscribe(data => {
                resolve(data);
                },

            err => {
                console.log(err);
                });
            });
    }

    getSearchBorrower(company, keyword) {

        this.microregisters = this.link+'/api/Adworker/SearchBorrower/' + company + '/'+keyword+'/';
        return new Promise(resolve => {

            this.http.get(this.microregisters).subscribe(data => {
                resolve(data);
                },

            err => {
                console.log(err);
                });
            });
    }

    getSearchSales(company, keyword) {

        this.microregisters = this.link+'/api/Adworker/SearchSales/' + company + '/'+keyword+'/';
        return new Promise(resolve => {

            this.http.get(this.microregisters).subscribe(data => {
                resolve(data);
                },

            err => {
                console.log(err);
                });
            });
    }
    getMmilikiDukaInfo(mmiliki) {

        this.microregisters = this.link+'/api/Adworker/MmilikiDukaIngo/' + mmiliki + '/';
        return new Promise(resolve => {

            this.http.get(this.microregisters).subscribe(data => {
                resolve(data);
                },

            err => {
                console.log(err);
                });
            });
    }

    getMmilikiDuka(company) {

        this.microregisters = this.link+'/api/Adworker/MmilikiDukalote/' + company + '/';
        return new Promise(resolve => {

            this.http.get(this.microregisters).subscribe(data => {
                resolve(data);
                },

            err => {
                console.log(err);
                });
            });
    }

    getDukWeb2Matumizi(company) {
    this.username =localStorage.getItem('username')
    this.datar =localStorage.getItem('id')
    this.microregisters = this.link+'/api/Adworker/DukaWeb2Matumizi/' + company + '/';
    return new Promise(resolve => {

          this.http.get(this.microregisters).subscribe(data => {
              resolve(data);
              },

          err => {
              console.log(err);
              });
          });
    }
    getDukWebMatumizi(company) {
    this.username =localStorage.getItem('username')
    this.datar =localStorage.getItem('id')
    this.microregisters = this.link+'/api/Adworker/DukaWebMatumizi/' + company + '/';
    return new Promise(resolve => {

          this.http.get(this.microregisters).subscribe(data => {
              resolve(data);
              },

          err => {
              console.log(err);
              });
          });
    }
    getWorkerMadeniLists(officer) {
    this.username =localStorage.getItem('username')
    this.datar =localStorage.getItem('id')
    this.microregisters = this.link+'/api/Adworker/MadeniwkalaWorker/' + officer + '/';
    return new Promise(resolve => {

          this.http.get(this.microregisters).subscribe(data => {
              resolve(data);
              },

          err => {
              console.log(err);
              });
          });
    }

    getMatumiziWorkerLists(officer) {
        this.username =localStorage.getItem('username')
        this.datar =localStorage.getItem('id')
        this.microregisters = this.link+'/api/Adworker/MatumiziWorker/' + officer + '/';
        return new Promise(resolve => {

              this.http.get(this.microregisters).subscribe(data => {
                  resolve(data);
                  },

              err => {
                  console.log(err);
                  });
              });
        }
  TransactionsWorkerPosts(credentials, type) {

    return new Promise((resolve, reject) => {
        const headers = new HttpHeaders();
        this.http.post(this.workersTransactions + type, credentials, {headers: headers})
        .subscribe(res => {
            resolve(res);
        }, (err) => {
            reject(err);

        });

    });
}

  wapangajiPost(credentials, type) {

    return new Promise((resolve, reject) => {
        const headers = new HttpHeaders();
        this.http.post(this.wapangaji + type, credentials, {headers: headers})
        .subscribe(res => {
            resolve(res);
        }, (err) => {
            reject(err);

        });

    });
}
  MkopoWithdrawPost(credentials, type) {

    return new Promise((resolve, reject) => {
        const headers = new HttpHeaders();
        this.http.post(this.wapangaji + type, credentials, {headers: headers})
        .subscribe(res => {
            resolve(res);
        }, (err) => {
            reject(err);

        });

    });
}
  MkopoDepositPost(credentials, type) {

    return new Promise((resolve, reject) => {
        const headers = new HttpHeaders();
        this.http.post(this.wapangaji + type, credentials, {headers: headers})
        .subscribe(res => {
            resolve(res);
        }, (err) => {
            reject(err);

        });

    });
}
  wapangajiPos1(credentials, type) {

    return new Promise((resolve, reject) => {
        const headers = new HttpHeaders();
        this.http.put(this.wapangaji + type, credentials, {headers: headers})
        .subscribe(res => {
            resolve(res);
        }, (err) => {
            reject(err);

        });
    });
}

PostMmilikiid(credentials, type) {

    return new Promise((resolve, reject) => {
        const headers = new HttpHeaders();
        this.http.put(this.usercreate + type, credentials, {headers: headers})
        .subscribe(res => {
            resolve(res);
        }, (err) => {
            reject(err);

        });
    });
}


postFiledata(selectedFile: File, user: string, pin: any, phone: any){
    const endpoint = this.link+'/api/Adworker/Identity/';
    const formData: FormData = new FormData();
    const headers = new HttpHeaders();
    formData.append('idcard', selectedFile, selectedFile.name);
    formData.append('user', user);
    formData.append('pin', pin);
    formData.append('phone', phone);
    return this.http
          .post(endpoint, formData);

}
postFiledata1(selectedFile: File, selectedFile2: File, selectedFile3: File, selectedFile4: File, selectedFile5: File, selectedFile6: File, Bei: any, Chumba_No: any, ukubwa: any, sifa: any, nyumba_number: any){
    const endpoint = this.link+'/api/Adworker/Vyumba/';
    const formData: FormData = new FormData();
    const headers = new HttpHeaders();
    formData.append('photo', selectedFile, selectedFile.name);
    if(selectedFile2){
        formData.append('photo2', selectedFile2, selectedFile2.name);

    }

    if(selectedFile3){
        formData.append('photo3', selectedFile3, selectedFile3.name);

    }
    if(selectedFile4){

    formData.append('photo4', selectedFile4, selectedFile4.name);

    }
    if(selectedFile5){
        formData.append('photo5', selectedFile5, selectedFile5.name);

    }
    if(selectedFile6){
        formData.append('photo6', selectedFile6, selectedFile6.name);

    }




    formData.append('Bei', Bei);
    formData.append('ukubwa', ukubwa);
    formData.append('sifa', sifa);
    formData.append('Chumba_No', Chumba_No);
    formData.append('nyumba_number', nyumba_number);

    // formData.append('pin', pin);
    // formData.append('phone', phone);
    return this.http
          .post(endpoint, formData);

}

UploadPictureNyumba(selectedFile: File, user: string){
    const endpoint = this.link+'/api/Adworker/house/';
    const formData: FormData = new FormData();
    const headers = new HttpHeaders();
    formData.append('house', selectedFile, selectedFile.name);
    formData.append('user', user);
    return this.http
          .post(endpoint, formData);

}
postProfiledata(selectedFile: File, user: string, pin: any, phone: any){
    const endpoint = this.link+'/api/Adworker/Profile/';
    const formData: FormData = new FormData();
    const headers = new HttpHeaders();
    formData.append('photo', selectedFile, selectedFile.name);
    formData.append('user', user);
    formData.append('pin', pin);
    formData.append('phone', phone);
    return this.http
          .post(endpoint, formData);

}
postProfileNyumbadata(selectedFile: File, user: string, pin: any, phone: any){
    const endpoint = this.link+'/api/Adworker/ProfileNyumba/';
    const formData: FormData = new FormData();
    const headers = new HttpHeaders();
    formData.append('photo', selectedFile, selectedFile.name);
    formData.append('user', user);
    formData.append('pin', pin);
    formData.append('phone', phone);
    return this.http
          .post(endpoint, formData);

}

postdata(selectedFile: File, user: string, pin: any, phone: any){
    const endpoint = this.link+'/api/Adworker/Statement/';
    const formData: FormData = new FormData();
    const headers = new HttpHeaders();
    formData.append('bankstatement', selectedFile, selectedFile.name);
    formData.append('user', user);
    formData.append('pin', pin);
    formData.append('phone', phone);
    return this.http
          .post(endpoint, formData);

}

postAtmdata(selectedFile: File, user: string, pin: any, phone: any){
    const endpoint = this.link+'/api/Adworker/Atm/';
    const formData: FormData = new FormData();
    const headers = new HttpHeaders();
    formData.append('Atm', selectedFile, selectedFile.name);
    formData.append('user', user);
    formData.append('pin', pin);
    formData.append('phone', phone);
    return this.http
          .post(endpoint, formData);

}
postSlipdata(selectedFile: File, user: string, pin: any, phone: any){
    const endpoint = this.link+'/api/Adworker/Slip/';
    const formData: FormData = new FormData();
    const headers = new HttpHeaders();
    formData.append('slip', selectedFile, selectedFile.name);
    formData.append('user', user);
    formData.append('pin', pin);
    formData.append('phone', phone);
    return this.http
          .post(endpoint, formData);

}
  getMalipoPosts(credentials, type) {

    return new Promise((resolve, reject) => {
        const headers = new HttpHeaders();
        this.http.post(this.malipo + type, credentials, {headers: headers})
        .subscribe(res => {
            resolve(res);
        }, (err) => {
            reject(err);

        });

    });
}
  PostOwnerDeposit(credentials, type) {

    return new Promise((resolve, reject) => {
        const headers = new HttpHeaders();
        this.http.post(this.usercreate + type, credentials, {headers: headers})
        .subscribe(res => {
            resolve(res);
        }, (err) => {
            reject(err);

        });

    });
}
  PostOwnerWithdraw(credentials, type) {

    return new Promise((resolve, reject) => {
        const headers = new HttpHeaders();
        this.http.post(this.usercreate + type, credentials, {headers: headers})
        .subscribe(res => {
            resolve(res);
        }, (err) => {
            reject(err);

        });

    });
}
  WapangajiPosts(credentials, type) {

    return new Promise((resolve, reject) => {
        const headers = new HttpHeaders();
        this.http.post(this.poste + type, credentials, {headers: headers})
        .subscribe(res => {
            resolve(res);
        }, (err) => {
            reject(err);

        });

    });
}


  WapangajiUpdatePosts(credentials, type) {

    return new Promise((resolve, reject) => {
        const headers = new HttpHeaders();
        this.http.post(this.posteUpdate + type, credentials, {headers: headers})
        .subscribe(res => {
            resolve(res);
        }, (err) => {
            reject(err);

        });

    });
}



postSlipefile(selectedFile: File, user: string, pin: any, phone: any){
    const endpoint = this.link+'/api/Adworker/Slipe/';
    const formData: FormData = new FormData();
    const headers = new HttpHeaders();
    formData.append('slip', selectedFile, selectedFile.name);
    formData.append('user', user);
    formData.append('pin', pin);
    formData.append('phone', phone);
    return this.http
          .post(endpoint, formData);

}


postMkatabafile(selectedFile: File, user: string, pin: any, phone: any){
    const endpoint = this.link+'/api/Adworker/Mkataba/';
    const formData: FormData = new FormData();
    const headers = new HttpHeaders();
    formData.append('mkataba', selectedFile, selectedFile.name);
    formData.append('user', user);
    formData.append('pin', pin);
    formData.append('phone', phone);
    return this.http
          .post(endpoint, formData);

}

postkitambulishofile(selectedFile: File, user: string, pin: any, phone: any){
    const endpoint = this.link+'/api/Adworker/Kitambulisho/';
    const formData: FormData = new FormData();
    const headers = new HttpHeaders();
    formData.append('kitambulisho', selectedFile, selectedFile.name);
    formData.append('user', user);
    formData.append('pin', pin);
    formData.append('phone', phone);
    return this.http
          .post(endpoint, formData);

}
postApplicationfile(selectedFile: File, user: string, pin: any, phone: any){
    const endpoint = this.link+'/api/Adworker/Application_form/';
    const formData: FormData = new FormData();
    const headers = new HttpHeaders();
    formData.append('application_form', selectedFile, selectedFile.name);
    formData.append('user', user);
    formData.append('pin', pin);
    formData.append('phone', phone);
    return this.http
          .post(endpoint, formData);

}



postOwnerSlipfile(selectedFile: File, user: string, pin: any, phone: any){
    const endpoint = this.link+'/api/Adworker/OwnerSlip/';
    const formData: FormData = new FormData();
    const headers = new HttpHeaders();
    formData.append('Slip', selectedFile, selectedFile.name);
    formData.append('user', user);
    formData.append('pin', pin);
    formData.append('phone', phone);
    return this.http
          .post(endpoint, formData);

}


postOwnerMkatabafile(selectedFile: File, user: string, pin: any, phone: any){
    const endpoint = this.link+'/api/Adworker/OwnerMkataba/';
    const formData: FormData = new FormData();
    const headers = new HttpHeaders();
    formData.append('Mkataba', selectedFile, selectedFile.name);
    formData.append('user', user);
    formData.append('pin', pin);
    formData.append('phone', phone);
    return this.http
          .post(endpoint, formData);

}
postOwnerKitambulishofile(selectedFile: File, user: string, pin: any, phone: any){
    const endpoint = this.link+'/api/Adworker/OwnerKitambulisho/';
    const formData: FormData = new FormData();
    const headers = new HttpHeaders();
    formData.append('Kitambulisho', selectedFile, selectedFile.name);
    formData.append('user', user);
    formData.append('pin', pin);
    formData.append('phone', phone);
    return this.http
          .post(endpoint, formData);

}
postOwnerApplicationfile(selectedFile: File, user: string, pin: any, phone: any){
    const endpoint = this.link+'/api/Adworker/OwnerApplication/';
    const formData: FormData = new FormData();
    const headers = new HttpHeaders();
    formData.append('Application', selectedFile, selectedFile.name);
    formData.append('user', user);
    formData.append('pin', pin);
    formData.append('phone', phone);
    return this.http
          .post(endpoint, formData);

}









getLoginUpdate(credentials, type) {
  console.log('Bearer '+localStorage.getItem('token'))

    return new Promise((resolve, reject) => {
        const headers = new HttpHeaders().set('content-type', 'application/json').set('Authorization', 'Bearer '+ localStorage.getItem('token'));
        this.http.put(this.usercreate + type, credentials,{headers: headers})
        .subscribe(res => {
            resolve(res);
        }, (err) => {
          alert('Filed!, Check your password, is not correct')
            reject(err);

        });

    });
}

getdata(chosen) {
  this.company_username =localStorage.getItem('company_username')
  this.datar =localStorage.getItem('id')
  const headers = new HttpHeaders()
  // .set('content-type', 'application/json').set('Authorization', 'Bearer '+ localStorage.getItem('token'));
  this.waliokopaMkopo = this.link+'/api/Adworker/' + chosen;
  return new Promise(resolve => {

        this.http.get(this.waliokopaMkopo,{headers: headers}).subscribe(data => {
            resolve(data);
            // console.log('momo hamisi : ', this.waliokopaMkopo)
            },

        err => {
            console.log(err);
            });
        });
  }

  kazindustry;

  getindustry(company){
    // const headers = new HttpHeaders().set('content-type', 'application/json').set('Authorization', 'Bearer '+ localStorage.getItem('token'));
    const headers = new HttpHeaders();

    this.kazindustry = this.link+'/api/Industry/' + company;
    return new Promise(resolve => {
          this.http.get(this.kazindustry,{headers: headers}).subscribe(data => {
              resolve(data);
              },
          err => {
              console.log(err);
              });
          });
  }

  postIndustry(credentials, type) {

    return new Promise((resolve, reject) => {
        const headers = new HttpHeaders();
        this.http.post(this.link+'/api/Industry/' + type, credentials, {headers: headers})
        .subscribe(res => {
            resolve(res);
        }, (err) => {
            reject(err);

        });

    });
}


  getDuka(company){
    // const headers = new HttpHeaders().set('content-type', 'application/json').set('Authorization', 'Bearer '+ localStorage.getItem('token'));
    const headers = new HttpHeaders();

    this.kazindustry = this.link+'/api/Adworker/' + company;
    return new Promise(resolve => {
          this.http.get(this.kazindustry,{headers: headers}).subscribe(data => {
              resolve(data);
              },
          err => {
              console.log(err);
              });
          });
  }

  postDuka(credentials, type) {

    return new Promise((resolve, reject) => {
        const headers = new HttpHeaders();
        this.http.post(this.link+'/api/Adworker/' + type, credentials, {headers: headers})
        .subscribe(res => {
            resolve(res);
        }, (err) => {
            reject(err);

        });

    });
}



}


