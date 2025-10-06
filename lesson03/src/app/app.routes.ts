import { Routes } from '@angular/router';
import { Zone } from './zone/zone';
import {Temperature} from './temperature/temperature';
import {Rxjs} from './rxjs/rxjs';
import {HourlyPrices} from './hourly-prices/hourly-prices';

export const routes: Routes = [
  {path: 'zone', component: Zone},
  {path: '', redirectTo: '/zone', pathMatch: 'full'},
  {path: 'temperature', component: Temperature},
  {path: 'rxjs', component: Rxjs},
  {path: 'prices', component: HourlyPrices},
];
