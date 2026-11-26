import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { WorkersDashboardComponent } from './workers-dashboard.component';

describe('WorkersDashboardComponent', () => {
  let component: WorkersDashboardComponent;
  let fixture: ComponentFixture<WorkersDashboardComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkersDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkersDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
