import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DukaDirectorReportComponent } from './duka-director-report.component';

describe('DukaDirectorReportComponent', () => {
  let component: DukaDirectorReportComponent;
  let fixture: ComponentFixture<DukaDirectorReportComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DukaDirectorReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DukaDirectorReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
