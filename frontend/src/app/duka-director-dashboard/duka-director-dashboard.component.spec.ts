import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DukaDirectorDashboardComponent } from './duka-director-dashboard.component';

describe('DukaDirectorDashboardComponent', () => {
  let component: DukaDirectorDashboardComponent;
  let fixture: ComponentFixture<DukaDirectorDashboardComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DukaDirectorDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DukaDirectorDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
