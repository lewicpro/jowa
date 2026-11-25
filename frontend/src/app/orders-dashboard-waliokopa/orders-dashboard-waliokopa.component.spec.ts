import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersDashboardWaliokopaComponent } from './orders-dashboard-waliokopa.component';

describe('OrdersDashboardWaliokopaComponent', () => {
  let component: OrdersDashboardWaliokopaComponent;
  let fixture: ComponentFixture<OrdersDashboardWaliokopaComponent>;

  beforeEach(async(() => {
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
