import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DirecpayDetailsComponent } from './direcpay-details.component';

describe('DirecpayDetailsComponent', () => {
  let component: DirecpayDetailsComponent;
  let fixture: ComponentFixture<DirecpayDetailsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DirecpayDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirecpayDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
