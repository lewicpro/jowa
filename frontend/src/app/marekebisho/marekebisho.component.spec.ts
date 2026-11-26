import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MarekebishoComponent } from './marekebisho.component';

describe('MarekebishoComponent', () => {
  let component: MarekebishoComponent;
  let fixture: ComponentFixture<MarekebishoComponent>;

  beforeEach(waitForAsync(() => {
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
