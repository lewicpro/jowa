import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NyumbaFrontComponent } from './nyumba-front.component';

describe('NyumbaFrontComponent', () => {
  let component: NyumbaFrontComponent;
  let fixture: ComponentFixture<NyumbaFrontComponent>;

  beforeEach(async(() => {
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
