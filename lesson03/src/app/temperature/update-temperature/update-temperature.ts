import {Component, inject} from '@angular/core';
import {MessageService} from '../../message-service/message-service';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-update-temperature',
  imports: [FormsModule],
  templateUrl: './update-temperature.html',
  styleUrl: './update-temperature.css'
})
export class UpdateTemperature {
  service = inject(MessageService)
  temp = this.service.derivedTemperature()

  updateTemp() {
    this.service.setTemperature(this.temp)
  }
}
