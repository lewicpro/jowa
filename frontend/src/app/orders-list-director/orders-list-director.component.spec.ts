import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { OrdersListDirectorComponent } from './orders-list-director.component';

describe('OrdersListDirectorComponent', () => {
  let component: OrdersListDirectorComponent;
  let fixture: ComponentFixture<OrdersListDirectorComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ OrdersListDirectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdersListDirectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
