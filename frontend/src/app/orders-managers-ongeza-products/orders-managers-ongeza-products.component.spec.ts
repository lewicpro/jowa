import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersManagersOngezaProductsComponent } from './orders-managers-ongeza-products.component';

describe('OrdersManagersOngezaProductsComponent', () => {
  let component: OrdersManagersOngezaProductsComponent;
  let fixture: ComponentFixture<OrdersManagersOngezaProductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrdersManagersOngezaProductsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdersManagersOngezaProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
