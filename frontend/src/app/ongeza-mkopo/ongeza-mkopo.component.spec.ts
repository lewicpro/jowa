import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { OngezaMkopoComponent } from './ongeza-mkopo.component';

describe('OngezaMkopoComponent', () => {
  let component: OngezaMkopoComponent;
  let fixture: ComponentFixture<OngezaMkopoComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ OngezaMkopoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OngezaMkopoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
