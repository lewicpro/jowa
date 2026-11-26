import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { WakalaMmilikiDirectorProfileComponent } from './wakala-mmiliki-director-profile.component';

describe('WakalaMmilikiDirectorProfileComponent', () => {
  let component: WakalaMmilikiDirectorProfileComponent;
  let fixture: ComponentFixture<WakalaMmilikiDirectorProfileComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ WakalaMmilikiDirectorProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WakalaMmilikiDirectorProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
