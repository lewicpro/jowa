import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { NyumbaDetailsComponent } from './nyumba-details.component';

describe('NyumbaDetailsComponent', () => {
  let component: NyumbaDetailsComponent;
  let fixture: ComponentFixture<NyumbaDetailsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ NyumbaDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NyumbaDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
