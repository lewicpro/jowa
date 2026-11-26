import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PersonalWekaComponent } from './personal-weka.component';

describe('PersonalWekaComponent', () => {
  let component: PersonalWekaComponent;
  let fixture: ComponentFixture<PersonalWekaComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonalWekaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalWekaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
