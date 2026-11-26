import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MadukaWaliokopaComponent } from './maduka-waliokopa.component';

describe('MadukaWaliokopaComponent', () => {
  let component: MadukaWaliokopaComponent;
  let fixture: ComponentFixture<MadukaWaliokopaComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MadukaWaliokopaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MadukaWaliokopaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
