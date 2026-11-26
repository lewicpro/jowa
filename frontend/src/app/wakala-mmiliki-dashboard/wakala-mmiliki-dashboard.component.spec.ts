import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { WakalaMmilikiDashboardComponent } from './wakala-mmiliki-dashboard.component';

describe('WakalaMmilikiDashboardComponent', () => {
  let component: WakalaMmilikiDashboardComponent;
  let fixture: ComponentFixture<WakalaMmilikiDashboardComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ WakalaMmilikiDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WakalaMmilikiDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
