import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DukaGraphsComponent } from './duka-graphs.component';

describe('DukaGraphsComponent', () => {
  let component: DukaGraphsComponent;
  let fixture: ComponentFixture<DukaGraphsComponent>;

  beforeEach(async(() => {
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
