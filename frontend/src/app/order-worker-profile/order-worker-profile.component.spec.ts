import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderWorkerProfileComponent } from './order-worker-profile.component';

describe('OrderWorkerProfileComponent', () => {
  let component: OrderWorkerProfileComponent;
  let fixture: ComponentFixture<OrderWorkerProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderWorkerProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderWorkerProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
