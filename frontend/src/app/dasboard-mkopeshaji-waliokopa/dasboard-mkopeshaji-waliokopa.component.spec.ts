import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DasboardMkopeshajiWaliokopaComponent } from './dasboard-mkopeshaji-waliokopa.component';

describe('DasboardMkopeshajiWaliokopaComponent', () => {
  let component: DasboardMkopeshajiWaliokopaComponent;
  let fixture: ComponentFixture<DasboardMkopeshajiWaliokopaComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DasboardMkopeshajiWaliokopaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DasboardMkopeshajiWaliokopaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
