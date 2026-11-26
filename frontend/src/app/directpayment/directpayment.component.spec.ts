import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DirectpaymentComponent } from './directpayment.component';

describe('DirectpaymentComponent', () => {
  let component: DirectpaymentComponent;
  let fixture: ComponentFixture<DirectpaymentComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DirectpaymentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectpaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
