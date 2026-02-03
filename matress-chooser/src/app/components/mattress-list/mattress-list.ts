import { Component, inject } from '@angular/core';
import { mattressList } from '../../constants/matresses';
import { Business } from '../../service/business';

@Component({
  selector: 'app-mattress-list',
  imports: [],
  templateUrl: './mattress-list.html',
  styleUrl: './mattress-list.scss',
})
export class MattressList {
  mattresses = mattressList
  business = inject(Business)
}
