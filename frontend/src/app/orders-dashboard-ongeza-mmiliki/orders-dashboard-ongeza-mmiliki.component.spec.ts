import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersDashboardOngezaMmilikiComponent } from './orders-dashboard-ongeza-mmiliki.component';

describe('OrdersDashboardOngezaMmilikiComponent', () => {
  let component: OrdersDashboardOngezaMmilikiComponent;
  let fixture: ComponentFixture<OrdersDashboardOngezaMmilikiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrdersDashboardOngezaMmilikiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdersDashboardOngezaMmilikiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
