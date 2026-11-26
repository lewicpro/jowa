import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { WaliokopaComponent } from './waliokopa.component';

describe('WaliokopaComponent', () => {
  let component: WaliokopaComponent;
  let fixture: ComponentFixture<WaliokopaComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ WaliokopaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WaliokopaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
