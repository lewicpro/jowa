import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TumaMesgComponent } from './tuma-mesg.component';

describe('TumaMesgComponent', () => {
  let component: TumaMesgComponent;
  let fixture: ComponentFixture<TumaMesgComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TumaMesgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TumaMesgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
