import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MadukaMalipoWaudumuComponent } from './maduka-malipo-waudumu.component';

describe('MadukaMalipoWaudumuComponent', () => {
  let component: MadukaMalipoWaudumuComponent;
  let fixture: ComponentFixture<MadukaMalipoWaudumuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MadukaMalipoWaudumuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MadukaMalipoWaudumuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
