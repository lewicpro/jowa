import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NyumbaWapangajiWoteComponent } from './nyumba-wapangaji-wote.component';

describe('NyumbaWapangajiWoteComponent', () => {
  let component: NyumbaWapangajiWoteComponent;
  let fixture: ComponentFixture<NyumbaWapangajiWoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NyumbaWapangajiWoteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NyumbaWapangajiWoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
