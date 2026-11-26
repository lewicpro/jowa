import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AdminKopaComponent } from './admin-kopa.component';

describe('AdminKopaComponent', () => {
  let component: AdminKopaComponent;
  let fixture: ComponentFixture<AdminKopaComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminKopaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminKopaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
