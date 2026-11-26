import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { OrderManagersWoteComponent } from './order-managers-wote.component';

describe('OrderManagersWoteComponent', () => {
  let component: OrderManagersWoteComponent;
  let fixture: ComponentFixture<OrderManagersWoteComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderManagersWoteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderManagersWoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
