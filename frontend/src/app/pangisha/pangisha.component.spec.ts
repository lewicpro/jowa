import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PangishaComponent } from './pangisha.component';

describe('PangishaComponent', () => {
  let component: PangishaComponent;
  let fixture: ComponentFixture<PangishaComponent>;

  beforeEach(async(() => {
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
