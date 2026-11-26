import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { WorkersKutoaComponent } from './workers-kutoa.component';

describe('WorkersKutoaComponent', () => {
  let component: WorkersKutoaComponent;
  let fixture: ComponentFixture<WorkersKutoaComponent>;

  beforeEach(waitForAsync(() => {
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
