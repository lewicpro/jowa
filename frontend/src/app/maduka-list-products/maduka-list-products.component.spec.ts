import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MadukaListProductsComponent } from './maduka-list-products.component';

describe('MadukaListProductsComponent', () => {
  let component: MadukaListProductsComponent;
  let fixture: ComponentFixture<MadukaListProductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MadukaListProductsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MadukaListProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
