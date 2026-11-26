import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DashboardMkopeshajiSikuToaComponent } from './dashboard-mkopeshaji-siku-toa.component';

describe('DashboardMkopeshajiSikuToaComponent', () => {
  let component: DashboardMkopeshajiSikuToaComponent;
  let fixture: ComponentFixture<DashboardMkopeshajiSikuToaComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardMkopeshajiSikuToaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardMkopeshajiSikuToaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
