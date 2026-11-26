import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { WaliojulishwaComponent } from './waliojulishwa.component';

describe('WaliojulishwaComponent', () => {
  let component: WaliojulishwaComponent;
  let fixture: ComponentFixture<WaliojulishwaComponent>;

  beforeEach(waitForAsync(() => {
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
