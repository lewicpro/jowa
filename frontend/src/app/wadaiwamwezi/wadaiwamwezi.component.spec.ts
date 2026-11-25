import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WadaiwamweziComponent } from './wadaiwamwezi.component';

describe('WadaiwamweziComponent', () => {
  let component: WadaiwamweziComponent;
  let fixture: ComponentFixture<WadaiwamweziComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WadaiwamweziComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WadaiwamweziComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
