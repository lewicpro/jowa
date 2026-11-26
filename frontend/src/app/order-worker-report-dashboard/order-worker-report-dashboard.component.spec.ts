import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { OrderWorkerReportDashboardComponent } from './order-worker-report-dashboard.component';

describe('OrderWorkerReportDashboardComponent', () => {
  let component: OrderWorkerReportDashboardComponent;
  let fixture: ComponentFixture<OrderWorkerReportDashboardComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderWorkerReportDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderWorkerReportDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
