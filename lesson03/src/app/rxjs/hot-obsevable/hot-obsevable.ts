import {Component, signal} from '@angular/core';
import {fromEvent} from 'rxjs';

@Component({
  selector: 'app-hot-obsevable',
  imports: [],
  templateUrl: './hot-obsevable.html',
  styleUrl: './hot-obsevable.css'
})
export class HotObsevable {
  mouseX = signal(0)
  mouseY = signal(0)
  constructor() {
    const hotObservable$ = fromEvent(document, 'mousemove')
    hotObservable$.subscribe((e) => {
      const mouse = e as MouseEvent
      this.mouseX.set(mouse.clientX)
      this.mouseY.set(mouse.clientY)
    })
  }
}
