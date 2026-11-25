import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OngezaMmilikiDukaComponent } from './ongeza-mmiliki-duka.component';

describe('OngezaMmilikiDukaComponent', () => {
  let component: OngezaMmilikiDukaComponent;
  let fixture: ComponentFixture<OngezaMmilikiDukaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OngezaMmilikiDukaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OngezaMmilikiDukaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
