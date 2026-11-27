import { Component, OnInit, ChangeDetectionStrategy, HostListener } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { RestframeworkService } from '../apiservice/restframework.service';
import { SettingsService } from '../settings/settings.service';

@Component({
    selector: 'app-waliokopa',
    templateUrl: './waliokopa.component.html',
    styleUrls: ['./waliokopa.component.css'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class WaliokopaComponent implements OnInit {
  malipo;
  users;
  scheduleLoan: any = null;
  installmentsByLoan: { [loanId: number]: any[] } = {};
  installmentsLoading: { [loanId: number]: boolean } = {};
  promisesByLoan: { [loanId: number]: any[] } = {};

  constructor(public restframework: RestframeworkService, public settings: SettingsService) {
    this.restframework.getMkopos().then(data => {
      this.malipo = data;
    });
    this.restframework.getLists().then(datas => {
      this.users = datas;
    });
    this.restframework.getPromisedInstallments().then((data: any) => {
      this.promisesByLoan = (Array.isArray(data) ? data : []).reduce((grouped, installment) => {
        const loanId = Number(installment.loan_pk);
        if (Number.isFinite(loanId) && loanId > 0) {
          grouped[loanId] = grouped[loanId] || [];
          grouped[loanId].push(installment);
        }
        return grouped;
      }, {} as { [loanId: number]: any[] });
    });

  }

  getLoanId(form: any): number {
    const loanId = Number(form && (form.pk || form.id));
    return Number.isFinite(loanId) && loanId > 0 ? loanId : 0;
  }

  openInstallments(form: any): void {
    const loanId = this.getLoanId(form);
    if (!loanId) {
      return;
    }

    this.scheduleLoan = form;
    if (this.installmentsByLoan[loanId] || this.installmentsLoading[loanId]) {
      return;
    }

    this.installmentsLoading[loanId] = true;
    this.restframework.getInstallmentsForLoan(loanId).then((data: any) => {
      this.installmentsByLoan[loanId] = Array.isArray(data) ? data.map(installment => ({
        ...installment,
        status: this.getInstallmentStatus(installment)
      })) : [];
      this.installmentsLoading[loanId] = false;
    }).catch(() => {
      this.installmentsByLoan[loanId] = [];
      this.installmentsLoading[loanId] = false;
    });
  }

  closeInstallments(): void {
    this.scheduleLoan = null;
  }

  @HostListener('document:keydown.escape')
  onEscape(): void {
    this.closeInstallments();
  }

  getInstallmentStatus(installment: any): string {
    const balance = Number(installment && installment.balance);
    if (Number.isFinite(balance) && balance <= 0) {
      return 'Paid';
    }

    const dueDate = installment && installment.due_date;
    if (!dueDate) {
      return 'Not provided';
    }

    const due = new Date(`${dueDate}T00:00:00`);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return due < today ? 'Overdue' : 'Upcoming';
  }


ngOnInit() {}


}

