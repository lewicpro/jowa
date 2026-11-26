import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { OwnerDepositComponent } from './owner-deposit.component';

describe('OwnerDepositComponent', () => {
  let component: OwnerDepositComponent;
  let fixture: ComponentFixture<OwnerDepositComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ OwnerDepositComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OwnerDepositComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
