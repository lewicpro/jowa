import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DukaDirectorMatumiziComponent } from './duka-director-matumizi.component';

describe('DukaDirectorMatumiziComponent', () => {
  let component: DukaDirectorMatumiziComponent;
  let fixture: ComponentFixture<DukaDirectorMatumiziComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DukaDirectorMatumiziComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DukaDirectorMatumiziComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
