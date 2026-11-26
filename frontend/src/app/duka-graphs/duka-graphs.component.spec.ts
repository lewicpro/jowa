import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DukaGraphsComponent } from './duka-graphs.component';

describe('DukaGraphsComponent', () => {
  let component: DukaGraphsComponent;
  let fixture: ComponentFixture<DukaGraphsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DukaGraphsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DukaGraphsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
