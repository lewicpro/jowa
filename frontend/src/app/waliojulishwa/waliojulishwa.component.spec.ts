import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WaliojulishwaComponent } from './waliojulishwa.component';

describe('WaliojulishwaComponent', () => {
  let component: WaliojulishwaComponent;
  let fixture: ComponentFixture<WaliojulishwaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WaliojulishwaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WaliojulishwaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
