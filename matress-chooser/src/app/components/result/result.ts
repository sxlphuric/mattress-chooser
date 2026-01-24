import { Component, inject } from '@angular/core';
import { Business } from '../../service/business';

@Component({
  selector: 'app-result',
  imports: [],
  templateUrl: './result.html',
  styleUrl: './result.scss',
})
export class Result {
  business = inject(Business)
}
