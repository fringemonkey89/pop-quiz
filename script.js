var timeLeft = 30;
var timeElem = document.getElementById('time_div');
var timerId = setInterval(countdown, 1000);

 

function countdown() {
    if (timeLeft === -1) {
        clearTimeout(timerId);
        loadScore();
        const Question = document.getElementById("ques").style.display = "none";
        const option = document.getElementById("opt").style.display = "none";
        const button = document.getElementById("btn").style.display = "none";

        const intials = document.getElementById("initialInput").style.display = "block";
        const subScore = document.getElementById("submitScore").style.display = "block";
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

const subScore = document.getElementById("submitScore")
subScore.addEventListener("click", submitInitial);

function submitInitial (){
    var nameInitials = document.getElementById('initialInput');
    var userScore = score;
    var userInfo = {
    userInitial: nameInitials.value.trim(),
    userfinalScore: userScore
    };

    localStorage.setItem('user', JSON.stringify(userInfo));
    
   document.getElementById('record').textContent = localStorage.getItem('userInitial');
   
}

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
        clearTimeout(timerId);
        loadScore();
        const intials = document.getElementById("initialInput").style.display = "block";
        const subScore = document.getElementById("submitScore").style.display = "block";
    }
}

function checkAnswer() {
    const selectedAnswer = parseInt(document.querySelector('input[name="answer"]:checked').value);
    const resOutcome = document.getElementById("outcome");

    if (questions[currentQuestion].a[selectedAnswer].isCorrect) {
        resOutcome.textContent = "correct answer";
        score++;
       nextQuestion();
    } else {
        resOutcome.textContent = "incorrect answer";  
        nextQuestion();
    }
}
function loadScore() {
    const totalScore = document.getElementById("your_score")
    totalScore.textContent = "You scored " + score + " out of "  + questions.length;
}

