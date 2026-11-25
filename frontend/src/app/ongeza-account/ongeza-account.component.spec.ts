import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OngezaAccountComponent } from './ongeza-account.component';

describe('OngezaAccountComponent', () => {
  let component: OngezaAccountComponent;
  let fixture: ComponentFixture<OngezaAccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OngezaAccountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OngezaAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
