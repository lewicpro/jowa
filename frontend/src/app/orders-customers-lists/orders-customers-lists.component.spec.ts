import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { OrdersCustomersListsComponent } from './orders-customers-lists.component';

describe('OrdersCustomersListsComponent', () => {
  let component: OrdersCustomersListsComponent;
  let fixture: ComponentFixture<OrdersCustomersListsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ OrdersCustomersListsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdersCustomersListsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
