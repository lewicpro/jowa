import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { OrdersDashboardOngezaWorkerComponent } from './orders-dashboard-ongeza-worker.component';

describe('OrdersDashboardOngezaWorkerComponent', () => {
  let component: OrdersDashboardOngezaWorkerComponent;
  let fixture: ComponentFixture<OrdersDashboardOngezaWorkerComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ OrdersDashboardOngezaWorkerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdersDashboardOngezaWorkerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
