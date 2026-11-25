import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NyumbaWadaiwaComponent } from './nyumba-wadaiwa.component';

describe('NyumbaWadaiwaComponent', () => {
  let component: NyumbaWadaiwaComponent;
  let fixture: ComponentFixture<NyumbaWadaiwaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NyumbaWadaiwaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NyumbaWadaiwaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
