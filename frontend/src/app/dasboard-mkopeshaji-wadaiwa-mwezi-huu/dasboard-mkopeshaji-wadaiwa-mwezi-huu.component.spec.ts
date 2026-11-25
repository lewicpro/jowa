import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DasboardMkopeshajiWadaiwaMweziHuuComponent } from './dasboard-mkopeshaji-wadaiwa-mwezi-huu.component';

describe('DasboardMkopeshajiWadaiwaMweziHuuComponent', () => {
  let component: DasboardMkopeshajiWadaiwaMweziHuuComponent;
  let fixture: ComponentFixture<DasboardMkopeshajiWadaiwaMweziHuuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DasboardMkopeshajiWadaiwaMweziHuuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DasboardMkopeshajiWadaiwaMweziHuuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
