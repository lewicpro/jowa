import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DasboardMkopeshajiWatejaComponent } from './dasboard-mkopeshaji-wateja.component';

describe('DasboardMkopeshajiWatejaComponent', () => {
  let component: DasboardMkopeshajiWatejaComponent;
  let fixture: ComponentFixture<DasboardMkopeshajiWatejaComponent>;

  beforeEach(async(() => {
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
