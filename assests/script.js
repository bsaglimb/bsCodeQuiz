var questions = [
    {questions: 'Commonly used data points DO NOT include:',
    answers: [
        {text:'String', correct: false},
        {text:'Booleans', correct: false},
        {text:'Alert', correct: true},
        {text:'Number', correct: false},
]
}, {questions: 'The condition of an if/else statement is elcosed within ________:',
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

var questionElement = document.getElementById("question");
var answerButton = document.getElementById("answer-btns");
var nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

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

function selectionAnswer(e){
    var selectedBtn = e.target;
    var isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
    } else{
        selectedBtn.classList.add("incorrect");
    }
};

startQuiz();
