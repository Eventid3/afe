import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SomePage } from './some-page';

describe('SomePage', () => {
  let component: SomePage;
  let fixture: ComponentFixture<SomePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SomePage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
