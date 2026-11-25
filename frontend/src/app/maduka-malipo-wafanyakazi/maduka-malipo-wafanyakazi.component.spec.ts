import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MadukaMalipoWafanyakaziComponent } from './maduka-malipo-wafanyakazi.component';

describe('MadukaMalipoWafanyakaziComponent', () => {
  let component: MadukaMalipoWafanyakaziComponent;
  let fixture: ComponentFixture<MadukaMalipoWafanyakaziComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MadukaMalipoWafanyakaziComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MadukaMalipoWafanyakaziComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
