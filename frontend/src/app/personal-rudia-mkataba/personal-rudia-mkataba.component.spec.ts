import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PersonalRudiaMkatabaComponent } from './personal-rudia-mkataba.component';

describe('PersonalRudiaMkatabaComponent', () => {
  let component: PersonalRudiaMkatabaComponent;
  let fixture: ComponentFixture<PersonalRudiaMkatabaComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonalRudiaMkatabaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalRudiaMkatabaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
