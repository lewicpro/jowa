import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { WapangajiComponent } from './wapangaji.component';

describe('WapangajiComponent', () => {
  let component: WapangajiComponent;
  let fixture: ComponentFixture<WapangajiComponent>;

  beforeEach(waitForAsync(() => {
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
