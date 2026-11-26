import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { WakalaKaziProcessorsComponent } from './wakala-kazi-processors.component';

describe('WakalaKaziProcessorsComponent', () => {
  let component: WakalaKaziProcessorsComponent;
  let fixture: ComponentFixture<WakalaKaziProcessorsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ WakalaKaziProcessorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WakalaKaziProcessorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
