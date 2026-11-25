import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenSnackerComponent } from './open-snacker.component';

describe('OpenSnackerComponent', () => {
  let component: OpenSnackerComponent;
  let fixture: ComponentFixture<OpenSnackerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpenSnackerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpenSnackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
