import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersDashboardBidhaaZoteComponent } from './orders-dashboard-bidhaa-zote.component';

describe('OrdersDashboardBidhaaZoteComponent', () => {
  let component: OrdersDashboardBidhaaZoteComponent;
  let fixture: ComponentFixture<OrdersDashboardBidhaaZoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrdersDashboardBidhaaZoteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdersDashboardBidhaaZoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
