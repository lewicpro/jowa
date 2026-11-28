import { Component, OnInit, Output, EventEmitter, TemplateRef, ChangeDetectionStrategy, HostListener } from '@angular/core';
import { RestframeworkService } from '../apiservice/restframework.service';
import { Router } from '../../../node_modules/@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DetailsViewComponent } from '../details-view/details-view.component';
import { AdminDashboardComponent } from '../admin-dashboard/admin-dashboard.component';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { NgProgress } from 'ngx-progressbar';
import { ReceiptComponent } from '../receipt/receipt.component';
import { SettingsService } from '../settings/settings.service';
import { AnimationEvent, animate, state, style, transition, trigger } from '@angular/animations';
@Component({
    selector: 'app-admin-kopa',
    templateUrl: './admin-kopa.component.html',
    styleUrls: ['./admin-kopa.component.css'],
    animations: [
      trigger('installmentSlide', [
        state('open', style({ height: '*', opacity: 1, overflow: 'hidden' })),
        state('closed', style({ height: '0px', opacity: 0, overflow: 'hidden', margin: 0 })),
        transition('closed => open', animate('280ms cubic-bezier(.2,.7,.3,1)')),
        transition('open => closed', animate('220ms ease-in'))
      ])
    ],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class AdminKopaComponent implements OnInit {
  @Output() OutputValues = new EventEmitter()
  users;
  datar;
  username;
  // morem = 'background:red';
  morem = {
    'color': '',
    'cursor': 'pointer'
    };
  malipouser;
  tambulisha;
  selectedData;
  jum: number;
  modalRef: BsModalRef;
  message: string;
  malipouser2;
  filtertext = '';
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
  userData;
  responseData;
  kilichokopwa;
  d = new Date();
  Simu;
  mwaka;
  monthes = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December', 'January', 'February', 'Mach', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  wilaya;
  mkoa;
  account;
  pin;
  min;
  hour;
  sec;
  times;
  mwzi;
  moxt
  scheduleLoan: any = null;
  isScheduleOpen = false;
  installmentsByLoan: { [loanId: number]: any[] } = {};
  installmentsLoading: { [loanId: number]: boolean } = {};
  promiseEditorId: number | null = null;
  promiseDateDraft = '';
  promiseNoteDraft = '';
  promiseSaving = false;
  private loans: any[] = [];

  constructor(private modalService: BsModalService, public receiptComponet:ReceiptComponent, public ngProgress: NgProgress, public snackbar: MatSnackBar, public detailsview:DetailsViewComponent, public pubdetailsview:AdminDashboardComponent, public restframework: RestframeworkService, public router: Router, public settings: SettingsService) {
    this.ngProgress.ref().start()
    this.lservice_officer= localStorage.getItem('lservice_officer')
    // console.log('user: ' + this.lservice_officer)
    this.dataget();
    this.mona();
    this.restframework.getMkopos().then((loans: any) => {
      this.loans = Array.isArray(loans) ? loans : [];
    });
    this.mwzi = this.d.getMonth()
    this.moxt = parseInt(this.mwzi) + 1
    this.min = this.d.getMinutes();
    this.hour = this.d.getHours()
    this.sec = this.d.getSeconds()
    this.times = this.d.getDate() + "/" + this.moxt + "/" +this.d.getFullYear() + "  ||  " + this.hour + ":" + this.min + ":" + this.sec
    // this.mdaa = this.times
  
    this.ngProgress.ref().complete()


   }

   dataget(){
    this.restframework.getLists().then(data => {
      this.users = data;
      this.datar = localStorage.getItem('id');
      const account = this.users.find(n => String(n.pk) === String(this.datar));
      if (!account) {
        return;
      }

      this.username = account.Username;
      this.jinalote = account.jina;
      this.Simu = account.Simu;
      this.account = account.Account_no;
      this.wilaya = account.wilaya;
      this.mkoa = account.mkoa;
      this.pin = account.pin;

      this.restframework.getPayments().then(datat => {
        this.malipouser = datat;
        const latestLoanRow = (this.malipouser || [])
          .filter(m => m.user === this.username &&
            (m.route === 'toa' || m.route === 'weka') &&
            m.info !== 'delete' && m.info !== 'deleted' &&
            m.Balance !== null && m.Balance !== undefined && m.Balance !== '' &&
            Number.isFinite(Number(m.Balance)))
          .sort((a, b) => Number(b.pk) - Number(a.pk))[0];

        if (latestLoanRow) {
          this.tambulisha = latestLoanRow.user;
          this.user = latestLoanRow.user;
          this.jina = latestLoanRow.jina;
          this.tarehe = latestLoanRow.tangu || latestLoanRow.tarehe;
          this.Total_pay = latestLoanRow.Total_pay;
          this.loan_repay = latestLoanRow.loan_repay;
          this.Balance = Number(latestLoanRow.Balance);
          this.kilichokopwa = latestLoanRow.kilichokopwa;
          this.morem.color = latestLoanRow.rangi;
          this.awamu = latestLoanRow.awamu;
        }
        this.loadCustomerInstallments();
      });

      this.restframework.getPayments2().then(datat2 => {
        this.malipouser2 = datat2;
      });
    });
  }

  // what is still to be paid on the loan shown in the schedule window:
  // the "Amount remaining" of every month added up
  loanRemaining(installments) {
    let left = 0;
    for (const i of (installments || [])) {
      left = left + (Number(i.balance) || 0);
    }
    return left;
  }

  ngOnInit() {

  }

  // ================= installments of this customer (carry over) =================
  // A short payment (e.g. 100,000 of 130,000) leaves that month owing 30,000;
  // the next payment pays that first, then the next month.

  customerInstallments = [];

  loadCustomerInstallments() {
    if (!this.username) {
      return;
    }
    this.restframework.getInstallmentsForUser(this.username).then((data: any) => {
      const list = [];
      for (const i of (data || [])) {
        list.push({
          due_date: i.due_date,
          scheduled: Number(i.scheduled_amount) || 0,
          paid: Number(i.paid_amount) || 0,
          left: Number(i.balance) || 0
        });
      }
      // oldest first, like the backend pays them
      list.sort((a, b) => String(a.due_date).localeCompare(String(b.due_date)));
      this.customerInstallments = list;
    });
  }

  // the first installment still owing (what the customer should pay next)
  nextDue() {
    for (const i of this.customerInstallments) {
      if (i.left > 0) {
        return i;
      }
    }
    return null;
  }

  // the one after it (shown so the next full amount is clear)
  afterNextDue() {
    let found = false;
    for (const i of this.customerInstallments) {
      if (i.left > 0) {
        if (found) {
          return i;
        }
        found = true;
      }
    }
    return null;
  }

  // is this installment's date already passed?
  isLate(installment) {
    const today = new Date();
    const todayText = today.getFullYear() + '-' + String(today.getMonth() + 1).padStart(2, '0') + '-' + String(today.getDate()).padStart(2, '0');
    return String(installment.due_date) < todayText;
  }

  // how many installments would still be owing after paying "amount" (oldest first)
  installmentsLeftAfter(amount) {
    let money = Number(amount) || 0;
    let left = 0;
    for (const i of this.customerInstallments) {
      let owing = i.left;
      if (money > 0 && owing > 0) {
        const pay = Math.min(money, owing);
        owing = owing - pay;
        money = money - pay;
      }
      if (owing > 0) {
        left = left + 1;
      }
    }
    return left;
  }

  // after a payment: get the new balance, installments left and schedule
  refreshAfterPayment() {
    this.restframework.getPayments().then((data: any) => {
      let latest = null;
      for (const m of (data || [])) {
        if (m.user === this.username && (m.route === 'toa' || m.route === 'weka') &&
            m.info !== 'delete' && m.info !== 'deleted' &&
            m.Balance !== null && m.Balance !== undefined && m.Balance !== '' && isFinite(Number(m.Balance))) {
          if (latest == null || Number(m.pk) > Number(latest.pk)) {
            latest = m;
          }
        }
      }
      if (latest != null) {
        this.Balance = Number(latest.Balance);
        this.awamu = latest.awamu;
      }
      this.loadCustomerInstallments();
    });
  }

  get filteredPayments(): any[] {
    const rows = (this.malipouser2 || []).filter(row => row.user === this.username);
    const query = String(this.filtertext || '').trim().toLocaleLowerCase();
    if (!query) {
      return rows;
    }

    return rows.filter(row => [row.tarehe, row.jina, row.loan_repay, row.awamu, row.Interest, row.Balance, row.info]
      .some(value => String(value ?? '').toLocaleLowerCase().includes(query)));
  }

  refresh(): void {
}





time(){
  this.mwaka = this.d.getFullYear();
  this.day = this.d.getDate()
  // console.log(this.day)
  for (let i = this.d.getMonth(); i <= this.monthes.length; i++) {
    this.mopa += this.monthes[i] + ',';
    this.array.push(this.monthes[i]);
    this.getMwezi=this.monthes[this.d.getMonth()]
    // console.log(this.mwaka)
}}



  thisfunct() {
    this.restframework.getLists().then(data => {
      this.users = data;
      // this.dataget()
      for ( const n of this.users) {
        // console.log('nafika');
        this.datar = localStorage.getItem('id');
        if (String(n.pk) === String(this.datar)) {
          if (true) {
            this.username = n.Username;
            // this.jinalote = n.jina

          }
        }
      this.restframework.getPayments2().then(datat2 => {
        this.malipouser2 = datat2;
        // this.router.navigate(['/Details/Ongeza-mkopo']);
        // this.router.navigate(['/Details/Mkopoadmin']);
        this.v1 = null;
        this.v2 = null;
        this.momba = null;
        this.loan1 = null;
        // this.userData.Balance = null;
         this.Interest = null;
        // this.Balance = null;

   });
  }

    });

  }



  tuma() {
    this.calculate();
    if (!this.userData) {
      this.snackbar.open('Enter a payment amount no greater than the remaining balance.');
      return;
    }
    this.ngProgress.ref().start()
    
    // console.log('passed');
    

    this.restframework.getLoginPosts(this.userData, 'Malipo/').then((result) => {
      this.responseData = result;
      // console.log(this.responseData);
      // console.log(this.userData);
      this.v3 = null;
      this.momba  = null;
      // window.location.reload();
      // this.throwvalues();
      // this.router.navigateByUrl('/');
      // alert(this.userData.username)
      // localStorage.setItem('userData2', this.responseData);
      // localStorage.setItem('user', this.userData.user);
      this.openSnackbar();
      
      this.thisfunct();
      this.refreshAfterPayment();
      this.mona()
      this.ngProgress.ref().complete();
      
      }, (err) => {
        this.openSnackbarerror()

      });

      this.ngProgress.ref().complete()

  }

  openSnackbar() {
    this.snackbar.open('Muamala wa malipo ya ' + this.username + ' umefanikiwa');
  }

  openSnackbarerror() {
    this.snackbar.open('Muamala wa malipo ya ' + this.username + ' Umeshindikana');
  }

  throwvalues(){
    this.OutputValues.emit()
  }
  mona(){
    this.detailsview.fuck();
    this.pubdetailsview.fuck();
    this.bwoy = null;
  }



  calculate() {

      this.time();
      // this.ngProgress.ref().start();
    if(this.mopai){
      console.log('remainder1: '+ this.times)
      this.mdaa = this.mopai;

    }else{
      this.mdaa = this.times;
      console.log('remainder2: '+ this.times)
    }
      // this.thisfunct() ;
      this.loan1 = null;
      this.Interest = null;
      this.userData = null;

      const paymentAmount = Number(this.v1);
      const currentBalance = Number(this.Balance);
      const scheduledInstallments = Number(this.awamu);
      this.loan1 = paymentAmount;
      this.Interest = Number(this.v2) || 0;

      if (this.men !== null && this.men !== undefined && String(this.men).trim() !== '') {
        this.bwoy = Number(this.men);
      } else {
        // count from the schedule: a short payment keeps its month open
        if (this.customerInstallments.length > 0) {
          this.bwoy = this.installmentsLeftAfter(paymentAmount);
        } else {
          this.bwoy = Number.isFinite(scheduledInstallments)
            ? Math.max(0, scheduledInstallments - 1)
            : 0;
        }
      }

      if (!Number.isFinite(currentBalance) || currentBalance < 0 ||
          !Number.isFinite(paymentAmount) || paymentAmount <= 0 || paymentAmount > currentBalance) {
        this.userData = null;
        this.momba = null;
        this.v3 = null;
        return;
      }

      this.momba = Math.max(0, currentBalance - paymentAmount);
      this.v3 = this.momba;
      if (this.momba === 0) {
        this.bwoy = 0;
      }



      this.userData = {
              'user': this.user,
              'jina': this.jina,
              'Total_pay': this.loan1,
              'loan_repay': this.loan1,
              'Interest_pay': this.Interest,
              'Balance': this.momba,
              'kipindi': this.no,
              'Account_no': this.account,
              'Simu': this.Simu,
              'kilichokopwa': this.kilichokopwa,
              'tangu': this.tarehe,
              'awamu': this.bwoy,
              'wilaya': this.wilaya,
              'mkoa': this.mkoa,
              'pin': this.pin,
              'service_officer': this.lservice_officer,
              'mwezi': this.getMwezi,
              'mwaka': this.mwaka,
              'day': this.day,
              'tarehe': this.mdaa,
              'info': 'delete',
              'route': 'weka',
        };


  }

  run(){
    
    this.Create={
      jina:this.jina,
      Total_pay:this.loan1,
      Simu:this.Simu,
      wilaya:this.wilaya,
      info :'deleted',
      user:this.user,
      service_officer:this.lservice_officer,
      mkoa:this.mkoa,
      mwezi: this.getMwezi,
      mwaka: this.mwaka,
      day: this.day,
      tarehe: this.mdaa,
      
    
     
  
    }
    this.restframework.getLoginPosts(this.Create, 'deletem/').then((result) => {
      this.responseDat = result;
      // alert(this.userData.username)
      // localStorage.setItem('userData2', this.responseData);
     //  localStorage.setItem('user', this.userData.Username);
     //  this.UserCreate();
     //  this.UserInfo();
    //  this.clean();
      this.thisfunct();
      this.mona();
      // this.ngProgress.ref().complete();
      }, (err) => {
        alert('error');
 
      });
  

  }


  openModal(template: TemplateRef<any>) {
    this.calculate();
    if (!this.userData) {
      this.snackbar.open('Enter a payment amount no greater than the remaining balance.');
      return;
    }
    this.modalRef = this.modalService.show(template, {class: 'modal-sm'});
  }
 
  confirm(): void {
    this.tuma();
    // this.message = 'Confirmed!';
    this.modalRef.hide();
  }
 
  decline(): void {
    // this.message = 'Declined!';
    this.modalRef.hide();
  }

  getLoanForPayment(payment: any): any {
    if (!payment) {
      return null;
    }

    // Receipt rows carry the original loan timestamp in `tangu`; the original
    // disbursement row instead carries it in `tarehe`.
    const loanStart = String(payment.tangu || (payment.route === 'toa' ? payment.tarehe : '') || '').trim();
    if (!loanStart) {
      return null;
    }

    const matchingLoans = this.loans.filter(loan =>
      String(loan.user || '') === String(payment.user || '') &&
      String(loan.tarehe || '').trim() === loanStart
    );
    return matchingLoans.length === 1 ? matchingLoans[0] : null;
  }

  openInstallments(payment: any): void {
    const loan = this.getLoanForPayment(payment);
    const loanId = Number(loan && (loan.id || loan.pk)) || 0;
    if (!loanId) {
      this.snackbar.open(this.settings.t('Malipo haya hayajaunganishwa na ratiba moja ya mkopo.'));
      return;
    }

    if (this.scheduleLoan && String(this.scheduleLoan.pk) === String(payment.pk)) {
      this.isScheduleOpen = !this.isScheduleOpen;
      if (this.isScheduleOpen) {
        this.scrollScheduleIntoView();
      }
      return;
    }

    this.scheduleLoan = { ...payment, loan, loanId };
    this.isScheduleOpen = true;
    // load again every time, so payments made since the last look are shown
    if (this.installmentsLoading[loanId]) {
      this.scrollScheduleIntoView();
      return;
    }

    this.installmentsLoading[loanId] = true;
    this.restframework.getInstallmentsForLoan(loanId).then((data: any) => {
      this.installmentsByLoan[loanId] = Array.isArray(data) ? data.map(installment => ({
        ...installment,
        status: this.getInstallmentStatus(installment)
      })) : [];
      this.installmentsLoading[loanId] = false;
      this.scrollScheduleIntoView();
    }).catch(() => {
      this.installmentsByLoan[loanId] = [];
      this.installmentsLoading[loanId] = false;
      this.scrollScheduleIntoView();
    });
  }

  private scrollScheduleIntoView(delayMs = 80): void {
    setTimeout(() => {
      document.getElementById('installment-expanded-row')?.scrollIntoView({
        behavior: 'smooth',
        block: 'center'
      });
    }, delayMs);
  }

  closeInstallments(): void {
    this.isScheduleOpen = false;
  }

  isScheduleRow(payment: any): boolean {
    return !!this.scheduleLoan && String(this.scheduleLoan.pk) === String(payment && payment.pk);
  }

  onScheduleAnimationDone(event: AnimationEvent): void {
    if (event.toState === 'closed') {
      this.scheduleLoan = null;
    }
  }

  editPromise(installment: any): void {
    this.promiseEditorId = Number(installment.id);
    this.promiseDateDraft = installment.promised_date || '';
    this.promiseNoteDraft = installment.promise_note || '';
    setTimeout(() => {
      document.getElementById(`promise-editor-${installment.id}`)?.scrollIntoView({
        behavior: 'smooth',
        block: 'center'
      });
    }, 80);
  }

  cancelPromiseEdit(): void {
    this.promiseEditorId = null;
    this.promiseDateDraft = '';
    this.promiseNoteDraft = '';
    this.scrollScheduleIntoView(260);
  }

  savePromise(installment: any): void {
    if (!this.promiseDateDraft || this.promiseSaving) {
      return;
    }

    this.promiseSaving = true;
    this.restframework.saveInstallmentPromise(installment.id, {
      promised_date: this.promiseDateDraft,
      promise_note: this.promiseNoteDraft.trim()
    }).then((saved: any) => {
      const installments = this.installmentsByLoan[this.scheduleLoan.loanId] || [];
      this.installmentsByLoan[this.scheduleLoan.loanId] = installments.map(item =>
        Number(item.id) === Number(saved.id) ? { ...item, ...saved } : item
      );
      this.cancelPromiseEdit();
      this.snackbar.open(this.settings.t('Ahadi ya malipo imehifadhiwa. Awamu hii itaendelea kuwa haijalipwa hadi malipo yatakaporekodiwa.'));
    }).catch(() => {
      this.snackbar.open(this.settings.t('Haikuwezekana kuhifadhi tarehe ya ahadi. Tafadhali jaribu tena.'));
    }).finally(() => {
      this.promiseSaving = false;
    });
  }

  @HostListener('document:keydown.escape')
  onEscape(): void {
    this.closeInstallments();
  }

  // Paid: nothing left to pay
  // Partial: some money paid, but not all (e.g. 53,002 of 130,000)
  // Partial-Overdue: partly paid and the date has passed
  // Overdue: nothing paid and the date has passed
  // Upcoming: nothing paid yet, the date has not come
  getInstallmentStatus(installment) {
    const balance = Number(installment.balance);
    const paid = Number(installment.paid_amount) || 0;
    if (isFinite(balance) && balance <= 0) {
      return 'Paid';
    }

    let late = false;
    if (installment.due_date) {
      const due = new Date(installment.due_date + 'T00:00:00');
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      late = due < today;
    }

    if (paid > 0) {
      if (late) {
        return 'Partial-Overdue';
      }
      return 'Partial';
    }
    if (!installment.due_date) {
      return 'Not provided';
    }
    if (late) {
      return 'Overdue';
    }
    return 'Upcoming';
  }

  // the words shown in the "Hali" column
  statusLabel(status) {
    if (status === 'Paid') { return 'Imelipwa'; }
    if (status === 'Partial') { return 'Sehemu imelipwa'; }
    if (status === 'Partial-Overdue') { return 'Sehemu · imechelewa'; }
    if (status === 'Overdue') { return 'Imechelewa'; }
    if (status === 'Upcoming') { return 'Inakuja'; }
    return 'Haijawekwa';
  }

  takepdf(k){
    localStorage.removeItem('receiptno');
    
    this.selectedData = k;
    localStorage.setItem('receiptno', this.selectedData.pk);
    console.log('value: '+this.selectedData.pk)
    // this.receiptComponet.showreceipt();
    this.router.navigate(['/Admindash/Details/receipt'])

  }

}
