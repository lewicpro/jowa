import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MkopoWithdrawComponent } from './mkopo-withdraw.component';

describe('MkopoWithdrawComponent', () => {
  let component: MkopoWithdrawComponent;
  let fixture: ComponentFixture<MkopoWithdrawComponent>;

  beforeEach(async(() => {
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
