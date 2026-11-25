import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NyumbaFrontDetailsComponent } from './nyumba-front-details.component';

describe('NyumbaFrontDetailsComponent', () => {
  let component: NyumbaFrontDetailsComponent;
  let fixture: ComponentFixture<NyumbaFrontDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NyumbaFrontDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NyumbaFrontDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
