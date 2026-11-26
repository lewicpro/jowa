import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { NyumbaReportComponent } from './nyumba-report.component';

describe('NyumbaReportComponent', () => {
  let component: NyumbaReportComponent;
  let fixture: ComponentFixture<NyumbaReportComponent>;

  beforeEach(waitForAsync(() => {
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
