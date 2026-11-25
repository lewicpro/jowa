import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderDirectorReportComponent } from './order-director-report.component';

describe('OrderDirectorReportComponent', () => {
  let component: OrderDirectorReportComponent;
  let fixture: ComponentFixture<OrderDirectorReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderDirectorReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderDirectorReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
