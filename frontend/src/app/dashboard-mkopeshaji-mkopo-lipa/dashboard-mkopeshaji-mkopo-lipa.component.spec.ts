import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DashboardMkopeshajiMkopoLipaComponent } from './dashboard-mkopeshaji-mkopo-lipa.component';

describe('DashboardMkopeshajiMkopoLipaComponent', () => {
  let component: DashboardMkopeshajiMkopoLipaComponent;
  let fixture: ComponentFixture<DashboardMkopeshajiMkopoLipaComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardMkopeshajiMkopoLipaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardMkopeshajiMkopoLipaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
