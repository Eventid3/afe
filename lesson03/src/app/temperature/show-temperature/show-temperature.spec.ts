import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowTemperature } from './show-temperature';

describe('ShowTemperature', () => {
  let component: ShowTemperature;
  let fixture: ComponentFixture<ShowTemperature>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShowTemperature]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowTemperature);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
