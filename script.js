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
    console.log(question.)
}