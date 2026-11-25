import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WamilikiComponent } from './wamiliki.component';

describe('WamilikiComponent', () => {
  let component: WamilikiComponent;
  let fixture: ComponentFixture<WamilikiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WamilikiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WamilikiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
