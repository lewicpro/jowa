import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WakalaMmilikiDirectorListWakalaComponent } from './wakala-mmiliki-director-list-wakala.component';

describe('WakalaMmilikiDirectorListWakalaComponent', () => {
  let component: WakalaMmilikiDirectorListWakalaComponent;
  let fixture: ComponentFixture<WakalaMmilikiDirectorListWakalaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WakalaMmilikiDirectorListWakalaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WakalaMmilikiDirectorListWakalaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
