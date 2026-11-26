import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { NyumbaConnectorComponent } from './nyumba-connector.component';

describe('NyumbaConnectorComponent', () => {
  let component: NyumbaConnectorComponent;
  let fixture: ComponentFixture<NyumbaConnectorComponent>;

  beforeEach(waitForAsync(() => {
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
