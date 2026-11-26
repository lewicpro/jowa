import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PersonalNyumbaDetailsComponent } from './personal-nyumba-details.component';

describe('PersonalNyumbaDetailsComponent', () => {
  let component: PersonalNyumbaDetailsComponent;
  let fixture: ComponentFixture<PersonalNyumbaDetailsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonalNyumbaDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalNyumbaDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
