import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { OrdersApprouvedComponent } from './orders-approuved.component';

describe('OrdersApprouvedComponent', () => {
  let component: OrdersApprouvedComponent;
  let fixture: ComponentFixture<OrdersApprouvedComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ OrdersApprouvedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdersApprouvedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
