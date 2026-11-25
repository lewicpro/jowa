import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DasboardMkopeshajiOngezaMkopoComponent } from './dasboard-mkopeshaji-ongeza-mkopo.component';

describe('DasboardMkopeshajiOngezaMkopoComponent', () => {
  let component: DasboardMkopeshajiOngezaMkopoComponent;
  let fixture: ComponentFixture<DasboardMkopeshajiOngezaMkopoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DasboardMkopeshajiOngezaMkopoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DasboardMkopeshajiOngezaMkopoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
