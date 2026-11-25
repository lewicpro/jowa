import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DukaDirectorProductsComponent } from './duka-director-products.component';

describe('DukaDirectorProductsComponent', () => {
  let component: DukaDirectorProductsComponent;
  let fixture: ComponentFixture<DukaDirectorProductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DukaDirectorProductsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DukaDirectorProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
