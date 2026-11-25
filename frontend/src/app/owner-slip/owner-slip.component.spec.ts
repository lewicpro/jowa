import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnerSlipComponent } from './owner-slip.component';

describe('OwnerSlipComponent', () => {
  let component: OwnerSlipComponent;
  let fixture: ComponentFixture<OwnerSlipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OwnerSlipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OwnerSlipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
