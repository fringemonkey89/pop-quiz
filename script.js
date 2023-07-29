const questions = [{
    q: "What does HTML stand for?",
    a: [{text:"Hyper Text Mark-up Language", isCorrect:true},
        {text:"Hyper Text Mark-up Language", isCorrect:false},
        {text:"Hyper Text Mark-up Language", isCorrect:false},
        {text:"Hyper Text Mark-up Language", isCorrect:false}
    ]
},

{    q: "What does HTML stand for?",
     a: [{text:"Hyper Text Mark-up Language", isCorrect:false},
    {text:"Hyper Text Mark-up Language", isCorrect:false},
    {text:"Hyper Text Mark-up Language", isCorrect:true},
    {text:"Hyper Text Mark-up Language", isCorrect:false}
]
},

{    q: "What does HTML stand for?",
     a: [{text:"Hyper Text Mark-up Language", isCorrect:true},
    {text:"Hyper Text Mark-up Language", isCorrect:false},
    {text:"Hyper Text Mark-up Language", isCorrect:false},
    {text:"Hyper Text Mark-up Language", isCorrect:false}
]
},

{    q: "What does HTML stand for?",
     a: [{text:"Hyper Text Mark-up Language", isCorrect:false},
    {text:"Hyper Text Mark-up Language", isCorrect:false},
    {text:"Hyper Text Mark-up Language", isCorrect:false},
    {text:"Hyper Text Mark-up Language", isCorrect:true}
]
},

{    q: "What does HTML stand for?",
     a: [{text:"Hyper Text Mark-up Language", isCorrect:true},
    {text:"Hyper Text Mark-up Language", isCorrect:true},
    {text:"Hyper Text Mark-up Language", isCorrect:false},
    {text:"Hyper Text Mark-up Language", isCorrect:false}
]
}
]

let currentQuestion = 0;
let score = 0;

function loadQuestion (){
    const question = document.getElementById("ques")
    const option = document.getElementById("opt")

    question.textContent = questions[currentQuestion].q;

    option.innerHTML = " ";

    for(let i = 0; questions[currentQuestion].a.length; i++){
        const choicesContainer = document.createElement("div");
        const choice = document.createElement("input");
        const choicesLabel = document.createElement("label");
        
        choice.type = "radio";
        choice.name = "answer";
        choice.value = i;
 
        choicesLabel.textContent = Questions[currQuestion].a[i].text;
        choicesContainer.appendChild(choice);
        choicesContainer.appendChild(choicesLabel);
        option.appendChild(choicesdiv);
    } 
    }


function nextQuestion(){
    if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        loadQues();
    } else {
        document.getElementById("opt").remove()
        document.getElementById("ques").remove()
        document.getElementById("btn").remove()
        loadScore();
    }
}

function checkAnswer() {
    const selectedAns = parseInt(document.querySelector('input[name="answer"]:checked').value);
 
    if (Questions[currQuestion].a[selectedAns].isCorrect) {
        score++;
        console.log("Correct")
        nextQuestion();
    } else {
        nextQuestion();
    }
}