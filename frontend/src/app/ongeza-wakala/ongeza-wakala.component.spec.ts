import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OngezaWakalaComponent } from './ongeza-wakala.component';

describe('OngezaWakalaComponent', () => {
  let component: OngezaWakalaComponent;
  let fixture: ComponentFixture<OngezaWakalaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OngezaWakalaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OngezaWakalaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
