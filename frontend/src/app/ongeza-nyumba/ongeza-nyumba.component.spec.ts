import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { OngezaNyumbaComponent } from './ongeza-nyumba.component';

describe('OngezaNyumbaComponent', () => {
  let component: OngezaNyumbaComponent;
  let fixture: ComponentFixture<OngezaNyumbaComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ OngezaNyumbaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OngezaNyumbaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
