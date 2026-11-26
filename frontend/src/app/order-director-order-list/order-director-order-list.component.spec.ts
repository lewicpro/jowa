import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { OrderDirectorOrderListComponent } from './order-director-order-list.component';

describe('OrderDirectorOrderListComponent', () => {
  let component: OrderDirectorOrderListComponent;
  let fixture: ComponentFixture<OrderDirectorOrderListComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderDirectorOrderListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderDirectorOrderListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
