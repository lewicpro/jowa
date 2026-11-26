import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DasboardMkopeshajiComponent } from './dasboard-mkopeshaji.component';

describe('DasboardMkopeshajiComponent', () => {
  let component: DasboardMkopeshajiComponent;
  let fixture: ComponentFixture<DasboardMkopeshajiComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DasboardMkopeshajiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DasboardMkopeshajiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
