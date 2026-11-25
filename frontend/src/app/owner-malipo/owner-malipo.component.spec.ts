import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnerMalipoComponent } from './owner-malipo.component';

describe('OwnerMalipoComponent', () => {
  let component: OwnerMalipoComponent;
  let fixture: ComponentFixture<OwnerMalipoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OwnerMalipoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OwnerMalipoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
