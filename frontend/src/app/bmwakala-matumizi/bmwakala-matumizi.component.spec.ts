import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BmwakalaMatumiziComponent } from './bmwakala-matumizi.component';

describe('BmwakalaMatumiziComponent', () => {
  let component: BmwakalaMatumiziComponent;
  let fixture: ComponentFixture<BmwakalaMatumiziComponent>;

  beforeEach(async(() => {
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
