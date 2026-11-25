import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderDirectorsDashboardComponent } from './order-directors-dashboard.component';

describe('OrderDirectorsDashboardComponent', () => {
  let component: OrderDirectorsDashboardComponent;
  let fixture: ComponentFixture<OrderDirectorsDashboardComponent>;

  beforeEach(async(() => {
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
