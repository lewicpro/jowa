import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MikopoAdvancedCalculatorComponent } from './mikopo-advanced-calculator.component';

describe('MikopoAdvancedCalculatorComponent', () => {
  let component: MikopoAdvancedCalculatorComponent;
  let fixture: ComponentFixture<MikopoAdvancedCalculatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MikopoAdvancedCalculatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MikopoAdvancedCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
