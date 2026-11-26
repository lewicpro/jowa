import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { OrderWorkerMatumiziComponent } from './order-worker-matumizi.component';

describe('OrderWorkerMatumiziComponent', () => {
  let component: OrderWorkerMatumiziComponent;
  let fixture: ComponentFixture<OrderWorkerMatumiziComponent>;

  beforeEach(waitForAsync(() => {
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
