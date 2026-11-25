import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NyumbaDashboardRoomPriceComponent } from './nyumba-dashboard-room-price.component';

describe('NyumbaDashboardRoomPriceComponent', () => {
  let component: NyumbaDashboardRoomPriceComponent;
  let fixture: ComponentFixture<NyumbaDashboardRoomPriceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NyumbaDashboardRoomPriceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NyumbaDashboardRoomPriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
