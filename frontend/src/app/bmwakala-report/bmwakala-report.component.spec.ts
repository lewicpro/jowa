import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BmwakalaReportComponent } from './bmwakala-report.component';

describe('BmwakalaReportComponent', () => {
  let component: BmwakalaReportComponent;
  let fixture: ComponentFixture<BmwakalaReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BmwakalaReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BmwakalaReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
