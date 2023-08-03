//variables for the quiz timer
var timeLeft = 30;
var timeElem = document.getElementById('time_div');
var timerId = setInterval(countdown, 1000);

//the currentQuestion and score are set to zero where they will store the points and question index
let currentQuestion = 0;
let score = 0;

//this where the submit answer button's event listener is added 
const button = document.getElementById("btn");
button.addEventListener("click", checkAnswer);

//this is where the submit initials button event listener is attached
const subScore = document.getElementById("submitScore")
subScore.addEventListener("click", submitInitial);
subScore.textContent = "Submit Initials";

//this is where the replay quiz button event listener is attached
const restart = document.getElementById('ReplayQuiz');

//this is the array where all the questions and answers are stored
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
 
//the countdown function 
function countdown() {
    //if the timeLeft reaches zero, the score is loaded, the timer stops 
    if (timeLeft === -1) {
        clearTimeout(timerId);
        loadScore();
        //the question, answer and submit button display is set to none because no more questions need to be answered
        const Question = document.getElementById("ques").style.display = "none";
        const option = document.getElementById("opt").style.display = "none";
        const button = document.getElementById("btn").style.display = "none";
        //the initial element appears to take the users input
        const intials = document.getElementById("initialInput").style.display = "block";
        //the submit initial button display is set to block
        const subScore = document.getElementById("submitScore").style.display = "block";
    } else {
        //if the timer has more than 0 seconds left, it will continue to count down
        timeElem.innerHTML = timeLeft + ' seconds remaining';
        timeLeft--;
    }
}

//this function submits the initials and score then stores it locally 
function submitInitial (){
    //the restart button appears 
    restart.style.display = 'block';
    restart.textContent = 'Play Again?';
    //the variable that holds the initial
    var nameInitials = document.getElementById('initialInput').value;

    //clears the initials from the input
    localStorage.setItem('score', JSON.stringify(score))
    localStorage.setItem('user', JSON.stringify(nameInitials));
    document.getElementById('record').textContent = "User: " + localStorage.getItem('user') + " Score: " + localStorage.getItem('score') + "/4";
    
}

//this loads a window with an alert display before the quiz loads that tells the user how long they have to finish and the penalty for selecting the wrong answer

window.onload = function(){
    window.alert("The quiz is about to start hot-shot and you have 30 seconds or less to complete it. A word to the wise, if you choose the wrong answer, you will have 5 seconds subtracted from the timer")
}

//this is the function that generates the questions and answers for the quiz
function loadQuestion (){
    const Question = document.getElementById("ques");
    const option = document.getElementById("opt");

    Question.textContent = questions[currentQuestion].q;

    option.innerHTML = " ";
//this loops through the question array and creates the elements that displays the quiz question and answers
    for(let i = 0; questions[currentQuestion].a.length; i++){
        const choicesContainer = document.createElement("div");
        const choice = document.createElement("input");
        const choicesLabel = document.createElement("label");
        //this sets the input type to radio, the name to answer and value to i
        choice.type = "radio";
        choice.name = "answer";
        choice.value = i;
        //this creates the elements for all the choices a user will pick for the answer
        choicesLabel.textContent = questions[currentQuestion].a[i].text;
        choicesContainer.appendChild(choice);
        choicesContainer.appendChild(choicesLabel);
        option.appendChild(choicesContainer);
    } 
    }
    loadQuestion();

//this function loads the next question in the quiz
function nextQuestion(){
    if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        loadQuestion();
    } else {
        document.getElementById("opt").style.display = "none";
        document.getElementById("ques").style.display = "none";
        document.getElementById("btn").style.display = "none";
        timeLeft=0;
        timeElem.innerHTML = timeLeft + ' seconds remaining';
        loadScore();
        const intials = document.getElementById("initialInput").style.display = "block";
        const subScore = document.getElementById("submitScore").style.display = "block";
    }
}
// checks the answer selected if its correct or not and then displays a "correct" or "incorrect" text
// once the answer is evaluated, the next question is loaded by the nextQuestion function
function checkAnswer() {
    const selectedAnswer = parseInt(document.querySelector('input[name="answer"]:checked').value);
    const resOutcome = document.getElementById("outcome");
    
    if (questions[currentQuestion].a[selectedAnswer].isCorrect) {
        //this changes the text color depending if its correct
        resOutcome.style.color = "limegreen";
        resOutcome.textContent = "correct answer";
        score++;
       nextQuestion();
    } else{
        //this changes the text color depending if its incorrect
        resOutcome.style.color = "red";
        resOutcome.textContent = "incorrect answer"; 
        //if the user selects the incorrect answer then 5 seconds is subtracted from the timer
        timeLeft -= 5;
        timeElem.innerHTML = timeLeft + ' seconds remaining';
        nextQuestion();
    }
}

//the final score is displayed
function loadScore() {
    const totalScore = document.getElementById("your_score")
    totalScore.textContent = "You scored " + score + " out of "  + questions.length;
}

