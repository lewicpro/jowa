import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkerReportComponent } from './worker-report.component';

describe('WorkerReportComponent', () => {
  let component: WorkerReportComponent;
  let fixture: ComponentFixture<WorkerReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkerReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkerReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
