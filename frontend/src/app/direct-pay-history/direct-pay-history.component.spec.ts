import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DirectPayHistoryComponent } from './direct-pay-history.component';

describe('DirectPayHistoryComponent', () => {
  let component: DirectPayHistoryComponent;
  let fixture: ComponentFixture<DirectPayHistoryComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DirectPayHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectPayHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
