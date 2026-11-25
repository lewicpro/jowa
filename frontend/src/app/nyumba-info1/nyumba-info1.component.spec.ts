import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NyumbaInfo1Component } from './nyumba-info1.component';

describe('NyumbaInfo1Component', () => {
  let component: NyumbaInfo1Component;
  let fixture: ComponentFixture<NyumbaInfo1Component>;

  beforeEach(async(() => {
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
