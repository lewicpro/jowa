import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DirectorDukaInvoicesComponent } from './director-duka-invoices.component';

describe('DirectorDukaInvoicesComponent', () => {
  let component: DirectorDukaInvoicesComponent;
  let fixture: ComponentFixture<DirectorDukaInvoicesComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DirectorDukaInvoicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectorDukaInvoicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
