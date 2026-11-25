import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OngezaDukaComponent } from './ongeza-duka.component';

describe('OngezaDukaComponent', () => {
  let component: OngezaDukaComponent;
  let fixture: ComponentFixture<OngezaDukaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OngezaDukaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OngezaDukaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
