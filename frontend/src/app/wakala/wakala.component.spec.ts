import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WakalaComponent } from './wakala.component';

describe('WakalaComponent', () => {
  let component: WakalaComponent;
  let fixture: ComponentFixture<WakalaComponent>;

  beforeEach(async(() => {
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
