import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WotewatejaComponent } from './wotewateja.component';

describe('WotewatejaComponent', () => {
  let component: WotewatejaComponent;
  let fixture: ComponentFixture<WotewatejaComponent>;

  beforeEach(async(() => {
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
