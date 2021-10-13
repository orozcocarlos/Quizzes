import {Questions}  from "./Questions.js"

export class Quizz{
    questionindex = 0;
    score = 0;
    /**
     * 
     * @param {Questions[]} questions 
     */

    constructor(questions){
        this.questions= questions;

    }
    /**
     * 
     * @returns {Questions}
     */

    getQuestionIndex(){
        return this.questions[this.questionindex]
    }

    guess(answer){

        console.log(answer)
        if(this.getQuestionIndex().correranswer(answer)){

            this.score++

        }
        this.questionindex++;

    }

    isEnded(){
        return this.questions.length === this.questionindex
    }



}