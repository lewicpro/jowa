import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { OrderWorkerOrderListsComponent } from './order-worker-order-lists.component';

describe('OrderWorkerOrderListsComponent', () => {
  let component: OrderWorkerOrderListsComponent;
  let fixture: ComponentFixture<OrderWorkerOrderListsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderWorkerOrderListsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderWorkerOrderListsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
