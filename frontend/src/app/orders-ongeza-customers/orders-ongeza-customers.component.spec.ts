import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersOngezaCustomersComponent } from './orders-ongeza-customers.component';

describe('OrdersOngezaCustomersComponent', () => {
  let component: OrdersOngezaCustomersComponent;
  let fixture: ComponentFixture<OrdersOngezaCustomersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrdersOngezaCustomersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdersOngezaCustomersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
