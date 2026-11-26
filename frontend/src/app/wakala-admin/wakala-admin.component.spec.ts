import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { WakalaAdminComponent } from './wakala-admin.component';

describe('WakalaAdminComponent', () => {
  let component: WakalaAdminComponent;
  let fixture: ComponentFixture<WakalaAdminComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ WakalaAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WakalaAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
