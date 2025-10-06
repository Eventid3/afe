import { Component, computed, signal, WritableSignal } from '@angular/core';
import { NumberBox } from '../number-box/number-box';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'box',
  imports: [NumberBox, FormsModule],
  templateUrl: 'box.html',
  styleUrl: 'box.css'
})
export class Box {
  key = signal("")
  firstName = signal("esben")
  lastName = signal("inglev")
  isFirstUpperCase = signal(false)
  isLastUpperCase = signal(false)
  bothUpperCase = computed(() => this.isFirstUpperCase() && this.isLastUpperCase())

  numbers: number[] = [1, 2, 3, 4, 5]
  anotherName = "Woffer";

  changeCasing(name: WritableSignal<string>, bool: WritableSignal<boolean>) {
    name.update(prev => {
      if (bool()) {
        bool.set(false)
        return prev.toLowerCase()
      } else {
        bool.set(true)
        return prev.toUpperCase()
      }
    })
  }

  updateKey(event: KeyboardEvent) {
    console.log(event.key)
    this.key.set(event.key)
  }
}
