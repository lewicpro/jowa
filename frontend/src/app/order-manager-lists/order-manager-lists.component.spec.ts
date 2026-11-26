import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { OrderManagerListsComponent } from './order-manager-lists.component';

describe('OrderManagerListsComponent', () => {
  let component: OrderManagerListsComponent;
  let fixture: ComponentFixture<OrderManagerListsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderManagerListsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderManagerListsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
