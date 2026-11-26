import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { OrderManagersWaDirectorComponent } from './order-managers-wa-director.component';

describe('OrderManagersWaDirectorComponent', () => {
  let component: OrderManagersWaDirectorComponent;
  let fixture: ComponentFixture<OrderManagersWaDirectorComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderManagersWaDirectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderManagersWaDirectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
