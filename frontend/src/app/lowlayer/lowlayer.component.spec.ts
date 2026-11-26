import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { LowlayerComponent } from './lowlayer.component';

describe('LowlayerComponent', () => {
  let component: LowlayerComponent;
  let fixture: ComponentFixture<LowlayerComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ LowlayerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LowlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
