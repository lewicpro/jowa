import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderRegisterCustomersComponent } from './order-register-customers.component';

describe('OrderRegisterCustomersComponent', () => {
  let component: OrderRegisterCustomersComponent;
  let fixture: ComponentFixture<OrderRegisterCustomersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderRegisterCustomersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderRegisterCustomersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
