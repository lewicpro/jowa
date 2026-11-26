import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DasboardMkopeshajiHistoryComponent } from './dasboard-mkopeshaji-history.component';

describe('DasboardMkopeshajiHistoryComponent', () => {
  let component: DasboardMkopeshajiHistoryComponent;
  let fixture: ComponentFixture<DasboardMkopeshajiHistoryComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DasboardMkopeshajiHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DasboardMkopeshajiHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
