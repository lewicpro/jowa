import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WakalaKaziProcessorsComponent } from './wakala-kazi-processors.component';

describe('WakalaKaziProcessorsComponent', () => {
  let component: WakalaKaziProcessorsComponent;
  let fixture: ComponentFixture<WakalaKaziProcessorsComponent>;

  beforeEach(async(() => {
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
