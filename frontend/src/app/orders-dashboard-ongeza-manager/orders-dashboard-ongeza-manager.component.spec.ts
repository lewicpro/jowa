import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { OrdersDashboardOngezaManagerComponent } from './orders-dashboard-ongeza-manager.component';

describe('OrdersDashboardOngezaManagerComponent', () => {
  let component: OrdersDashboardOngezaManagerComponent;
  let fixture: ComponentFixture<OrdersDashboardOngezaManagerComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ OrdersDashboardOngezaManagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdersDashboardOngezaManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
