import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OngezaChumbaComponent } from './ongeza-chumba.component';

describe('OngezaChumbaComponent', () => {
  let component: OngezaChumbaComponent;
  let fixture: ComponentFixture<OngezaChumbaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OngezaChumbaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OngezaChumbaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
