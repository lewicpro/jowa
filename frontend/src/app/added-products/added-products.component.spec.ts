import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AddedProductsComponent } from './added-products.component';

describe('AddedProductsComponent', () => {
  let component: AddedProductsComponent;
  let fixture: ComponentFixture<AddedProductsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AddedProductsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddedProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
