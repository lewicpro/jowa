import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { BmwakalaMatumiziComponent } from './bmwakala-matumizi.component';

describe('BmwakalaMatumiziComponent', () => {
  let component: BmwakalaMatumiziComponent;
  let fixture: ComponentFixture<BmwakalaMatumiziComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ BmwakalaMatumiziComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BmwakalaMatumiziComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
