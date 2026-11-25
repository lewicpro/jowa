import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenSnackserrorComponent } from './open-snackserror.component';

describe('OpenSnackserrorComponent', () => {
  let component: OpenSnackserrorComponent;
  let fixture: ComponentFixture<OpenSnackserrorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpenSnackserrorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpenSnackserrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
