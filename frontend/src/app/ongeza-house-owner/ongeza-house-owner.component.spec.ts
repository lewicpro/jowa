import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { OngezaHouseOwnerComponent } from './ongeza-house-owner.component';

describe('OngezaHouseOwnerComponent', () => {
  let component: OngezaHouseOwnerComponent;
  let fixture: ComponentFixture<OngezaHouseOwnerComponent>;

  beforeEach(waitForAsync(() => {
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
