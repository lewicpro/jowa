import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MwezihuumesejiComponent } from './mwezihuumeseji.component';

describe('MwezihuumesejiComponent', () => {
  let component: MwezihuumesejiComponent;
  let fixture: ComponentFixture<MwezihuumesejiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MwezihuumesejiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MwezihuumesejiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
