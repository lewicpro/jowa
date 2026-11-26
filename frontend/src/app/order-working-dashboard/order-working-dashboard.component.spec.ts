import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { OrderWorkingDashboardComponent } from './order-working-dashboard.component';

describe('OrderWorkingDashboardComponent', () => {
  let component: OrderWorkingDashboardComponent;
  let fixture: ComponentFixture<OrderWorkingDashboardComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderWorkingDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderWorkingDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
