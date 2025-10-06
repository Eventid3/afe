import {Component, inject} from '@angular/core';
import {ElectricService} from '../electric-service/electric-service';
import {CurrencyPipe} from '@angular/common';

@Component({
  selector: 'app-hourly-prices',
  imports: [
    CurrencyPipe
  ],
  templateUrl: './hourly-prices.html',
  styleUrl: './hourly-prices.css'
})
export class HourlyPrices {
  service = inject(ElectricService)

  prices = this.service.getEntities()
}
