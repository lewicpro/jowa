import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { WakalaMmilikiDirectorListWorkersComponent } from './wakala-mmiliki-director-list-workers.component';

describe('WakalaMmilikiDirectorListWorkersComponent', () => {
  let component: WakalaMmilikiDirectorListWorkersComponent;
  let fixture: ComponentFixture<WakalaMmilikiDirectorListWorkersComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ WakalaMmilikiDirectorListWorkersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WakalaMmilikiDirectorListWorkersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
