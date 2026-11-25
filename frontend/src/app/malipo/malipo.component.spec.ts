import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MalipoComponent } from './malipo.component';

describe('MalipoComponent', () => {
  let component: MalipoComponent;
  let fixture: ComponentFixture<MalipoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MalipoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MalipoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
