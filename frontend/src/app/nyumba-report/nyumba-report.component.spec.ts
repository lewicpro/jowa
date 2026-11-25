import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NyumbaReportComponent } from './nyumba-report.component';

describe('NyumbaReportComponent', () => {
  let component: NyumbaReportComponent;
  let fixture: ComponentFixture<NyumbaReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NyumbaReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NyumbaReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
