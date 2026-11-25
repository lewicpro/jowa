import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderManagerMatumiziComponent } from './order-manager-matumizi.component';

describe('OrderManagerMatumiziComponent', () => {
  let component: OrderManagerMatumiziComponent;
  let fixture: ComponentFixture<OrderManagerMatumiziComponent>;

  beforeEach(async(() => {
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
