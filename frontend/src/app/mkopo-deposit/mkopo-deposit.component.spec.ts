import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MkopoDepositComponent } from './mkopo-deposit.component';

describe('MkopoDepositComponent', () => {
  let component: MkopoDepositComponent;
  let fixture: ComponentFixture<MkopoDepositComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MkopoDepositComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MkopoDepositComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
