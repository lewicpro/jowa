import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersDirectorApprovedComponent } from './orders-director-approved.component';

describe('OrdersDirectorApprovedComponent', () => {
  let component: OrdersDirectorApprovedComponent;
  let fixture: ComponentFixture<OrdersDirectorApprovedComponent>;

  beforeEach(async(() => {
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
