import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { WakalaWoteComponent } from './wakala-wote.component';

describe('WakalaWoteComponent', () => {
  let component: WakalaWoteComponent;
  let fixture: ComponentFixture<WakalaWoteComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ WakalaWoteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WakalaWoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
