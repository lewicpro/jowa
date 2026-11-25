import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnerApplicationComponent } from './owner-application.component';

describe('OwnerApplicationComponent', () => {
  let component: OwnerApplicationComponent;
  let fixture: ComponentFixture<OwnerApplicationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OwnerApplicationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OwnerApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
