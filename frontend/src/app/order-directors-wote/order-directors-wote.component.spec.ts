import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { OrderDirectorsWoteComponent } from './order-directors-wote.component';

describe('OrderDirectorsWoteComponent', () => {
  let component: OrderDirectorsWoteComponent;
  let fixture: ComponentFixture<OrderDirectorsWoteComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderDirectorsWoteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderDirectorsWoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
