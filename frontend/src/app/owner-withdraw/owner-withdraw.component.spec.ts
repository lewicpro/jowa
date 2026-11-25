import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnerWithdrawComponent } from './owner-withdraw.component';

describe('OwnerWithdrawComponent', () => {
  let component: OwnerWithdrawComponent;
  let fixture: ComponentFixture<OwnerWithdrawComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OwnerWithdrawComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OwnerWithdrawComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
