import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DukaDirectorSalesComponent } from './duka-director-sales.component';

describe('DukaDirectorSalesComponent', () => {
  let component: DukaDirectorSalesComponent;
  let fixture: ComponentFixture<DukaDirectorSalesComponent>;

  beforeEach(waitForAsync(() => {
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
