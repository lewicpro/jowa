import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OverviewDirectorComponent } from './overview-director.component';

describe('OverviewDirectorComponent', () => {
  let component: OverviewDirectorComponent;
  let fixture: ComponentFixture<OverviewDirectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OverviewDirectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OverviewDirectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
