import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WakalaWorkersComponent } from './wakala-workers.component';

describe('WakalaWorkersComponent', () => {
  let component: WakalaWorkersComponent;
  let fixture: ComponentFixture<WakalaWorkersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WakalaWorkersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WakalaWorkersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
