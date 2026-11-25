import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderManagersDashboardComponent } from './order-managers-dashboard.component';

describe('OrderManagersDashboardComponent', () => {
  let component: OrderManagersDashboardComponent;
  let fixture: ComponentFixture<OrderManagersDashboardComponent>;

  beforeEach(async(() => {
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
