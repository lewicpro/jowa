import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { OrderManagerReportDashboardComponent } from './order-manager-report-dashboard.component';

describe('OrderManagerReportDashboardComponent', () => {
  let component: OrderManagerReportDashboardComponent;
  let fixture: ComponentFixture<OrderManagerReportDashboardComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderManagerReportDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderManagerReportDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
