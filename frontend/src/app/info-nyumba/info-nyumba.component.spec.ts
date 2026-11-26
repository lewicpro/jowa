import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { InfoNyumbaComponent } from './info-nyumba.component';

describe('InfoNyumbaComponent', () => {
  let component: InfoNyumbaComponent;
  let fixture: ComponentFixture<InfoNyumbaComponent>;

  beforeEach(waitForAsync(() => {
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
