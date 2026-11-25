import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DukaDirectorOrderComponent } from './duka-director-order.component';

describe('DukaDirectorOrderComponent', () => {
  let component: DukaDirectorOrderComponent;
  let fixture: ComponentFixture<DukaDirectorOrderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DukaDirectorOrderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DukaDirectorOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
