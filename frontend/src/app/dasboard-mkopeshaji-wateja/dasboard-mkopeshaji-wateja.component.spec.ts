import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DasboardMkopeshajiWatejaComponent } from './dasboard-mkopeshaji-wateja.component';

describe('DasboardMkopeshajiWatejaComponent', () => {
  let component: DasboardMkopeshajiWatejaComponent;
  let fixture: ComponentFixture<DasboardMkopeshajiWatejaComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DasboardMkopeshajiWatejaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DasboardMkopeshajiWatejaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
