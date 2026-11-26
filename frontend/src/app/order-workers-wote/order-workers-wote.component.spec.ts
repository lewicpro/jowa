import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { OrderWorkersWoteComponent } from './order-workers-wote.component';

describe('OrderWorkersWoteComponent', () => {
  let component: OrderWorkersWoteComponent;
  let fixture: ComponentFixture<OrderWorkersWoteComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderWorkersWoteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderWorkersWoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
