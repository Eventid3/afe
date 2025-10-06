import {Component, inject} from '@angular/core';
import {MessageService} from '../../message-service/message-service';

@Component({
  selector: 'app-show-temperature',
  imports: [],
  templateUrl: './show-temperature.html',
  styleUrl: './show-temperature.css'
})
export class ShowTemperature {
  service = inject(MessageService)

  temp = this.service.derivedTemperature;
}
