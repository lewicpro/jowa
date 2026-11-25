import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MadukaYoteComponent } from './maduka-yote.component';

describe('MadukaYoteComponent', () => {
  let component: MadukaYoteComponent;
  let fixture: ComponentFixture<MadukaYoteComponent>;

  beforeEach(async(() => {
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
