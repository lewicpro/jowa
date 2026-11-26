import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { OrderProductsComponent } from './order-products.component';

describe('OrderProductsComponent', () => {
  let component: OrderProductsComponent;
  let fixture: ComponentFixture<OrderProductsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderProductsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
