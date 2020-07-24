// select all elements
const start = document.getElementById("start");
const quiz = document.getElementById("quiz");
const question = document.getElementById("question");
const choiceA = document.getElementById("A");
const choiceP = document.getElementById("P");
const progress = document.getElementById("progress");
const scoreDiv = document.getElementById("scoreContainer");

// create our questions
let questions = [{
        question: '1.Depressed mood most of the day, nearly every day ?',
        choiceA: 'Symptoms Absent',
        choiceP: 'Symptoms Present',
        correct: "P"
    },
    {
        question: '2.Markedly diminished interest or pleasure in all, or almost all, activities most of the day, nearly every day ?',
        choiceA: 'Symptoms Absent',
        choiceP: 'Symptoms Present',
        correct: "P"
    },
    {
        question: '3.Significant weight loss when not dieting or weight gain, or decrease or increase in appetite nearly every day ?',
        choiceA: 'Symptoms Absent',
        choiceP: 'Symptoms Present',
        correct: "P"
    },
    {
        question: '4.A slowing down of thought and a reduction of physical movement (observable by others, not merely subjective feelings of restlessness or being slowed down) ?',
        choiceA: 'Symptoms Absent',
        choiceP: 'Symptoms Present',
        correct: "P"
    },
    {
        question: '5.Fatigue or loss of energy nearly every day ?',
        choiceA: 'Symptoms Absent',
        choiceP: 'Symptoms Present',
        correct: "P"
    },
    {
        question: '6.Insomnia or Hypersomnia nearly everyday ?',
        choiceA: 'Symptoms Absent',
        choiceP: 'Symptoms Present',
        correct: "P"
    },
    {
        question: '7.Feelings of worthlessness or excessive or inappropriate guilt nearly every day ?',
        choiceA: 'Symptoms Absent',
        choiceP: 'Symptoms Present',
        correct: "P"
    },
    {
        question: '8.Diminished ability to think or concentrate, or indecisiveness, nearly every day ?',
        choiceA: 'Symptoms Absent',
        choiceP: 'Symptoms Present',
        correct: "P"
    },
    {
        question: '9.Recurrent thoughts of death, recurrent suicidal ideation without a specific plan, or a suicide attempt or a specific plan for committing suicide ?',
        choiceA: 'Symptoms Absent',
        choiceP: 'Symptoms Present',
        correct: "P"
    }
];
// create some variables

const lastQuestion = questions.length - 1;
let runningQuestion = 0;
let count = 0;
let score = 0;

// render a question
function renderQuestion() {
    let q = questions[runningQuestion];

    question.innerHTML = "<p>" + q.question + "</p>";
    choiceA.innerHTML = q.choiceA;
    choiceA.innerHTML = q.choiceA;
    choiceP.innerHTML = q.choiceP;
}

start.addEventListener("click", startQuiz);

// start quiz
function startQuiz() {
    start.style.display = "none";
    renderQuestion();
    quiz.style.display = "block";
    renderProgress();
}

// render progress
function renderProgress() {
    for (let qIndex = 0; qIndex <= lastQuestion; qIndex++) {
        progress.innerHTML += "<div class='prog' id=" + qIndex + "></div>";
    }
}

// checkAnwer

function checkAnswer(answer) {
    if (answer == questions[runningQuestion].correct) {
        // answer is correct
        score++;
        // change progress color to green
        answerIsCorrect();
    } else {
        // answer is wrong
        // change progress color to red
        answerIsCorrect();
    }
    count = 0;
    if (runningQuestion < lastQuestion) {
        runningQuestion++;
        renderQuestion();
    } else {
        // end the quiz and show the score
        scoreRender();
    }
}

// answer is correct
function answerIsCorrect() {
    document.getElementById(runningQuestion).style.backgroundColor = "#0f0";
}

function scoreRender() {
    scoreDiv.style.display = "block";
    if (score > 4) {
        scoreDiv.innerHTML = '<a href="method.html"><img src="22.png"></a>';
        scoreDiv.innerHTML += '<h3>Symptoms of Depression might be present<br>click the doctor for futhur diagonistic checkups.</h3>';

    } else {
        scoreDiv.innerHTML = '<br><a href="login.html"><img src="r1.png"</a>';
        scoreDiv.innerHTML += '<h3> No Sign of Depression</h3>';
    }
}