import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { BankstatementComponent } from './bankstatement.component';

describe('BankstatementComponent', () => {
  let component: BankstatementComponent;
  let fixture: ComponentFixture<BankstatementComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ BankstatementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BankstatementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
