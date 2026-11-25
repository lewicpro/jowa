import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderWorkersWaDirectorComponent } from './order-workers-wa-director.component';

describe('OrderWorkersWaDirectorComponent', () => {
  let component: OrderWorkersWaDirectorComponent;
  let fixture: ComponentFixture<OrderWorkersWaDirectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderWorkersWaDirectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderWorkersWaDirectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
