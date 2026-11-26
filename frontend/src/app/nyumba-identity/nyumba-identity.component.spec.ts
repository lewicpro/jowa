import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { NyumbaIdentityComponent } from './nyumba-identity.component';

describe('NyumbaIdentityComponent', () => {
  let component: NyumbaIdentityComponent;
  let fixture: ComponentFixture<NyumbaIdentityComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ NyumbaIdentityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NyumbaIdentityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
