import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MadukaMalipoWafanyakaziComponent } from './maduka-malipo-wafanyakazi.component';

describe('MadukaMalipoWafanyakaziComponent', () => {
  let component: MadukaMalipoWafanyakaziComponent;
  let fixture: ComponentFixture<MadukaMalipoWafanyakaziComponent>;

  beforeEach(waitForAsync(() => {
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
