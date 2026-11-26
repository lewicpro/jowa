import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MadukaListSalesComponent } from './maduka-list-sales.component';

describe('MadukaListSalesComponent', () => {
  let component: MadukaListSalesComponent;
  let fixture: ComponentFixture<MadukaListSalesComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MadukaListSalesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MadukaListSalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
