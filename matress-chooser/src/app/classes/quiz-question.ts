import type { QuestionAnswer } from "./question-answer"

export class QuizQuestion {
    question!: string
    description!: string
    answers!: QuestionAnswer[]
    constructor (question:string, description: string, answers: QuestionAnswer[]){
        this.question = question
        this.description = description
        this.answers = answers
    }
}
