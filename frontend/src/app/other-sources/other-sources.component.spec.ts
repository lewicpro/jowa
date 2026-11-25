import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherSourcesComponent } from './other-sources.component';

describe('OtherSourcesComponent', () => {
  let component: OtherSourcesComponent;
  let fixture: ComponentFixture<OtherSourcesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OtherSourcesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OtherSourcesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
