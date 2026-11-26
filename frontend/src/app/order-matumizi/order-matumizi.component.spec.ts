import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { OrderMatumiziComponent } from './order-matumizi.component';

describe('OrderMatumiziComponent', () => {
  let component: OrderMatumiziComponent;
  let fixture: ComponentFixture<OrderMatumiziComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderMatumiziComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderMatumiziComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
