import { Injectable, signal, WritableSignal } from '@angular/core';
import { sleepQuiz } from '../constants/quiz';
import { Mattress } from '../classes/mattress';
import { mattressList } from '../constants/matresses';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class Business {
  quizStarted = false
  quizFinished = false
  quizQuestion = signal(0)
  tags = signal<string[]>([])
  possibleMattresses: WritableSignal<Mattress[]> = signal([])
  sleepQuiz = sleepQuiz
  mattressList = mattressList
  warning = false

  setTag(tag: string) {
    this.tags()[this.quizQuestion()] = tag
  }

  startQuiz() {
    this.quizStarted = true
  }

  log(a: unknown){
    console.log(a)
  }

  finishQuiz() {
    this.quizFinished = true
    for (let mattress of this.mattressList()) {
      if (mattress.tags.sleepside == this.tags()[0] &&
          mattress.tags.feel == this.tags()[1] &&
          mattress.tags.back.find((tag) => {if (tag == this.tags()[2]) return true; else return false}) &&
          mattress.tags.temp.find((tag) => {if (tag == this.tags()[3]) return true; else return false}) &&
          mattress.tags.money == this.tags()[4] &&
          this.possibleMattresses().indexOf(mattress) == -1
        ) {

          this.possibleMattresses().push(mattress)
          
        }
    }
    console.log("Mattress List",this.possibleMattresses())
    console.log("Sleep Tags",this.tags())
  }

  redoQuiz() {
    this.quizStarted = false
    this.quizFinished = false
    this.tags.set([])
    this.quizQuestion.set(0)
    this.warning = false
  }

  nextQuestion () {
    if (this.quizQuestion() != this.sleepQuiz().length - 1)
    if (!this.tags()[this.quizQuestion()]) {
      this.warning = true
    } else {
      this.quizQuestion.set(this.quizQuestion() + 1)
      this.warning = false
    }
    
  }

  previousQuestion(){
    if (this.quizQuestion() != 0)
    this.quizQuestion.set(this.quizQuestion() - 1)
  }
}
