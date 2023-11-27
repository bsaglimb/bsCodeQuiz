// DOCUMENT SELECTORS
var startBtn = document.querySelector('#startBtn');
var timerEl = document.querySelector('#timer');
var mainEl = document.querySelector('#main');
var homeLi = document.querySelector('#home-link');
var highscoreLi = document.querySelector('#highscore-link')

// GLOBAL VARIABLES
var timerInterval;
var secondsLeft;
var quizSelection;
var quizQuestions;
var quizAnswers;

var questions = [
    {questions: 'Commonly used data points DO NOT include:',
    answers: [
        {text:'String', correct: false},
        {text:'Booleans', correct: false},
        {text:'Alert', correct: true},
        {text:'Number', correct: false},
]
}, {questions: 'The condition of an if/else statement is enclosed within ________:',
answers: [
    {text:'Parenthesis', correct: true},
    {text:'Curly brackets', correct: false},
    {text:'quotes', correct: false},
    {text:'Square brackets', correct: false},
]
}, {questions: 'Arrays in JavaScript can be used to store:',
answers: [
    {text:'Number and strings', correct: false},
    {text:'Other arrays', correct: false},
    {text:'Booleans', correct: false},
    {text:'All of the above', correct: true},
]
}, {questions: 'String values must be enclosed within __________ when being assigned to variables:',
answers: [
    {text:'commas', correct: true},
    {text:'Curly brackets', correct: false},
    {text:'quotes', correct: false},
    {text:'Square brackets', correct: false},
]
},  {questions: 'A very useful tool during development and debugging for printing the content on the debugger is:',
answers: [
    {text:'JavaScript', correct: false},
    {text:'terminal/bash', correct: false},
    {text:'for loops', correct: false},
    {text:'Console log', correct: true},
]
},  
];

var questionElement = document.getElementById("questions");
var answerButton = document.getElementById("answer-btns");
var nextButton = document.getElementById("next-btn");

let questionIndex = 0;
let score = 0;

function init() {
    renderHome();
}

// NAVBAR //
homeLi.addEventListener('click', renderHome);
highscoreLi.addEventListener('click', renderScoreboard);

function initializeTimer() {
    secondsLeft = 75;

    if (!timerInterval) {
        timerInterval = setInterval(function () {
            secondsLeft--;
            timerEl.textContent = secondsLeft;

            if (secondsLeft <= 0) {
                endQuiz();
            }
        }, 1000);
    }
}

function stopTime() {
    clearInterval(timerInterval);
    timerInterval = null;
}

function resetTimer() {
    secondsLeft = 0;
    timerEl.textContent = secondsLeft;
}

// HOMEPAGE RENDERING //
function renderHome() {
    resetQuiz();
    // check if timer is initialized
    if (timerInterval) {
        stopTime();
    }

    mainEl.textContent = '';

    renderTitle('Coding Quiz Challenge');

    let par = document.createElement('p');
    par.textContent = 'Select a category below for the language you would like to take a quiz on. You will have 75 seconds to complete all 9 questions! At the end, enter your initials to be added to the leaderboard.';
}

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[questionIndex];
    let questionNo = questionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.questions;

    currentQuestion.answers.forEach(answer => {
        var button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButton.appendChild(button);
        if (answer.correct){
            button.dataset.correct = answer.correct; 
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState(){
    nextButton.style.display = "none";
    while(answerButton.firstChild){
        answerButton.removeChild(answerButton.firstChild);
    }
};

function selectAnswer(e){
    var selectedBtn = e.target;
    var isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    } else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButton.children).forEach(button =>{
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
};

function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play again";
    nextButton.style.display = "block";
};

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
};

nextButton.addEventListener("click", ()=>{
    if (currentQuestionIndex < questions.length){
        handleNextButton();
    } else {
        startQuiz();
    }
});

startQuiz();
