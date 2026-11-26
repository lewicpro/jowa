import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { NyumbaMiddledocumentsComponent } from './nyumba-middledocuments.component';

describe('NyumbaMiddledocumentsComponent', () => {
  let component: NyumbaMiddledocumentsComponent;
  let fixture: ComponentFixture<NyumbaMiddledocumentsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ NyumbaMiddledocumentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NyumbaMiddledocumentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
