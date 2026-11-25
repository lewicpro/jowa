import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersCustomersListsComponent } from './orders-customers-lists.component';

describe('OrdersCustomersListsComponent', () => {
  let component: OrdersCustomersListsComponent;
  let fixture: ComponentFixture<OrdersCustomersListsComponent>;

  beforeEach(async(() => {
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
