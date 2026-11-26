import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PangishaComponent } from './pangisha.component';

describe('PangishaComponent', () => {
  let component: PangishaComponent;
  let fixture: ComponentFixture<PangishaComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PangishaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PangishaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
