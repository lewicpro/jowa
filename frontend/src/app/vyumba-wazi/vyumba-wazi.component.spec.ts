import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { VyumbaWaziComponent } from './vyumba-wazi.component';

describe('VyumbaWaziComponent', () => {
  let component: VyumbaWaziComponent;
  let fixture: ComponentFixture<VyumbaWaziComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ VyumbaWaziComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VyumbaWaziComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
