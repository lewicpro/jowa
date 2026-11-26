import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SikuKopeshaDeteilsComponent } from './siku-kopesha-deteils.component';

describe('SikuKopeshaDeteilsComponent', () => {
  let component: SikuKopeshaDeteilsComponent;
  let fixture: ComponentFixture<SikuKopeshaDeteilsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SikuKopeshaDeteilsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SikuKopeshaDeteilsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
