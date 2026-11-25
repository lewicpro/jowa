import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardHatiMikopoComponent } from './dashboard-hati-mikopo.component';

describe('DashboardHatiMikopoComponent', () => {
  let component: DashboardHatiMikopoComponent;
  let fixture: ComponentFixture<DashboardHatiMikopoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardHatiMikopoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardHatiMikopoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
