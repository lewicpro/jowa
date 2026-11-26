import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { OrderManagerMatumiziComponent } from './order-manager-matumizi.component';

describe('OrderManagerMatumiziComponent', () => {
  let component: OrderManagerMatumiziComponent;
  let fixture: ComponentFixture<OrderManagerMatumiziComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderManagerMatumiziComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderManagerMatumiziComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
