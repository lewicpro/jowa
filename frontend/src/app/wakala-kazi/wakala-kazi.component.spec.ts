import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { WakalaKaziComponent } from './wakala-kazi.component';

describe('WakalaKaziComponent', () => {
  let component: WakalaKaziComponent;
  let fixture: ComponentFixture<WakalaKaziComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ WakalaKaziComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WakalaKaziComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
