import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { OrdersWorkerWithdrawComponent } from './orders-worker-withdraw.component';

describe('OrdersWorkerWithdrawComponent', () => {
  let component: OrdersWorkerWithdrawComponent;
  let fixture: ComponentFixture<OrdersWorkerWithdrawComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ OrdersWorkerWithdrawComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdersWorkerWithdrawComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
