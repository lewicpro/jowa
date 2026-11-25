import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderCustomersComponent } from './order-customers.component';

describe('OrderCustomersComponent', () => {
  let component: OrderCustomersComponent;
  let fixture: ComponentFixture<OrderCustomersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderCustomersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderCustomersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
