import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkersKuwekaComponent } from './workers-kuweka.component';

describe('WorkersKuwekaComponent', () => {
  let component: WorkersKuwekaComponent;
  let fixture: ComponentFixture<WorkersKuwekaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkersKuwekaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkersKuwekaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
