import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkersKutoaComponent } from './workers-kutoa.component';

describe('WorkersKutoaComponent', () => {
  let component: WorkersKutoaComponent;
  let fixture: ComponentFixture<WorkersKutoaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkersKutoaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkersKutoaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
