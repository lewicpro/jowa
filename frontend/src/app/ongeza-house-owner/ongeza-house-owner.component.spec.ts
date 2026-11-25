import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OngezaHouseOwnerComponent } from './ongeza-house-owner.component';

describe('OngezaHouseOwnerComponent', () => {
  let component: OngezaHouseOwnerComponent;
  let fixture: ComponentFixture<OngezaHouseOwnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OngezaHouseOwnerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OngezaHouseOwnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
