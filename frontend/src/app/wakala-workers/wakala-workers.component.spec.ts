import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { WakalaWorkersComponent } from './wakala-workers.component';

describe('WakalaWorkersComponent', () => {
  let component: WakalaWorkersComponent;
  let fixture: ComponentFixture<WakalaWorkersComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ WakalaWorkersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WakalaWorkersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
