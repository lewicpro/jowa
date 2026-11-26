import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { WorkerMadeniComponent } from './worker-madeni.component';

describe('WorkerMadeniComponent', () => {
  let component: WorkerMadeniComponent;
  let fixture: ComponentFixture<WorkerMadeniComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkerMadeniComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkerMadeniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
