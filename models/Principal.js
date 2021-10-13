export class Principal {
  constructor() {}

  iniciar() {

    const elemento = document.getElementById("quizzes");
    const button = document.createElement('button');
    button.innerHTML="empezar";
    button.className='button';    
    elemento.append(button)
    button.addEventListener('click',()=>{
           
    });



    
  }
  showQuestion(text) {
    const questionTitle = document.getElementById("question");
    questionTitle.innerHTML = text;
  }
  /**
   *
   * @param {string[]} choices this choices of the questions
   */
  showChoices(choices, callback) {
    const choiceconteiner = document.getElementById("choices");
    choiceconteiner.innerHTML = "";

    for (let i = 0; i < choices.length; i++) {
      const button = document.createElement("button");
      button.innerHTML = choices[i];
      button.className = "button";
      button.addEventListener("click", () => callback(choices[i]));
      choiceconteiner.append(button);
    }
  }
  /**
   *
   * @param {number} score the total score
   */

  showScore(score) {
    const quizendhmtl = `
    <h1>Result</h1>
    <h2>Your Score ${score}</h2>
    `;
    const element = document.getElementById("quizzes");
    element.innerHTML = quizendhmtl;
  }
  /**
   *
   * @param {number} currentIndex index of the question
   * @param {number} total total question
   */

  showProgress(currentIndex, total) {
    const element = document.getElementById("progress");
    element.innerHTML = `Question ${currentIndex} of ${total}`;
  }
}
