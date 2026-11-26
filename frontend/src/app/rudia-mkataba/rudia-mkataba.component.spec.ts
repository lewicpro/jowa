import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { RudiaMkatabaComponent } from './rudia-mkataba.component';

describe('RudiaMkatabaComponent', () => {
  let component: RudiaMkatabaComponent;
  let fixture: ComponentFixture<RudiaMkatabaComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ RudiaMkatabaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RudiaMkatabaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
