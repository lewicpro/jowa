import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MadukaYoteComponent } from './maduka-yote.component';

describe('MadukaYoteComponent', () => {
  let component: MadukaYoteComponent;
  let fixture: ComponentFixture<MadukaYoteComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MadukaYoteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MadukaYoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
