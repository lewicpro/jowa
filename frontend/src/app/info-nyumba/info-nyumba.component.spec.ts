import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoNyumbaComponent } from './info-nyumba.component';

describe('InfoNyumbaComponent', () => {
  let component: InfoNyumbaComponent;
  let fixture: ComponentFixture<InfoNyumbaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoNyumbaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoNyumbaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
