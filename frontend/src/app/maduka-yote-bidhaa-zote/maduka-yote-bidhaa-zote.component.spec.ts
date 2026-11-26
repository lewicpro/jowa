import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MadukaYoteBidhaaZoteComponent } from './maduka-yote-bidhaa-zote.component';

describe('MadukaYoteBidhaaZoteComponent', () => {
  let component: MadukaYoteBidhaaZoteComponent;
  let fixture: ComponentFixture<MadukaYoteBidhaaZoteComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MadukaYoteBidhaaZoteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MadukaYoteBidhaaZoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
