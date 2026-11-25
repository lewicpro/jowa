import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DukaDirectorIndustryComponent } from './duka-director-industry.component';

describe('DukaDirectorIndustryComponent', () => {
  let component: DukaDirectorIndustryComponent;
  let fixture: ComponentFixture<DukaDirectorIndustryComponent>;

  beforeEach(async(() => {
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
