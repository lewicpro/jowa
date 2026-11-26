import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { NyumbaMalipoComponent } from './nyumba-malipo.component';

describe('NyumbaMalipoComponent', () => {
  let component: NyumbaMalipoComponent;
  let fixture: ComponentFixture<NyumbaMalipoComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ NyumbaMalipoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NyumbaMalipoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
