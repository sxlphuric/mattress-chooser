import { Component, inject } from '@angular/core';
import { Quizquestion } from '../quizquestion/quizquestion';
import { sleepQuiz } from '../../constants/quiz';
import { Business } from '../../service/business';

@Component({
  selector: 'app-quiz',
  imports: [Quizquestion],
  templateUrl: './quiz.html',
  styleUrl: './quiz.scss',
})
export class Quiz {
  readonly sleepQuiz = sleepQuiz
  readonly business = inject(Business)
}
