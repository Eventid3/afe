import {inject, Injectable} from '@angular/core';
import {ElectricStore, HourlyPrice} from '../electric-store/electric-store';
import {parseJson} from '@angular/cli/src/utilities/json-file';

const dataJson = `
[
        {
            "HourUTC": "2024-08-23T21:00:00",
            "HourDK": "2024-08-23T23:00:00",
            "PriceArea": "DK1",
            "SpotPriceDKK": 362.730011,
            "SpotPriceEUR": 48.610001
        },
        {
            "HourUTC": "2024-08-23T21:00:00",
            "HourDK": "2024-08-23T23:00:00",
            "PriceArea": "DK2",
            "SpotPriceDKK": 362.730011,
            "SpotPriceEUR": 48.610001
        },
        {
            "HourUTC": "2024-08-23T21:00:00",
            "HourDK": "2024-08-23T23:00:00",
            "PriceArea": "NO2",
            "SpotPriceDKK": 295.720001,
            "SpotPriceEUR": 39.630001
        },
        {
            "HourUTC": "2024-08-23T21:00:00",
            "HourDK": "2024-08-23T23:00:00",
            "PriceArea": "SE3",
            "SpotPriceDKK": -22.459999,
            "SpotPriceEUR": -3.01
        },
        {
            "HourUTC": "2024-08-23T21:00:00",
            "HourDK": "2024-08-23T23:00:00",
            "PriceArea": "SE4",
            "SpotPriceDKK": -22.459999,
            "SpotPriceEUR": -3.01
        },
        {
            "HourUTC": "2024-08-23T21:00:00",
            "HourDK": "2024-08-23T23:00:00",
            "PriceArea": "SYSTEM",
            "SpotPriceDKK": 11.27,
            "SpotPriceEUR": 1.51
        },
        {
            "HourUTC": "2024-08-23T20:00:00",
            "HourDK": "2024-08-23T22:00:00",
            "PriceArea": "DK1",
            "SpotPriceDKK": 199.830002,
            "SpotPriceEUR": 26.780001
        },
        {
            "HourUTC": "2024-08-23T20:00:00",
            "HourDK": "2024-08-23T22:00:00",
            "PriceArea": "DK2",
            "SpotPriceDKK": 199.830002,
            "SpotPriceEUR": 26.780001
        },
        {
            "HourUTC": "2024-08-23T20:00:00",
            "HourDK": "2024-08-23T22:00:00",
            "PriceArea": "NO2",
            "SpotPriceDKK": 250.649994,
            "SpotPriceEUR": 33.59
        },
        {
            "HourUTC": "2024-08-23T20:00:00",
            "HourDK": "2024-08-23T22:00:00",
            "PriceArea": "SE3",
            "SpotPriceDKK": -10.15,
            "SpotPriceEUR": -1.36
        }
    ]
`

@Injectable({
  providedIn: 'root'
})
export class ElectricService {
  protected readonly store = inject(ElectricStore)

  constructor() {
    const prices: HourlyPrice[] = JSON.parse(dataJson)
    console.log("prices:", prices)
    const priceAreas= prices
      .map(p => p.PriceArea)
      .filter((e, i, self) => i === self.indexOf(e))
    console.log("priceAreas:", priceAreas)
    priceAreas.forEach(area => {
      const pricesForArea = prices.filter(p => p.PriceArea === area)
      this.store.addHourlyPrices(pricesForArea, area)
    })
  }

  getEntities() {
    const result = [
      this.store.DK1Entities(),
      this.store.DK2Entities(),
      this.store.NO2Entities(),
      this.store.SE3Entities(),
      this.store.SE4Entities(),
      this.store.SYSTEMEntities()
    ]

    return result;
  }
}
