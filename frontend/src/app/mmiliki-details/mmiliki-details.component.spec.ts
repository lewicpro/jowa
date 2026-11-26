import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MmilikiDetailsComponent } from './mmiliki-details.component';

describe('MmilikiDetailsComponent', () => {
  let component: MmilikiDetailsComponent;
  let fixture: ComponentFixture<MmilikiDetailsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MmilikiDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MmilikiDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
