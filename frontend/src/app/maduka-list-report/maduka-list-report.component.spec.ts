import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MadukaListReportComponent } from './maduka-list-report.component';

describe('MadukaListReportComponent', () => {
  let component: MadukaListReportComponent;
  let fixture: ComponentFixture<MadukaListReportComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MadukaListReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MadukaListReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
