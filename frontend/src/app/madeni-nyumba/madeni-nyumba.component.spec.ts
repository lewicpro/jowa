import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MadeniNyumbaComponent } from './madeni-nyumba.component';

describe('MadeniNyumbaComponent', () => {
  let component: MadeniNyumbaComponent;
  let fixture: ComponentFixture<MadeniNyumbaComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MadeniNyumbaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MadeniNyumbaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
