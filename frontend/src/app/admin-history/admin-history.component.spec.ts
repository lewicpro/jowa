import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AdminHistoryComponent } from './admin-history.component';

describe('AdminHistoryComponent', () => {
  let component: AdminHistoryComponent;
  let fixture: ComponentFixture<AdminHistoryComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
