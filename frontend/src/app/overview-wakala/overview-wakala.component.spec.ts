import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OverviewWakalaComponent } from './overview-wakala.component';

describe('OverviewWakalaComponent', () => {
  let component: OverviewWakalaComponent;
  let fixture: ComponentFixture<OverviewWakalaComponent>;

  beforeEach(async(() => {
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
