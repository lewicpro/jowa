import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BmwakalaWorkerListComponent } from './bmwakala-worker-list.component';

describe('BmwakalaWorkerListComponent', () => {
  let component: BmwakalaWorkerListComponent;
  let fixture: ComponentFixture<BmwakalaWorkerListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BmwakalaWorkerListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BmwakalaWorkerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
