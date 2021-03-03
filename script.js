var startQuizBtn = document.querySelector("#startQuizBtn");
var homePage = document.querySelector("#homePage");
var questionsDiv = document.querySelector("#questionsDiv");
var quizDiv = document.querySelector("#quizDiv");
var question = document.querySelector("#question");
var choicesBtns = document.querySelector("#choicesBtns");
var choice0 = document.querySelector("#choice0");
var choice1 = document.querySelector("#choice1");
var choice2 = document.querySelector("#choice2");
var choice3 = document.querySelector("#choice3");

var wrongAnswer = "Wrong";
var correctAnswer = "Correct";

startQuizBtn.addEventListener("click", startQuiz);
choice0.addEventListener("click", checkAnswer);
choice1.addEventListener("click", checkAnswer);
choice2.addEventListener("click", checkAnswer);
choice3.addEventListener("click", checkAnswer);

var questions = [
    {
        question: "What is 1 + 1",
        choices: ["1", "2", "3", "4"],
        answer: "2",
    }
]

function startQuiz () {
    homePage.setAttribute("class", "hidden");
    quizDiv.removeAttribute("class");
    displayQuestion ();    
}

function displayQuestion () {
    for (var currentIndex = 0; currentIndex < questions.length; currentIndex++) {
        question.textContent = questions[currentIndex].question;
        choice0.textContent = questions[currentIndex].choices[0];
        choice1.textContent = questions[currentIndex].choices[1];
        choice2.textContent = questions[currentIndex].choices[2];
        choice3.textContent = questions[currentIndex].choices[3];
    }
}

function checkAnswer () {
    alert ("Hey!");
}