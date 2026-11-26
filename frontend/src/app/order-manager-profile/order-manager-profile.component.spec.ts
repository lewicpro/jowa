import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { OrderManagerProfileComponent } from './order-manager-profile.component';

describe('OrderManagerProfileComponent', () => {
  let component: OrderManagerProfileComponent;
  let fixture: ComponentFixture<OrderManagerProfileComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderManagerProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderManagerProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
