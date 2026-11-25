import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarekebishoComponent } from './marekebisho.component';

describe('MarekebishoComponent', () => {
  let component: MarekebishoComponent;
  let fixture: ComponentFixture<MarekebishoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarekebishoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarekebishoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
