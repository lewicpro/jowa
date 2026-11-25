import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersDashboardWorkerComponent } from './orders-dashboard-worker.component';

describe('OrdersDashboardWorkerComponent', () => {
  let component: OrdersDashboardWorkerComponent;
  let fixture: ComponentFixture<OrdersDashboardWorkerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrdersDashboardWorkerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdersDashboardWorkerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
