import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { OverviewWakalaComponent } from './overview-wakala.component';

describe('OverviewWakalaComponent', () => {
  let component: OverviewWakalaComponent;
  let fixture: ComponentFixture<OverviewWakalaComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ OverviewWakalaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OverviewWakalaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
