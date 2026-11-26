import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { OrdersDirectorApprovedComponent } from './orders-director-approved.component';

describe('OrdersDirectorApprovedComponent', () => {
  let component: OrdersDirectorApprovedComponent;
  let fixture: ComponentFixture<OrdersDirectorApprovedComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ OrdersDirectorApprovedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdersDirectorApprovedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
