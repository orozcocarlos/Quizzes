export class Questions{
    constructor(text,choices,answer){

        this.text = text;
        this.choices=choices;
        this.answer = answer;

    }

    correranswer(choice){

        return choice === this.answer

    }
}