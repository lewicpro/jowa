import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { OrderDirectorProfileComponent } from './order-director-profile.component';

describe('OrderDirectorProfileComponent', () => {
  let component: OrderDirectorProfileComponent;
  let fixture: ComponentFixture<OrderDirectorProfileComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderDirectorProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderDirectorProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
