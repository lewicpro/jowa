import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WakalaKaziMtajiComponent } from './wakala-kazi-mtaji.component';

describe('WakalaKaziMtajiComponent', () => {
  let component: WakalaKaziMtajiComponent;
  let fixture: ComponentFixture<WakalaKaziMtajiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WakalaKaziMtajiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WakalaKaziMtajiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
