import { Injectable, signal, WritableSignal } from '@angular/core';
import { sleepQuiz } from '../constants/quiz';
import { Mattress } from '../classes/mattress';
import { mattressList } from '../constants/matresses';
import { Matches } from '../classes/matches';

@Injectable({
  providedIn: 'root',
})
export class Business {
  quizStarted = false
  quizFinished = false
  quizQuestion = signal(0)
  tags = signal<string[]>([])
  possibleMattresses: WritableSignal<Mattress[]> = signal([])
  possibleMattressesObject: WritableSignal<Matches> = signal({
    highMatch: [],
    midMatch: [],
    lowMatch: [],
  })
  sleepQuiz = sleepQuiz
  mattressList = mattressList
  possibleExtraMatresses = signal(12)
  warning = false

  setTag(tag: string) {
    this.tags()[this.quizQuestion()] = tag
    this.warning = false
  }

  convertToPercent(x: number, y: number) {
    return Math.round((x / y) * 100)
  }

  startQuiz() {
    this.quizStarted = true
  }

  log(a: unknown){
    console.log(a)
  }

  finishQuiz() {
    if (!this.tags()[this.quizQuestion()]) { this.warning = true; return; }
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

  heatFinishQuiz() {
    let heat = 0
    if (!this.tags()[this.quizQuestion()]) { this.warning = true; return; }
    this.quizFinished = true
    
    for (let mattress of this.mattressList()) {
      heat = 0
      if (mattress.tags.sleepside == this.tags()[0]) heat += 2
      if (mattress.tags.feel == this.tags()[1]) heat += 2
      if (mattress.tags.back.find((tag) => {if (tag == this.tags()[2]) return true; else return false})) heat += 1
      if (mattress.tags.temp.find((tag) => {if (tag == this.tags()[3]) return true; else return false})) heat += 1
      if (mattress.tags.money == this.tags()[4]) heat += 2
        if (heat == 8) {
          this.possibleMattresses().push(mattress)
        } else if (heat < 8 && heat > 5) {
          this.possibleMattressesObject().highMatch.push(mattress)
        } else if (heat < 6 && heat > 2) {
          this.possibleMattressesObject().midMatch.push(mattress)
        } else if (heat < 3) {
          this.possibleMattressesObject().lowMatch.push(mattress)
        }
    }
    console.log("Perfect Matches",this.possibleMattresses())
    this.possibleExtraMatresses.set(this.possibleExtraMatresses() - this.possibleMattresses().length)
    console.log(this.possibleExtraMatresses())
    console.log("High match",this.possibleMattressesObject().highMatch)
    console.log("Mid match",this.possibleMattressesObject().lowMatch)
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
