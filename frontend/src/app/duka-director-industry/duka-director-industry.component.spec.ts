import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DukaDirectorIndustryComponent } from './duka-director-industry.component';

describe('DukaDirectorIndustryComponent', () => {
  let component: DukaDirectorIndustryComponent;
  let fixture: ComponentFixture<DukaDirectorIndustryComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DukaDirectorIndustryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DukaDirectorIndustryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
