import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderDirectorProfileComponent } from './order-director-profile.component';

describe('OrderDirectorProfileComponent', () => {
  let component: OrderDirectorProfileComponent;
  let fixture: ComponentFixture<OrderDirectorProfileComponent>;

  beforeEach(async(() => {
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
