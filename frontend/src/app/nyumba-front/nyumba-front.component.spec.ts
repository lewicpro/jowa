import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { NyumbaFrontComponent } from './nyumba-front.component';

describe('NyumbaFrontComponent', () => {
  let component: NyumbaFrontComponent;
  let fixture: ComponentFixture<NyumbaFrontComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ NyumbaFrontComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NyumbaFrontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
