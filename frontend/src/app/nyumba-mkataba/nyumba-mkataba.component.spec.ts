import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NyumbaMkatabaComponent } from './nyumba-mkataba.component';

describe('NyumbaMkatabaComponent', () => {
  let component: NyumbaMkatabaComponent;
  let fixture: ComponentFixture<NyumbaMkatabaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NyumbaMkatabaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NyumbaMkatabaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
