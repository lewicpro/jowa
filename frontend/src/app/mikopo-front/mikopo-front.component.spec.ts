import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MikopoFrontComponent } from './mikopo-front.component';

describe('MikopoFrontComponent', () => {
  let component: MikopoFrontComponent;
  let fixture: ComponentFixture<MikopoFrontComponent>;

  beforeEach(async(() => {
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
