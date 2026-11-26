import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { WakalaMmilikiDirectorOngezaWorkersComponent } from './wakala-mmiliki-director-ongeza-workers.component';

describe('WakalaMmilikiDirectorOngezaWorkersComponent', () => {
  let component: WakalaMmilikiDirectorOngezaWorkersComponent;
  let fixture: ComponentFixture<WakalaMmilikiDirectorOngezaWorkersComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ WakalaMmilikiDirectorOngezaWorkersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WakalaMmilikiDirectorOngezaWorkersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
