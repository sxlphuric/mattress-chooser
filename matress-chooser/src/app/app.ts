import { Component, inject, signal } from '@angular/core';
import { Quiz } from './components/quiz/quiz';
import { Business } from './service/business';
import { Result } from './components/result/result';

@Component({
  selector: 'app-root',
  imports: [Quiz, Result],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('matress-chooser');
  readonly business = inject(Business)
}
