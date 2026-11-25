import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DukaDirectorBorrowersComponent } from './duka-director-borrowers.component';

describe('DukaDirectorBorrowersComponent', () => {
  let component: DukaDirectorBorrowersComponent;
  let fixture: ComponentFixture<DukaDirectorBorrowersComponent>;

  beforeEach(async(() => {
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
