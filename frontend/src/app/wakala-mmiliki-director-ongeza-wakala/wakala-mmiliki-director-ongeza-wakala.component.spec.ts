import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { WakalaMmilikiDirectorOngezaWakalaComponent } from './wakala-mmiliki-director-ongeza-wakala.component';

describe('WakalaMmilikiDirectorOngezaWakalaComponent', () => {
  let component: WakalaMmilikiDirectorOngezaWakalaComponent;
  let fixture: ComponentFixture<WakalaMmilikiDirectorOngezaWakalaComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ WakalaMmilikiDirectorOngezaWakalaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WakalaMmilikiDirectorOngezaWakalaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
