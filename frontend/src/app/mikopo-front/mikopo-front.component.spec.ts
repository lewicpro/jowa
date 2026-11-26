import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MikopoFrontComponent } from './mikopo-front.component';

describe('MikopoFrontComponent', () => {
  let component: MikopoFrontComponent;
  let fixture: ComponentFixture<MikopoFrontComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MikopoFrontComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MikopoFrontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
