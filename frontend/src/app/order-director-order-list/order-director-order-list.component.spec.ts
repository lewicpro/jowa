import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderDirectorOrderListComponent } from './order-director-order-list.component';

describe('OrderDirectorOrderListComponent', () => {
  let component: OrderDirectorOrderListComponent;
  let fixture: ComponentFixture<OrderDirectorOrderListComponent>;

  beforeEach(async(() => {
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
