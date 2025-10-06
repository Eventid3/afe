import {Component, inject} from '@angular/core';
import { Billionaire, BillionaireService } from '../../billionaire-service';
import { Observable } from 'rxjs';
import {toSignal} from '@angular/core/rxjs-interop';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-list',
  imports: [
    RouterLink
  ],
  templateUrl: './list.html',
  styleUrl: './list.css'
})
export class List {
  billionaireService = inject(BillionaireService)

  billionaires = toSignal(this.billionaireService.getBillionaires())
}
