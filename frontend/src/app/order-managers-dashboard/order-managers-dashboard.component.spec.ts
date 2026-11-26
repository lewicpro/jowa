import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { OrderManagersDashboardComponent } from './order-managers-dashboard.component';

describe('OrderManagersDashboardComponent', () => {
  let component: OrderManagersDashboardComponent;
  let fixture: ComponentFixture<OrderManagersDashboardComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderManagersDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderManagersDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
