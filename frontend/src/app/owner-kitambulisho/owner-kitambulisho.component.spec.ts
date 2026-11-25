import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnerKitambulishoComponent } from './owner-kitambulisho.component';

describe('OwnerKitambulishoComponent', () => {
  let component: OwnerKitambulishoComponent;
  let fixture: ComponentFixture<OwnerKitambulishoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OwnerKitambulishoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OwnerKitambulishoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
