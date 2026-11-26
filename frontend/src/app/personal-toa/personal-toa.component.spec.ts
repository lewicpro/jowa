import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PersonalToaComponent } from './personal-toa.component';

describe('PersonalToaComponent', () => {
  let component: PersonalToaComponent;
  let fixture: ComponentFixture<PersonalToaComponent>;

  beforeEach(waitForAsync(() => {
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
