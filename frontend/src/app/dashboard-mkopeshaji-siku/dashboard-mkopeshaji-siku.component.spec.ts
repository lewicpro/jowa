import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DashboardMkopeshajiSikuComponent } from './dashboard-mkopeshaji-siku.component';

describe('DashboardMkopeshajiSikuComponent', () => {
  let component: DashboardMkopeshajiSikuComponent;
  let fixture: ComponentFixture<DashboardMkopeshajiSikuComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardMkopeshajiSikuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardMkopeshajiSikuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
