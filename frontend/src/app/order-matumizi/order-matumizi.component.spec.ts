import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderMatumiziComponent } from './order-matumizi.component';

describe('OrderMatumiziComponent', () => {
  let component: OrderMatumiziComponent;
  let fixture: ComponentFixture<OrderMatumiziComponent>;

  beforeEach(async(() => {
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
