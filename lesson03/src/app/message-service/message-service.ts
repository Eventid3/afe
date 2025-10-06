import {computed, Injectable, signal} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  private temperature = signal(20)
  readonly derivedTemperature = computed(() => this.temperature())

  public setTemperature(temp: number) {
    if (temp >= 0 && temp <= 100) {
      this.temperature.set(temp)
    }
  }
}
