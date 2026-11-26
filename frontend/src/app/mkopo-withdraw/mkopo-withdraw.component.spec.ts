import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MkopoWithdrawComponent } from './mkopo-withdraw.component';

describe('MkopoWithdrawComponent', () => {
  let component: MkopoWithdrawComponent;
  let fixture: ComponentFixture<MkopoWithdrawComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MkopoWithdrawComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MkopoWithdrawComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
