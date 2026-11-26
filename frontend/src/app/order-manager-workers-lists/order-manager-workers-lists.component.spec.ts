import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { OrderManagerWorkersListsComponent } from './order-manager-workers-lists.component';

describe('OrderManagerWorkersListsComponent', () => {
  let component: OrderManagerWorkersListsComponent;
  let fixture: ComponentFixture<OrderManagerWorkersListsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderManagerWorkersListsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderManagerWorkersListsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
