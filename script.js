var startQuizBtn = document.querySelector("#startQuizBtn");
var homePage = document.querySelector("#homePage");
var questionsDiv = document.querySelector("#questionsDiv");
var quizDiv = document.querySelector("#quizDiv");
var question = document.querySelector("#question");
var choicesBtns = document.querySelector("#choicesBtns");

startQuizBtn.addEventListener("click", startQuiz);

var currentIndex = 0;

var questions = [
    {
        question: "What is 1 + 1",
        choices: ["1", "2", "3", "4"],
        answer: "2"
    }
]

function startQuiz () {
    homePage.setAttribute("class", "hidden");
    quizDiv.removeAttribute("class");
    displayQuestion ();    
}

function displayQuestion () {
    question.textContent = questions[currentIndex].question;
}