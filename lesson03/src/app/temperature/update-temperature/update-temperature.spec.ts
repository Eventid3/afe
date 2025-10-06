import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateTemperature } from './update-temperature';

describe('UpdateTemperature', () => {
  let component: UpdateTemperature;
  let fixture: ComponentFixture<UpdateTemperature>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateTemperature]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateTemperature);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
