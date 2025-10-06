import {Component, Input} from '@angular/core';

@Component({
  selector: 'number',
  templateUrl: 'number-box.html'
})
export class NumberBox{
  @Input()
  inputNumber?: string;
}
