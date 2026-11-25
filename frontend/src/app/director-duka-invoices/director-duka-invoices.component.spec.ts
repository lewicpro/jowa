import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectorDukaInvoicesComponent } from './director-duka-invoices.component';

describe('DirectorDukaInvoicesComponent', () => {
  let component: DirectorDukaInvoicesComponent;
  let fixture: ComponentFixture<DirectorDukaInvoicesComponent>;

  beforeEach(async(() => {
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
