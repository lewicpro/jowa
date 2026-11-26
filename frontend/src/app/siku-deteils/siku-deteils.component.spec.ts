import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SikuDeteilsComponent } from './siku-deteils.component';

describe('SikuDeteilsComponent', () => {
  let component: SikuDeteilsComponent;
  let fixture: ComponentFixture<SikuDeteilsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SikuDeteilsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SikuDeteilsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
