import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NyumbaStatementsComponent } from './nyumba-statements.component';

describe('NyumbaStatementsComponent', () => {
  let component: NyumbaStatementsComponent;
  let fixture: ComponentFixture<NyumbaStatementsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NyumbaStatementsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NyumbaStatementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
