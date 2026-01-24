import { Component, inject, input, WritableSignal } from '@angular/core';
import { Business } from '../../service/business';
import { sleepQuiz } from '../../constants/quiz';

@Component({
  selector: 'app-quizquestion',
  imports: [],
  templateUrl: './quizquestion.html',
  styleUrl: './quizquestion.scss',
})
export class Quizquestion {
  readonly business = inject(Business)
  readonly sleepQuiz = sleepQuiz
  question = this.business.quizQuestion()
}
