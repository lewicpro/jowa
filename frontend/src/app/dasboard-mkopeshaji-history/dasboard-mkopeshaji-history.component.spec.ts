import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DasboardMkopeshajiHistoryComponent } from './dasboard-mkopeshaji-history.component';

describe('DasboardMkopeshajiHistoryComponent', () => {
  let component: DasboardMkopeshajiHistoryComponent;
  let fixture: ComponentFixture<DasboardMkopeshajiHistoryComponent>;

  beforeEach(async(() => {
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
