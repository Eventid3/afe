import {Component, computed, inject} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {map} from 'rxjs';
import {toObservable, toSignal} from '@angular/core/rxjs-interop';
import {Billionaire, BillionaireService} from '../../billionaire-service';

@Component({
  selector: 'app-details',
  imports: [],
  templateUrl: './details.html',
  styleUrl: './details.css'
})
export class Details {
  private route = inject(ActivatedRoute)
  private service = inject(BillionaireService)

  userId = toSignal<number>(
    this.route.paramMap.pipe(
      map(param => {
        const idStr = param.get("id")
        console.log("idStr:", idStr)
        if (idStr) {
          const idParse = parseInt(idStr)
          console.log("idParse", idParse)
          return idParse
        } else {
          return -1
        }
      })
    )
  )

  user = toSignal(this.service.getBillionaire(
    computed(() => this.userId() ?? -1)()
  ))
}
