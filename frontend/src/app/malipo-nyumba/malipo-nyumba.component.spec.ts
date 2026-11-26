import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MalipoNyumbaComponent } from './malipo-nyumba.component';

describe('MalipoNyumbaComponent', () => {
  let component: MalipoNyumbaComponent;
  let fixture: ComponentFixture<MalipoNyumbaComponent>;

  beforeEach(waitForAsync(() => {
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
