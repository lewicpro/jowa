import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { OwnerEditComponent } from './owner-edit.component';

describe('OwnerEditComponent', () => {
  let component: OwnerEditComponent;
  let fixture: ComponentFixture<OwnerEditComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ OwnerEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OwnerEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
