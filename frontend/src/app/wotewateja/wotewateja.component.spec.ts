import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { WotewatejaComponent } from './wotewateja.component';

describe('WotewatejaComponent', () => {
  let component: WotewatejaComponent;
  let fixture: ComponentFixture<WotewatejaComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ WotewatejaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WotewatejaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
