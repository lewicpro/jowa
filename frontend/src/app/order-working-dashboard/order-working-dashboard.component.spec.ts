import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderWorkingDashboardComponent } from './order-working-dashboard.component';

describe('OrderWorkingDashboardComponent', () => {
  let component: OrderWorkingDashboardComponent;
  let fixture: ComponentFixture<OrderWorkingDashboardComponent>;

  beforeEach(async(() => {
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
