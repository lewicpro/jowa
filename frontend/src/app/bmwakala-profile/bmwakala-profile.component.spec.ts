import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BmwakalaProfileComponent } from './bmwakala-profile.component';

describe('BmwakalaProfileComponent', () => {
  let component: BmwakalaProfileComponent;
  let fixture: ComponentFixture<BmwakalaProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BmwakalaProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BmwakalaProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
