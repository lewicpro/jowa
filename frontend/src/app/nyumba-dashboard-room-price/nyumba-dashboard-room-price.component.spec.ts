import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { NyumbaDashboardRoomPriceComponent } from './nyumba-dashboard-room-price.component';

describe('NyumbaDashboardRoomPriceComponent', () => {
  let component: NyumbaDashboardRoomPriceComponent;
  let fixture: ComponentFixture<NyumbaDashboardRoomPriceComponent>;

  beforeEach(waitForAsync(() => {
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
