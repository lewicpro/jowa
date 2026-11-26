import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { OrdersSetOrdersComponent } from './orders-set-orders.component';

describe('OrdersSetOrdersComponent', () => {
  let component: OrdersSetOrdersComponent;
  let fixture: ComponentFixture<OrdersSetOrdersComponent>;

  beforeEach(waitForAsync(() => {
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
