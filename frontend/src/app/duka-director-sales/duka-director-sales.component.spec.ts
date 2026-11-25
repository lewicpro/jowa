import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DukaDirectorSalesComponent } from './duka-director-sales.component';

describe('DukaDirectorSalesComponent', () => {
  let component: DukaDirectorSalesComponent;
  let fixture: ComponentFixture<DukaDirectorSalesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DukaDirectorSalesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DukaDirectorSalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
