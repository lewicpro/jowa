import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DukaDirectorCreateComponent } from './duka-director-create.component';

describe('DukaDirectorCreateComponent', () => {
  let component: DukaDirectorCreateComponent;
  let fixture: ComponentFixture<DukaDirectorCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DukaDirectorCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DukaDirectorCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
