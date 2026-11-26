import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { NyumbaComponent } from './nyumba.component';

describe('NyumbaComponent', () => {
  let component: NyumbaComponent;
  let fixture: ComponentFixture<NyumbaComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ NyumbaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NyumbaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
