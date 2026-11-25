import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnerMkatabaComponent } from './owner-mkataba.component';

describe('OwnerMkatabaComponent', () => {
  let component: OwnerMkatabaComponent;
  let fixture: ComponentFixture<OwnerMkatabaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OwnerMkatabaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OwnerMkatabaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
