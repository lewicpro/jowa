import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkerKaziComponent } from './worker-kazi.component';

describe('WorkerKaziComponent', () => {
  let component: WorkerKaziComponent;
  let fixture: ComponentFixture<WorkerKaziComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkerKaziComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkerKaziComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
