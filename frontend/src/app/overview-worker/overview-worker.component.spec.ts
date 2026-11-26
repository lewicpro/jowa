import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { OverviewWorkerComponent } from './overview-worker.component';

describe('OverviewWorkerComponent', () => {
  let component: OverviewWorkerComponent;
  let fixture: ComponentFixture<OverviewWorkerComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ OverviewWorkerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OverviewWorkerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
