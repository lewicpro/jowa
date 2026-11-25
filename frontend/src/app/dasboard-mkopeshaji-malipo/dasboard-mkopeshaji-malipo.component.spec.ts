import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DasboardMkopeshajiMalipoComponent } from './dasboard-mkopeshaji-malipo.component';

describe('DasboardMkopeshajiMalipoComponent', () => {
  let component: DasboardMkopeshajiMalipoComponent;
  let fixture: ComponentFixture<DasboardMkopeshajiMalipoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DasboardMkopeshajiMalipoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DasboardMkopeshajiMalipoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
