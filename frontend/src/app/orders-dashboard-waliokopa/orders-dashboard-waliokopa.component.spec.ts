import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { OrdersDashboardWaliokopaComponent } from './orders-dashboard-waliokopa.component';

describe('OrdersDashboardWaliokopaComponent', () => {
  let component: OrdersDashboardWaliokopaComponent;
  let fixture: ComponentFixture<OrdersDashboardWaliokopaComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ OrdersDashboardWaliokopaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdersDashboardWaliokopaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
