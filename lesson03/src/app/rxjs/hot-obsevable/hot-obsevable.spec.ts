import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotObsevable } from './hot-obsevable';

describe('HotObsevable', () => {
  let component: HotObsevable;
  let fixture: ComponentFixture<HotObsevable>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HotObsevable]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HotObsevable);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
