import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NyumbaConnectorComponent } from './nyumba-connector.component';

describe('NyumbaConnectorComponent', () => {
  let component: NyumbaConnectorComponent;
  let fixture: ComponentFixture<NyumbaConnectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NyumbaConnectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NyumbaConnectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
