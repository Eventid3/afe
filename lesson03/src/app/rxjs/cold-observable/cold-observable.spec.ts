import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColdObservable } from './cold-observable';

describe('ColdObservable', () => {
  let component: ColdObservable;
  let fixture: ComponentFixture<ColdObservable>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ColdObservable]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ColdObservable);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
