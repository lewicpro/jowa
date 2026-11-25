import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NyumbaApplicationComponent } from './nyumba-application.component';

describe('NyumbaApplicationComponent', () => {
  let component: NyumbaApplicationComponent;
  let fixture: ComponentFixture<NyumbaApplicationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NyumbaApplicationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NyumbaApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
