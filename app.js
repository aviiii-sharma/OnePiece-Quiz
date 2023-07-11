const questions = [{
    'que':"Who is the captain of the Straw Hat Pirates?",
    'a':"Tony Tony Chopper", 
    'b':"Monkey D. Luffy", 
    'c':"Roronoa Zoro", 
    'd':"Vinsmoke Sanji",
    'correct' :"b", 
    },{
    'que':"Which character is known as the 'King of the Pirates' in One Piece",
    'a':"Gol D. Roger", 
    'b':"Shanks", 
    'c':"Big Mom", 
    'd':"Whitebeard",
    'correct' :"a", 
    },{
    'que':"Who is the captain of the Revolutionary Army in One Piece?",
    'a':"Sabo", 
    'b':"Ivankov", 
    'c':"Koala", 
    'd':"Dragon",
    'correct' :"d", 
    },{
    'que':"Who is the captain of the Heart Pirates and possesses the 'Ope Ope no Mi' Devil Fruit power?",
    'a':"Eustass Kid", 
    'b':"Trafalgar D. Water Law", 
    'c':"Basil Hawkins", 
    'd':"X Drake",
    'correct' :"b",
    },{
    'que':"Which is the rarest type of 'Haki' in One Piece",
    'a':"Conqueror's Haki", 
    'b':"Armament Haki", 
    'c':"Observation Haki", 
    'd':"Advanced Armament Haki",
    'correct' :"a", 
    }
]

const answers = [{
    'result1':"Sugoii!!",
    'result2':"Give it Another Shot!!",
}]

let resultIndex = 0;
const result = answers[resultIndex];

let index = 0;
const queBox = document.getElementById("queBox");
const opts = document.querySelectorAll('.options');
var right = 0,
    wrong = 0;
let total = questions.length;
const loadQuestion = () => {
    if(index === total){
        return endQuiz();
    } else {
        reset();
    }
    const data = questions[index]
    queBox.innerText = `${index + 1}) ${data.que}`;
    queNum.innerText = `${index + 1}`;
    queLast.innerText = `${total}`;
    opts[0].nextElementSibling.innerText = data.a;
    opts[1].nextElementSibling.innerText = data.b;
    opts[2].nextElementSibling.innerText = data.c;
    opts[3].nextElementSibling.innerText = data.d;
}

const submitQuiz = () => {
    const data = questions[index];  
    const ans = getAnswer()
    if (ans === data.correct){
        right++;
    } else {
        wrong++;
    }
    index++;
    loadQuestion();
    return;
}

const getAnswer = () => {
    let answer;
    opts.forEach( 
        (input) => {
            if (input.checked){
                answer = input.value;
            }
        }
    )
    return answer;
}

const reset = () => {
    opts.forEach((input) => {
        input.checked = false;
    })
}

const endQuiz = () => {
    var beforeResult = document.getElementById("beforeResult");
    beforeResult.style.display = "none";
    var afterResult = document.getElementById("afterResult");
    afterResult.style.display = "flex";
    finalMessage();
    scorePts.innerText = `${right}`;
    totalPts.innerText = `${total}`;
}

document.getElementById("restart").addEventListener("click", function() {
    location.reload();
})

var buttons = document.getElementsByClassName("rowBtn");
for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function() {
    var radioButton = this.querySelector('input[type="radio"]');
    radioButton.click();
  });
}

var radioInputs = document.querySelectorAll('.rowBtn input[type="radio"]');
var skipButton = document.getElementById("skipSubmit");

for (var i = 0; i < radioInputs.length; i++) {
  radioInputs[i].addEventListener("click", function() {
    skipButton.innerText = "Submit";
  });
}
skipButton.addEventListener("click", function() {
    skipButton.innerText = "Skip";
});

const finalMessage = () => {
    if (`${right}` > 2) {
        message.innerText = `${result.result1}`;
    } else {
        message.innerText = `${result.result2}`;
    }
}

var quizStart = document.getElementById("quizStart");
document.getElementById("begin").addEventListener("click", function() {
    quizStart.style.display = "none";
    beforeResult.style.display = "flex";
})

loadQuestion();
