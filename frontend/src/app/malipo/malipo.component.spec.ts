import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MalipoComponent } from './malipo.component';

describe('MalipoComponent', () => {
  let component: MalipoComponent;
  let fixture: ComponentFixture<MalipoComponent>;

  beforeEach(waitForAsync(() => {
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
