import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WapangajiComponent } from './wapangaji.component';

describe('WapangajiComponent', () => {
  let component: WapangajiComponent;
  let fixture: ComponentFixture<WapangajiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WapangajiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WapangajiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
