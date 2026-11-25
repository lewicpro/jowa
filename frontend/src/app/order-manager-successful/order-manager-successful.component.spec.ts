import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderManagerSuccessfulComponent } from './order-manager-successful.component';

describe('OrderManagerSuccessfulComponent', () => {
  let component: OrderManagerSuccessfulComponent;
  let fixture: ComponentFixture<OrderManagerSuccessfulComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderManagerSuccessfulComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderManagerSuccessfulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
