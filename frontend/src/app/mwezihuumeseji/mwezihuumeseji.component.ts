import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { RestframeworkService } from '../apiservice/restframework.service';

@Component({
    selector: 'app-mwezihuumeseji',
    templateUrl: './mwezihuumeseji.component.html',
    styleUrls: ['./mwezihuumeseji.component.css'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class MwezihuumesejiComponent implements OnInit {
  meseji;
  filtertext;

  constructor(public restframework:RestframeworkService) { 
    this.meseji = [];
    this.restframework.getInstallments().then(data => {
      const installments = Array.isArray(data) ? data : [];
      const today = new Date();
      this.meseji = installments.filter(installment => {
        const dueDate = this.toDate(installment.due_date);
        return dueDate && dueDate.getFullYear() === today.getFullYear() &&
          dueDate.getMonth() === today.getMonth();
      }).map(installment => ({
        ...installment,
        dueMonth: this.toDate(installment.due_date).toLocaleString('default', { month: 'long' }),
        dueAmount: installment.scheduled_amount
      }));
    });
  }

  ngOnInit() {
  }

  toDate(value) {
    const date = new Date(String(value || '') + 'T00:00:00');
    return isNaN(date.getTime()) ? null : date;
  }

}
