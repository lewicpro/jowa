import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DashboardMkopeshajicompanyInfoComponent } from './dashboard-mkopeshajicompany-info.component';

describe('DashboardMkopeshajicompanyInfoComponent', () => {
  let component: DashboardMkopeshajicompanyInfoComponent;
  let fixture: ComponentFixture<DashboardMkopeshajicompanyInfoComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardMkopeshajicompanyInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardMkopeshajicompanyInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
