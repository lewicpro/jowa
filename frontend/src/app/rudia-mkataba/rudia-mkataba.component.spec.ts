import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RudiaMkatabaComponent } from './rudia-mkataba.component';

describe('RudiaMkatabaComponent', () => {
  let component: RudiaMkatabaComponent;
  let fixture: ComponentFixture<RudiaMkatabaComponent>;

  beforeEach(async(() => {
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
