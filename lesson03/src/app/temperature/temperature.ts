import { Component } from '@angular/core';
import {ShowTemperature} from './show-temperature/show-temperature';
import {UpdateTemperature} from './update-temperature/update-temperature';

@Component({
  selector: 'app-temperature',
  imports: [
    ShowTemperature,
    UpdateTemperature
  ],
  templateUrl: './temperature.html',
  styleUrl: './temperature.css'
})
export class Temperature {

}
