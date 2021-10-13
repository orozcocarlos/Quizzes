import { Principal } from "./models/Principal.js";
import { preguntas } from "./data/question.js";
import { Quizz } from "./models/Quiz.js";

/**
 *
 * @param {Quizz} quiz quiz objects
 * @param {Principal} ui Ui ojects
 */
 const elemento = document.getElementById("quizzes");
 const button = document.createElement("button");
const renderPage = (quiz, ui) => {
    button.style.display="none";


  if (quiz.isEnded()) {
    console.log(quiz.score);
    ui.showScore(quiz.score);
  } else {
    ui.showQuestion(quiz.getQuestionIndex().text);
    console.log(quiz.getQuestionIndex().choices);
    ui.showChoices(quiz.getQuestionIndex().choices, (currentchoice) => {
      quiz.guess(currentchoice);
      renderPage(quiz, ui);
    });
    ui.showProgress(quiz.questionindex + 1, quiz.questions.length);
  }
};

function main() {
  const quiz = new Quizz(preguntas);
  const ui = new Principal();  
  button.innerHTML = "Comenzar";
  button.className = "button";
  elemento.append(button);
  button.addEventListener("click", () => {
    renderPage(quiz, ui);
  });
}

main();
