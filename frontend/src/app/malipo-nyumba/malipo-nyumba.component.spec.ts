import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MalipoNyumbaComponent } from './malipo-nyumba.component';

describe('MalipoNyumbaComponent', () => {
  let component: MalipoNyumbaComponent;
  let fixture: ComponentFixture<MalipoNyumbaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MalipoNyumbaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MalipoNyumbaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
