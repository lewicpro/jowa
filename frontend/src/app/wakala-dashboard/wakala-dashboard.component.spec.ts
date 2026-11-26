import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { WakalaDashboardComponent } from './wakala-dashboard.component';

describe('WakalaDashboardComponent', () => {
  let component: WakalaDashboardComponent;
  let fixture: ComponentFixture<WakalaDashboardComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ WakalaDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WakalaDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
