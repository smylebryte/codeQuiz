var startQuizBtn = document.querySelector("#startQuizBtn");
var homePage = document.querySelector("#homePage");
var questionsDiv = document.querySelector("#questionsDiv");
var quizDiv = document.querySelector("#quizDiv");
var question = document.querySelector("#question");
var choicesBtns = document.querySelector("#choicesBtns");

startQuizBtn.addEventListener("click", startQuiz);
// choicesBtns.addEventListener("click", compare)

var currentIndex = 0;
var questions = [
    {
        question: "What is 1 + 1",
        choices: ["1", "2", "3", "4"],
        answer: "2"
    
        question: "What is 2 + 2",
        choices: ["1", "2", "3", "4"],
        answer: "4"
    }
]

// function displayQuestion(q) {
//     var questionText = questionsDiv.createElement(questions[0]);
//     questionsDiv.appendChild(questionText);
// }



function displayQuestion () {
    // btn0.textContent = choices[(0)];
    for (var currentIndex=0; currentIndex<questions.length; currentIndex++) {
        question.textContent = questions[currentIndex].question;

    }
    
}

function startQuiz () {
    // alert ("Hey!");
    // homePage.style.display = "none";
    homePage.setAttribute("class", "hidden");
    quizDiv.removeAttribute("class");
    displayQuestion ();
    // displayQuestion(questions[0]);
    
}