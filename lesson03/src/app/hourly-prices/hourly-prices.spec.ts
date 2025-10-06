import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HourlyPrices } from './hourly-prices';

describe('HourlyPrices', () => {
  let component: HourlyPrices;
  let fixture: ComponentFixture<HourlyPrices>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HourlyPrices]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HourlyPrices);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
