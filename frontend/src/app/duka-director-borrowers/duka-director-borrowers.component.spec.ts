import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DukaDirectorBorrowersComponent } from './duka-director-borrowers.component';

describe('DukaDirectorBorrowersComponent', () => {
  let component: DukaDirectorBorrowersComponent;
  let fixture: ComponentFixture<DukaDirectorBorrowersComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DukaDirectorBorrowersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DukaDirectorBorrowersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
