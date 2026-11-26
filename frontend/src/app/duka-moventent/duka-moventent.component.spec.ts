import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DukaMovententComponent } from './duka-moventent.component';

describe('DukaMovententComponent', () => {
  let component: DukaMovententComponent;
  let fixture: ComponentFixture<DukaMovententComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DukaMovententComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DukaMovententComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
