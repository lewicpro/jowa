import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { OrdersDashboardMalipoComponent } from './orders-dashboard-malipo.component';

describe('OrdersDashboardMalipoComponent', () => {
  let component: OrdersDashboardMalipoComponent;
  let fixture: ComponentFixture<OrdersDashboardMalipoComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ OrdersDashboardMalipoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdersDashboardMalipoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
