import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersDashboardManagerComponent } from './orders-dashboard-manager.component';

describe('OrdersDashboardManagerComponent', () => {
  let component: OrdersDashboardManagerComponent;
  let fixture: ComponentFixture<OrdersDashboardManagerComponent>;

  beforeEach(async(() => {
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
