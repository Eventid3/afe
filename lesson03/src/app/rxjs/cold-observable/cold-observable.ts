import { Component } from '@angular/core';
import {filter, map, of, scan, tap, toArray} from 'rxjs';
import {AsyncPipe, NgForOf} from '@angular/common';

@Component({
  selector: 'app-cold-observable',
  imports: [
    AsyncPipe,
    NgForOf
  ],
  templateUrl: './cold-observable.html',
  styleUrl: './cold-observable.css'
})
export class ColdObservable {
  numbers$ = of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10).pipe(
      scan((acc: number[], curr) => [...acc, curr], [])
    )

  result$ = this.numbers$.pipe(
    map(numbers => numbers
      .filter(num => num % 2 != 0)
      .slice(0,3)
      .map(num => num * 25)),
    tap(results => console.log('result array:', results))
  )
}
