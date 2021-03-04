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
var btn0 = document.querySelector("#btn0");
var btn1 = document.querySelector("#btn1");
var btn2 = document.querySelector("#btn2");
var btn3 = document.querySelector("#btn3");
var answersDiv = document.querySelector("#answersDiv");

var currentIndex = 0;

var wrongAnswer = "Wrong";
var correctAnswer = "Correct";
var valueFromBtn = "2";
var currentQuestion = questions[0];

startQuizBtn.addEventListener("click", startQuiz);
btn0.addEventListener("click", checkAnswer);
btn1.addEventListener("click", checkAnswer);
btn2.addEventListener("click", checkAnswer);
btn3.addEventListener("click", checkAnswer);

var questions = [
    {
        question: "What is 1 + 1",
        choices: ["1", "2", "3", "4"],
        value: [0, 1, 2, 3],
        answer: "2",
    },
    {
        question: "What is 2 + 2",
        choices: ["1", "2", "3", "4"],
        answer: "4",
    },
    {
        question: "What is 3 + 3",
        choices: ["3", "4", "5", "6"],
        answer: "6",
    }
]

function startQuiz () {
    homePage.setAttribute("class", "hidden");
    quizDiv.removeAttribute("class");
    displayQuestion ();    
}

function displayQuestion () {
    // for (var currentIndex = 0; currentIndex < questions.length; currentIndex++) {
    question.textContent = questions[currentIndex].question;
    choice0.textContent = questions[currentIndex].choices[0];
    choice1.textContent = questions[currentIndex].choices[1];
    choice2.textContent = questions[currentIndex].choices[2];
    choice3.textContent = questions[currentIndex].choices[3];
    }

function checkAnswer () {
    alert ("Hey!");
    btn0 = questions[currentIndex].value[0];
    for (let i=0; i < questions.choices.length; i++) {
        if (valueFromBtn === currentQuestion.answer) {
            answersDiv.textContent = "Correct!"
        } else {
            answersDiv.textContent = "Wrong"
        }
    }



}