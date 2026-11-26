import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { OrdersDashboardManagerComponent } from './orders-dashboard-manager.component';

describe('OrdersDashboardManagerComponent', () => {
  let component: OrdersDashboardManagerComponent;
  let fixture: ComponentFixture<OrdersDashboardManagerComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ OrdersDashboardManagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdersDashboardManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
