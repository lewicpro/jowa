import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderDirectorWorkersComponent } from './order-director-workers.component';

describe('OrderDirectorWorkersComponent', () => {
  let component: OrderDirectorWorkersComponent;
  let fixture: ComponentFixture<OrderDirectorWorkersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderDirectorWorkersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderDirectorWorkersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
