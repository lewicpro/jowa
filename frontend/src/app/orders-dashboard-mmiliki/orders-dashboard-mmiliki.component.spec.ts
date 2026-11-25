import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersDashboardMmilikiComponent } from './orders-dashboard-mmiliki.component';

describe('OrdersDashboardMmilikiComponent', () => {
  let component: OrdersDashboardMmilikiComponent;
  let fixture: ComponentFixture<OrdersDashboardMmilikiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrdersDashboardMmilikiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdersDashboardMmilikiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
