import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderManagerReportDashboardComponent } from './order-manager-report-dashboard.component';

describe('OrderManagerReportDashboardComponent', () => {
  let component: OrderManagerReportDashboardComponent;
  let fixture: ComponentFixture<OrderManagerReportDashboardComponent>;

  beforeEach(async(() => {
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
