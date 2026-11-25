import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardMkopeshajicompanyInfoComponent } from './dashboard-mkopeshajicompany-info.component';

describe('DashboardMkopeshajicompanyInfoComponent', () => {
  let component: DashboardMkopeshajicompanyInfoComponent;
  let fixture: ComponentFixture<DashboardMkopeshajicompanyInfoComponent>;

  beforeEach(async(() => {
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
