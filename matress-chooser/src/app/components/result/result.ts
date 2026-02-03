import { Component, inject } from '@angular/core';
import { Business } from '../../service/business';
import { MattressList } from '../mattress-list/mattress-list';

@Component({
  selector: 'app-result',
  imports: [MattressList],
  templateUrl: './result.html',
  styleUrl: './result.scss',
})
export class Result {
  business = inject(Business)
}
