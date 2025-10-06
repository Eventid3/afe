import {patchState, signalStore, type, withMethods} from '@ngrx/signals';
import {addEntities, SelectEntityId, withEntities} from '@ngrx/signals/entities';
import {makeStateKey} from '@angular/core';

export interface HourlyPrice{
  HourUTC: string,
  HourDK: string,
  PriceArea: string,
  SpotPriceDKK: number,
  SpotPriceEUR: number

  [key:string]: any
}

const selectId: SelectEntityId<HourlyPrice> = (price) => `${price.HourUTC}-${price.PriceArea}`

export const ElectricStore = signalStore(
  { providedIn: 'root'},
  withEntities({ entity: type<HourlyPrice>(), collection: "DK1"}),
  withEntities({ entity: type<HourlyPrice>(), collection: "DK2"}),
  withEntities({ entity: type<HourlyPrice>(), collection: "NO2"}),
  withEntities({ entity: type<HourlyPrice>(), collection: "SE3"}),
  withEntities({ entity: type<HourlyPrice>(), collection: "SE4"}),
  withEntities({ entity: type<HourlyPrice>(), collection: "SYSTEM"}),
  withMethods((store) => ({
    addHourlyPrices(hourlyPrices: HourlyPrice[], collection: string) {
      console.log("in addHourlyPrices:", hourlyPrices, collection)
      makeStateKey(collection)
      patchState(store, addEntities(hourlyPrices, {collection: collection, selectId}))
    }
  }))
)
