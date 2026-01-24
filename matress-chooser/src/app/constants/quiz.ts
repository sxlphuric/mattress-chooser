import {signal} from "@angular/core";
import { QuizQuestion } from "../classes/quiz-question";

const sleepQuiz = signal([
    new QuizQuestion("What position do you sleep, or usually wake up in?","Self explanatory I think",[
        {
            answertext: "On my back",
            tag: "sleepside-backstomach",
        },
        {
            answertext: "On my side",
            tag: "sleepside-side",
        },
        {
            answertext: "On my stomach",
            tag: "sleepside-backstomach",
        },
        {
            answertext: "Toss & turn",
            tag: "sleepside-all",
        },
    ]),
    new QuizQuestion("How would you like your matress?","Choose your preferred stiffness.",[
        {
            answertext: "Soft, I like to sink in like a cloud",
            tag: "feel-soft",
        },
        {
            answertext: "Medium, I like a little give",
            tag: "feel-medium",
        },
        {
            answertext: "Stiff, I want NO SOFTNESS AT ALL",
            tag: "feel-stiff",
        },
    ]),
    new QuizQuestion("Do you ever wake up with any back pain?","Back pain is painful",[
        {
            answertext: "Yes, every morning",
            tag: "back-high",
        },
        {
            answertext: "Sometimes, I feel back pain",
            tag: "back-medium",
        },
        {
            answertext: "Rarely, I do",
            tag: "back-low",
        },
        {
            answertext: "Never",
            tag: "back-none",
        },
    ]),
    new QuizQuestion("Do you feel hot while sleeping?","Tossing and turning your pillow every time...",[
        {
            answertext: "Yes, every nights",
            tag: "temp-always",
        },
        {
            answertext: "Yes, most nights",
            tag: "temp-midhigh",
        },
        {
            answertext: "Yes, sometimes",
            tag: "temp-medium",
        },
        {
            answertext: "Yes, rarely",
            tag: "temp-low",
        },
        {
            answertext: "I am always Cold while sleeping",
            tag: "temp-rarely",
        },
    ]),
    new QuizQuestion("What matress quality are you expecting?","PLEASE give us money...",[
        {
            answertext: "I want the best of the best.",
            tag: "money-money",
        },
        {
            answertext: "I'm fine with some little budget cuts.",
            tag: "money-poor",
        },
    ]),
])

export { sleepQuiz }