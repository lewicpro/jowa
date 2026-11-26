import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { WakalaComponent } from './wakala.component';

describe('WakalaComponent', () => {
  let component: WakalaComponent;
  let fixture: ComponentFixture<WakalaComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ WakalaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WakalaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
