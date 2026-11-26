import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PersonalPaymentsComponent } from './personal-payments.component';

describe('PersonalPaymentsComponent', () => {
  let component: PersonalPaymentsComponent;
  let fixture: ComponentFixture<PersonalPaymentsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonalPaymentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalPaymentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
