import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { OrderDirectorMatumiziComponent } from './order-director-matumizi.component';

describe('OrderDirectorMatumiziComponent', () => {
  let component: OrderDirectorMatumiziComponent;
  let fixture: ComponentFixture<OrderDirectorMatumiziComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderDirectorMatumiziComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderDirectorMatumiziComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
