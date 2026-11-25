import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderWorkerMatumiziComponent } from './order-worker-matumizi.component';

describe('OrderWorkerMatumiziComponent', () => {
  let component: OrderWorkerMatumiziComponent;
  let fixture: ComponentFixture<OrderWorkerMatumiziComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderWorkerMatumiziComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderWorkerMatumiziComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
