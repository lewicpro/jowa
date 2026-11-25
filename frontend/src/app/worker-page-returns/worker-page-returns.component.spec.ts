import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkerPageReturnsComponent } from './worker-page-returns.component';

describe('WorkerPageReturnsComponent', () => {
  let component: WorkerPageReturnsComponent;
  let fixture: ComponentFixture<WorkerPageReturnsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkerPageReturnsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkerPageReturnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
