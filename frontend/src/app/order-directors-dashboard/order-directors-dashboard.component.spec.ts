import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { OrderDirectorsDashboardComponent } from './order-directors-dashboard.component';

describe('OrderDirectorsDashboardComponent', () => {
  let component: OrderDirectorsDashboardComponent;
  let fixture: ComponentFixture<OrderDirectorsDashboardComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderDirectorsDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderDirectorsDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
