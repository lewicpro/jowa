import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { WorkersInfoMonthlyComponent } from './workers-info-monthly.component';

describe('WorkersInfoMonthlyComponent', () => {
  let component: WorkersInfoMonthlyComponent;
  let fixture: ComponentFixture<WorkersInfoMonthlyComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkersInfoMonthlyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkersInfoMonthlyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
