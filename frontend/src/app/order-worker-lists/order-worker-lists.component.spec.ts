import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderWorkerListsComponent } from './order-worker-lists.component';

describe('OrderWorkerListsComponent', () => {
  let component: OrderWorkerListsComponent;
  let fixture: ComponentFixture<OrderWorkerListsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderWorkerListsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderWorkerListsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
