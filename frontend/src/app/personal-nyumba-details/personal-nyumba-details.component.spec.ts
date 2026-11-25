import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalNyumbaDetailsComponent } from './personal-nyumba-details.component';

describe('PersonalNyumbaDetailsComponent', () => {
  let component: PersonalNyumbaDetailsComponent;
  let fixture: ComponentFixture<PersonalNyumbaDetailsComponent>;

  beforeEach(async(() => {
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
