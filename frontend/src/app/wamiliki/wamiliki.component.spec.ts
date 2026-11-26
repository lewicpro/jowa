import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { WamilikiComponent } from './wamiliki.component';

describe('WamilikiComponent', () => {
  let component: WamilikiComponent;
  let fixture: ComponentFixture<WamilikiComponent>;

  beforeEach(waitForAsync(() => {
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
