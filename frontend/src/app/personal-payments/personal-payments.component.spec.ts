import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalPaymentsComponent } from './personal-payments.component';

describe('PersonalPaymentsComponent', () => {
  let component: PersonalPaymentsComponent;
  let fixture: ComponentFixture<PersonalPaymentsComponent>;

  beforeEach(async(() => {
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
