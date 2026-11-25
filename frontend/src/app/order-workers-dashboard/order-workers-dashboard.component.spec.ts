import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderWorkersDashboardComponent } from './order-workers-dashboard.component';

describe('OrderWorkersDashboardComponent', () => {
  let component: OrderWorkersDashboardComponent;
  let fixture: ComponentFixture<OrderWorkersDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderWorkersDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderWorkersDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
