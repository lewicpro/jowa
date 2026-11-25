import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalToaComponent } from './personal-toa.component';

describe('PersonalToaComponent', () => {
  let component: PersonalToaComponent;
  let fixture: ComponentFixture<PersonalToaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonalToaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalToaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
