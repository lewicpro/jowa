import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MmilikiDetailsComponent } from './mmiliki-details.component';

describe('MmilikiDetailsComponent', () => {
  let component: MmilikiDetailsComponent;
  let fixture: ComponentFixture<MmilikiDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MmilikiDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MmilikiDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
