import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WakalaWorkerDashboardComponent } from './wakala-worker-dashboard.component';

describe('WakalaWorkerDashboardComponent', () => {
  let component: WakalaWorkerDashboardComponent;
  let fixture: ComponentFixture<WakalaWorkerDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WakalaWorkerDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WakalaWorkerDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
