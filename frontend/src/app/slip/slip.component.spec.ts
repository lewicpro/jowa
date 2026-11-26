import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SlipComponent } from './slip.component';

describe('SlipComponent', () => {
  let component: SlipComponent;
  let fixture: ComponentFixture<SlipComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SlipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
