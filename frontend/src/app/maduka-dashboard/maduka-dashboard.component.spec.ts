import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MadukaDashboardComponent } from './maduka-dashboard.component';

describe('MadukaDashboardComponent', () => {
  let component: MadukaDashboardComponent;
  let fixture: ComponentFixture<MadukaDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MadukaDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MadukaDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
