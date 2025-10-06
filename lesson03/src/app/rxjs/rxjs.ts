import { Component } from '@angular/core';
import {ColdObservable} from './cold-observable/cold-observable';
import {HotObsevable} from './hot-obsevable/hot-obsevable';

@Component({
  selector: 'app-rxjs',
  imports: [
    ColdObservable,
    HotObsevable
  ],
  templateUrl: './rxjs.html',
  styleUrl: './rxjs.css'
})
export class Rxjs {

}
