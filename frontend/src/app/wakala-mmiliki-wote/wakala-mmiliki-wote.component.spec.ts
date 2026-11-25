import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WakalaMmilikiWoteComponent } from './wakala-mmiliki-wote.component';

describe('WakalaMmilikiWoteComponent', () => {
  let component: WakalaMmilikiWoteComponent;
  let fixture: ComponentFixture<WakalaMmilikiWoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WakalaMmilikiWoteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WakalaMmilikiWoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
