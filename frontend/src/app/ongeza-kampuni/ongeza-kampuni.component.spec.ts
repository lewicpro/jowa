import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OngezaKampuniComponent } from './ongeza-kampuni.component';

describe('OngezaKampuniComponent', () => {
  let component: OngezaKampuniComponent;
  let fixture: ComponentFixture<OngezaKampuniComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OngezaKampuniComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OngezaKampuniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
