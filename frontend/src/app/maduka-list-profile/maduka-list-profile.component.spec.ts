import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MadukaListProfileComponent } from './maduka-list-profile.component';

describe('MadukaListProfileComponent', () => {
  let component: MadukaListProfileComponent;
  let fixture: ComponentFixture<MadukaListProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MadukaListProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MadukaListProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
