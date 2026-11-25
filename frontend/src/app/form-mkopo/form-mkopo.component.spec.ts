import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormMkopoComponent } from './form-mkopo.component';

describe('FormMkopoComponent', () => {
  let component: FormMkopoComponent;
  let fixture: ComponentFixture<FormMkopoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormMkopoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormMkopoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
