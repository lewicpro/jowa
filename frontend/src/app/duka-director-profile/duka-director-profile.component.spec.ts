import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DukaDirectorProfileComponent } from './duka-director-profile.component';

describe('DukaDirectorProfileComponent', () => {
  let component: DukaDirectorProfileComponent;
  let fixture: ComponentFixture<DukaDirectorProfileComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DukaDirectorProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DukaDirectorProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
