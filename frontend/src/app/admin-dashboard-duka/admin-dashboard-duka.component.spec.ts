import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AdminDashboardDukaComponent } from './admin-dashboard-duka.component';

describe('AdminDashboardDukaComponent', () => {
  let component: AdminDashboardDukaComponent;
  let fixture: ComponentFixture<AdminDashboardDukaComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminDashboardDukaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminDashboardDukaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
