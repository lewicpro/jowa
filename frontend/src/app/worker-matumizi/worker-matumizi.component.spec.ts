import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { WorkerMatumiziComponent } from './worker-matumizi.component';

describe('WorkerMatumiziComponent', () => {
  let component: WorkerMatumiziComponent;
  let fixture: ComponentFixture<WorkerMatumiziComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkerMatumiziComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkerMatumiziComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
