import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalEditAccountComponent } from './personal-edit-account.component';

describe('PersonalEditAccountComponent', () => {
  let component: PersonalEditAccountComponent;
  let fixture: ComponentFixture<PersonalEditAccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonalEditAccountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalEditAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
