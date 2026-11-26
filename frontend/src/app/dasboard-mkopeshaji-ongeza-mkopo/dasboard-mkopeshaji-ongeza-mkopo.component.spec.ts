import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DasboardMkopeshajiOngezaMkopoComponent } from './dasboard-mkopeshaji-ongeza-mkopo.component';

describe('DasboardMkopeshajiOngezaMkopoComponent', () => {
  let component: DasboardMkopeshajiOngezaMkopoComponent;
  let fixture: ComponentFixture<DasboardMkopeshajiOngezaMkopoComponent>;

  beforeEach(waitForAsync(() => {
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
