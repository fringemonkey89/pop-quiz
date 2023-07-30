var timeLeft = 30;
var timeElem = document.getElementById('time-div');
var timerId = setInterval(countdown, 1000);

function countdown() {
    if (timeLeft == -1) {
        clearTimeout(timerId);
    } else {
        timeElem.innerHTML = timeLeft + ' seconds remaining';
        timeLeft--;
    }
}



const questions = [{
    q: "What does HTML stand for?",
    a: [{text:"Hyper Text Mark-up Language", isCorrect:true},
        {text:"Hyper Test Mark-up Language", isCorrect:false},
        {text:"Hyphen Text Mark-up Language", isCorrect:false},
        {text:"Hyper Text Mark-down Language", isCorrect:false}
    ]
},

{    q: "Which of the following is an empty element?",
     a: [{text:"<body>", isCorrect:false},
    {text:"<p>", isCorrect:false},
    {text:"<br>", isCorrect:true},
    {text:"<article>", isCorrect:false}
]
},

{    q: "How many datatypes are there in Javascript?",
     a: [{text:"8", isCorrect:true},
    {text:"5", isCorrect:false},
    {text:"7", isCorrect:false},
    {text:"6", isCorrect:false}
]
},

{    q: "Where do you place the link to the external stylesheet?",
     a: [{text:"Above the closing body tag", isCorrect:false},
    {text:"Inside the element tag", isCorrect:false},
    {text:"Below the opening HTML tag", isCorrect:false},
    {text:"inside the head section of the HTML page", isCorrect:true}
]
}
]

let currentQuestion = 0;
let score = 0;

const button = document.getElementById("btn");
button.addEventListener("click", checkAnswer);

function loadQuestion (){
    const Question = document.getElementById("ques")
    const option = document.getElementById("opt")

    Question.textContent = questions[currentQuestion].q;

    option.innerHTML = " ";

    for(let i = 0; questions[currentQuestion].a.length; i++){
        const choicesContainer = document.createElement("div");
        const choice = document.createElement("input");
        const choicesLabel = document.createElement("label");
        
        choice.type = "radio";
        choice.name = "answer";
        choice.value = i;
 
        choicesLabel.textContent = questions[currentQuestion].a[i].text;
        choicesContainer.appendChild(choice);
        choicesContainer.appendChild(choicesLabel);
        option.appendChild(choicesContainer);
    } 
    }
    loadQuestion();

function nextQuestion(){
    if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        loadQuestion();
    } else {
        document.getElementById("opt").remove()
        document.getElementById("ques").remove()
        document.getElementById("btn").remove()
        loadScore();
    }
}

console.log(selectedAnswer)
function checkAnswer() {
    const selectedAnswer = parseInt(document.querySelector('input[name="answer"]:checked').value);
    if (questions[currentQuestion].a[selectedAnswer].isCorrect) {
        score++;
        nextQuestion();
    } else {
        nextQuestion();
    }
}

function loadScore() {
    const totalScore = document.getElementById("your-score")
    totalScore.textContent = "You scored " + score + " out of "  + questions.length;
}

if(questions[currentQuestion] == questions.length && timeLeft > 0 ){
    const totalScore = document.getElementById("your-score")
    totalScore.textContent = "You scored " + score + " out of "  + questions.length + " in " + timeLeft + "seconds"; 
} else {
    const totalScore = document.getElementById("your-score")
    totalScore.textContent = "You scored " + score + " out of "  + questions.length + " in 30seconds"
}
