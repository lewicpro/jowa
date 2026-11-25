import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersSetOrdersComponent } from './orders-set-orders.component';

describe('OrdersSetOrdersComponent', () => {
  let component: OrdersSetOrdersComponent;
  let fixture: ComponentFixture<OrdersSetOrdersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrdersSetOrdersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdersSetOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
