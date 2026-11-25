import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DukaWamilikiComponent } from './duka-wamiliki.component';

describe('DukaWamilikiComponent', () => {
  let component: DukaWamilikiComponent;
  let fixture: ComponentFixture<DukaWamilikiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DukaWamilikiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DukaWamilikiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
