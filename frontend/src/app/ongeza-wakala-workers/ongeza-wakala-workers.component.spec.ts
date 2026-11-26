import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { OngezaWakalaWorkersComponent } from './ongeza-wakala-workers.component';

describe('OngezaWakalaWorkersComponent', () => {
  let component: OngezaWakalaWorkersComponent;
  let fixture: ComponentFixture<OngezaWakalaWorkersComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ OngezaWakalaWorkersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OngezaWakalaWorkersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
