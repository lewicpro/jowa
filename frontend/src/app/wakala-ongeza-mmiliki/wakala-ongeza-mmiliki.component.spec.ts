import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WakalaOngezaMmilikiComponent } from './wakala-ongeza-mmiliki.component';

describe('WakalaOngezaMmilikiComponent', () => {
  let component: WakalaOngezaMmilikiComponent;
  let fixture: ComponentFixture<WakalaOngezaMmilikiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WakalaOngezaMmilikiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WakalaOngezaMmilikiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
