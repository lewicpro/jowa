import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { NyumbaInfo1Component } from './nyumba-info1.component';

describe('NyumbaInfo1Component', () => {
  let component: NyumbaInfo1Component;
  let fixture: ComponentFixture<NyumbaInfo1Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ NyumbaInfo1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NyumbaInfo1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
