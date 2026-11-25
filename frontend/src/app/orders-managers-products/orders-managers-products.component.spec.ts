import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersManagersProductsComponent } from './orders-managers-products.component';

describe('OrdersManagersProductsComponent', () => {
  let component: OrdersManagersProductsComponent;
  let fixture: ComponentFixture<OrdersManagersProductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrdersManagersProductsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdersManagersProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
