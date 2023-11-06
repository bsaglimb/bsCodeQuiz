var questions = [
    {question: 'Commonly used data points DO NOT include:',
    answers: [
        {text:'String', correct: false},
        {text:'Booleans', correct: false},
        {text:'Alert', correct: true},
        {text:'Number', correct: false},
]
}, {question: 'The condition of an if/else statement is elcosed within ________:',
answer: [
    {text:'Parenthesis', correct: true},
    {text:'Curly brackets', correct: false},
    {text:'quotes', correct: false},
    {text:'Square brackets', correct: false},
]
}, {question: 'Arrays in JavaScript can be used to store:',
answers: [
    {text:'Number and strings', correct: false},
    {text:'Other arrays', correct: false},
    {text:'Booleans', correct: false},
    {text:'All of the above', correct: true},
]
}, {question: 'String values must be enclosed within __________ when being assigned to variables:',
answers: [
    {text:'commas', correct: true},
    {text:'Curly brackets', correct: false},
    {text:'quotes', correct: false},
    {text:'Square brackets', correct: false},
]
},  {question: 'A very useful tool during development and debugging for printing the content on the debugger is:',
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