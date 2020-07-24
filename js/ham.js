// select all elements
const start = document.getElementById("start");
const quiz = document.getElementById("quiz");
const question = document.getElementById("question");
const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");
const choiceD = document.getElementById("D");
const choiceE = document.getElementById("E");
const progress = document.getElementById("progress");
const scoreDiv = document.getElementById("scoreContainer");

// create our questions
let questions = [{
        question: '1.INSOMNIA-Initial (Difficulty in falling asleep)',
        choiceA: '0.Absent',
        choiceB: '1.Occasional',
        choiceC: '2.Frequent',
        correct1: "B",
        correct2: "C"
    },
    {
        question: '2.INSOMNIA-Middle (Complains of being restless and disturbed during the night. Walking during the night.)',
        choiceA: '0.Absent',
        choiceB: '1.Occasional',
        choiceC: '2.Frequent',
        correct1: "B",
        correct2: "C"
    },
    {
        question: '3.INSOMNIA-Delayed (Walking in early hours of the morning and  unable to fall asleep again)',
        choiceA: '0.Absent',
        choiceB: '1.Occasional',
        choiceC: '2.Frequent',
        correct1: "B",
        correct2: "C"
    },
    {
        question: '4.AGITATION (Restlessness associated with anxiety.)',
        choiceA: '0.Absent',
        choiceB: '1.Occasional',
        choiceC: '2.Frequent',
        correct1: "B",
        correct2: "C"
    },
    {
        question: '5.SOMATIC SYMPTOMS-GASTROINTESTINAL (Loss of appetite, heavy feeling in abdomen,constipation)',
        choiceA: '0.Absent',
        choiceB: '1.Mild',
        choiceC: '2.Severe',
        correct1: "B",
        correct2: "C"
    },
    {
        question: '6.SOMATIC SYMPTOMS-GENERAL (Heaviness in limbs, back or head; diffuse backache; loss of energy and fatiguability)',
        choiceA: '0.Absent',
        choiceB: '1.Mild',
        choiceC: '2.Severe',
        correct1: "B",
        correct2: "C"
    },
    {
        question: '7.GENITAL SYMPTOMS(Loss of libido,menstrual disturbances)',
        choiceA: '0.Absent',
        choiceB: '1.Mild',
        choiceC: '2.Severe',
        correct1: "B",
        correct2: "C"
    },
    {
        question: '8.WEIGHT LOSS',
        choiceA: '0.No Weight loss',
        choiceB: '1.Slight',
        choiceC: '2.Obvious or severe',
        correct1: "B",
        correct2: "C"
    },
    {
        question: '9.INSIGHT (Insight must be interpreted in terms of patients understanding and background)',
        choiceA: '0.No loss',
        choiceB: '1.Partial or doubtfull loss',
        choiceC: '2.Loss of insight',
        correct1: "B",
        correct2: "C"
    },
    {
        question: '10.DEPRESSED MOOD (Gloomy attitude, pessimism about the future, feeling of sadness, tendency to weep)',
        choiceA: '0.Absent',
        choiceB: '1.Sadness, etc.',
        choiceC: '2.Occasional weeping',
        choiceD: '3.Frequent weeping',
        choiceE: '4.Extreme symptoms',
        correct1: "B",
        correct2: "C",
        correct3: "D",
        correct4: "E"
    },
    {
        question: '11.FEELINGS OF GUILT',
        choiceA: '0.Absent',
        choiceB: '1.Self-reproach,feels he/she has let people down',
        choiceC: '2.Ideas of guilt',
        choiceD: '3.Present illness is a punishment; delusions of guilt',
        choiceE: '4.Hallucinations of guilt',
        correct1: "B",
        correct2: "C",
        correct3: "D",
        correct4: "E"
    },
    {
        question: '12.SUICIDE',
        choiceA: '0.Absent',
        choiceB: '1.Feels life is not worth living',
        choiceC: '2.Wishes he/she were dead',
        choiceD: '3.Suicidal ideas or gestures',
        choiceE: '4.Attempts at suicide',
        correct1: "B",
        correct2: "C",
        correct3: "D",
        correct4: "E"
    },
    {
        question: '13.WORK AND INTERESTS',
        choiceA: '0.No difficulty',
        choiceB: '1.Feelings of incapacity, listlessness, indecision and vacillation',
        choiceC: '2.Loss of interest in hobbies, decreased social activites',
        choiceD: '3.Productivity decreased',
        choiceE: '4.Unable to Work.Stopped Working because of present illness only',
        correct1: "B",
        correct2: "C",
        correct3: "D",
        correct4: "E"
    },
    {
        question: '14.RETARDATION (Slowness of thought, speech, and activity; apathy; stupor)',
        choiceA: '0.Absent',
        choiceB: '1.Slight retardation at interview',
        choiceC: '2.Obvious retardation at interview',
        choiceD: '3.Interview difficult',
        choiceE: '4.Complete stupor',
        correct1: "B",
        correct2: "C",
        correct3: "D",
        correct4: "E"
    },
    {
        question: '15.ANXIETY-PSYCHIC',
        choiceA: '0.No difficulty',
        choiceB: '1.Tension and irritability',
        choiceC: '2.Worrying about minor matters',
        choiceD: '3.Apprehensive attitude',
        choiceE: '4.Fears',
        correct1: "B",
        correct2: "C",
        correct3: "D",
        correct4: "E"
    },
    {
        question: '16.ANXIETY-SOMATIC (Gastrointestinal, indigestion, Cardiovascular, palpitation, Headaches, Respiratory, Genito-urinary,etc.)',
        choiceA: '0.Absent',
        choiceB: '1.Mild',
        choiceC: '2.Moderate',
        choiceD: '3.Severe',
        choiceE: '4.Incapacitating',
        correct1: "B",
        correct2: "C",
        correct3: "D",
        correct4: "E"
    },
    {
        question: '17.HYPOCHONDRIASIS',
        choiceA: '0.Not present',
        choiceB: '1.Self-absorption(bodily)',
        choiceC: '2.Preoccupation with health',
        choiceD: '3.Querulous attitude',
        choiceE: '4.Hypochondriacal delusions',
        correct1: "B",
        correct2: "C",
        correct3: "D",
        correct4: "E"
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
    var x = document.getElementById("D");
    var y = document.getElementById("E");

    if (runningQuestion < 9) {
        question.innerHTML = "<p>" + q.question + "</p>";
        choiceA.innerHTML = q.choiceA;
        choiceB.innerHTML = q.choiceB;
        choiceC.innerHTML = q.choiceC;
        x.style.display = "none";
        y.style.display = "none";
    } else {
        question.innerHTML = "<p>" + q.question + "</p>";
        choiceA.innerHTML = q.choiceA;
        choiceB.innerHTML = q.choiceB;
        choiceC.innerHTML = q.choiceC;
        x.style.display = "block";
        y.style.display = "block";
        choiceD.innerHTML = q.choiceD;
        choiceE.innerHTML = q.choiceE;
    }

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
    if (answer == questions[runningQuestion].correct1) {
        // answer is correct
        score += 1;
        // change progress color to green
        answerIsCorrect();
    } else if (answer == questions[runningQuestion].correct2) {
        score += 2;
        answerIsCorrect();

    } else if (answer == questions[runningQuestion].correct3) {
        score += 3;
        answerIsCorrect();

    } else if (answer == questions[runningQuestion].correct4) {
        score += 4;
        answerIsCorrect();
    } else {
        // answer is wrong
        answerIsCorrect();
    }
    count = 0;
    if (runningQuestion < lastQuestion) {
        runningQuestion++;
        renderQuestion();
    } else {
        scoreRender();
    }
}

// answer is correct
function answerIsCorrect() {
    document.getElementById(runningQuestion).style.backgroundColor = "#0f0";
}

function scoreRender() {
    scoreDiv.style.display = "block";
    if (score >= 0 && score < 8) {
        scoreDiv.innerHTML = '<a href="method.html"><img src="22.png"></a>';
        scoreDiv.innerHTML += '<br><h3><font color="green">No Need To Worry<br> These Ups and Downs are Normal</font><br>click the Doctor to go back';
    } else if (score >= 8 && score < 14) {
        scoreDiv.innerHTML = '<a href="method.html"><img src="22.png"></a>';
        scoreDiv.innerHTML += '<br><h3><font color="#90ee90">Mild Depression</font><br>click the Doctor to go back';
    } else if (score >= 14 && score < 19) {
        scoreDiv.innerHTML = '<a href="method.html"><img src="22.png"></a>';
        scoreDiv.innerHTML += '<br><h3><font color="yellow">Moderate Depression Level</font><br>click the Doctor to go back';
    } else if (score >= 19 && score < 23) {
        scoreDiv.innerHTML = '<a href="method.html"><img src="22.png"></a>';
        scoreDiv.innerHTML += '<br><h3><font color="#ff726f">Severe Level Of Depression</font><br>click the Doctor to go back';
    } else {
        scoreDiv.innerHTML = '<a href="method.html"><img src="22.png"></a>';
        scoreDiv.innerHTML += '<br><h3><font color="red">Very Severe Depression</font><br>click the Doctor to go back';
    }
}