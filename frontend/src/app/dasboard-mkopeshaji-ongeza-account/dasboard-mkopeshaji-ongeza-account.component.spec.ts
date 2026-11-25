import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DasboardMkopeshajiOngezaAccountComponent } from './dasboard-mkopeshaji-ongeza-account.component';

describe('DasboardMkopeshajiOngezaAccountComponent', () => {
  let component: DasboardMkopeshajiOngezaAccountComponent;
  let fixture: ComponentFixture<DasboardMkopeshajiOngezaAccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DasboardMkopeshajiOngezaAccountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DasboardMkopeshajiOngezaAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
