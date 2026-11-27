import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { RestframeworkService } from '../apiservice/restframework.service';

@Component({
    selector: 'app-overdue-this-month',
    templateUrl: './overdue-this-month.component.html',
    styleUrls: ['./overdue-this-month.component.css'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class OverdueThisMonthComponent implements OnInit {
  overdue;
  totalOverdue = 0;
  pageIndex = 0;
  readonly pageSize = 100;
  loading = true;
  private latestRequest = 0;

  get totalPages() {
    return Math.max(1, Math.ceil(this.totalOverdue / this.pageSize));
  }

  get pageEnd() {
    return Math.min((this.pageIndex + 1) * this.pageSize, this.totalOverdue);
  }

  constructor(public restframework: RestframeworkService) {
    this.overdue = [];
    this.loadPage(0);
  }

  ngOnInit() {
  }

  toDate(value) {
    const date = new Date(String(value || '') + 'T00:00:00');
    return isNaN(date.getTime()) ? null : date;
  }

  loadPage(pageIndex: number) {
    const requestId = ++this.latestRequest;
    this.loading = true;
    this.restframework.getOverdueInstallments(pageIndex + 1).then((data: any) => {
      if (requestId !== this.latestRequest) {
        return;
      }
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      const pageResults = Array.isArray(data && data.results) ? data.results : [];
      this.totalOverdue = Number(data && data.count) || 0;
      this.pageIndex = pageIndex;
      this.overdue = pageResults.map(installment => {
        const dueDate = this.toDate(installment.due_date);
        return {
          ...installment,
          overdueMonth: dueDate ? dueDate.toLocaleString('default', { month: 'long', year: 'numeric' }) : '',
          overdueMonths: dueDate ? Math.max(1, (today.getFullYear() - dueDate.getFullYear()) * 12 + today.getMonth() - dueDate.getMonth()) : 0
        };
      });
      this.loading = false;
    });
  }

}
