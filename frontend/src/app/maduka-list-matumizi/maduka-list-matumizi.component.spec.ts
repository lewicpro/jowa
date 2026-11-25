import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MadukaListMatumiziComponent } from './maduka-list-matumizi.component';

describe('MadukaListMatumiziComponent', () => {
  let component: MadukaListMatumiziComponent;
  let fixture: ComponentFixture<MadukaListMatumiziComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MadukaListMatumiziComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MadukaListMatumiziComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
