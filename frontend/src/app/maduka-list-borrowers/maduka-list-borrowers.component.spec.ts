import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MadukaListBorrowersComponent } from './maduka-list-borrowers.component';

describe('MadukaListBorrowersComponent', () => {
  let component: MadukaListBorrowersComponent;
  let fixture: ComponentFixture<MadukaListBorrowersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MadukaListBorrowersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MadukaListBorrowersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
