const start = document.getElementById("start");
const quiz = document.getElementById("quiz");
const question = document.getElementById("question");
const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");
const choiceD = document.getElementById("D");
const progress = document.getElementById("progress");
const scoreDiv = document.getElementById("scoreContainer");

// create our questions
let questions = [{
        question: 'Q1',
        choiceA: '0.I do not feel sad.',
        choiceB: '1.I feel sad',
        choiceC: "2.I am sad all the time and I can't snap out of it.",
        choiceD: "3.I am so sad and unhappy that I can't stand it.",
        correct1: "B",
        correct2: "C",
        correct3: "D"
    },
    {
        question: 'Q2',
        choiceA: '0.I am not particularly discouraged about the future.',
        choiceB: '1.I feel discouraged about the future.',
        choiceC: '2.I feel I have nothing to look forward to.',
        choiceD: "3.I feel the future is hopeless and that things cannot improve.",
        correct1: "B",
        correct2: "C",
        correct3: "D"
    },
    {
        question: 'Q3',
        choiceA: '0.I do not feel like a failure.',
        choiceB: '1.I feel I have failed more than the average person.',
        choiceC: '2.As I look back on my life, all I can see is a lot of failures.',
        choiceD: "3.I feel I am a complete failure as a person.",
        correct1: "B",
        correct2: "C",
        correct3: "D"
    },
    {
        question: 'Q4',
        choiceA: '0.I get as much satisfaction out of things as I used to.',
        choiceB: "1.I don't enjoy things the way I used to.",
        choiceC: "2.I don't get real satisfaction out of anything anymore.",
        choiceD: "3.I am dissatisfied or bored with everything.",
        correct1: "B",
        correct2: "C",
        correct3: "D"
    },
    {
        question: 'Q5',
        choiceA: "0.I don't feel particularly guilty.",
        choiceB: '1.I feel guilty a good part of the time.',
        choiceC: '2.I feel quite guilty most of the time.',
        choiceD: "3.I feel guilty all of the time.",
        correct1: "B",
        correct2: "C",
        correct3: "D"
    },
    {
        question: 'Q6',
        choiceA: "0.I don't feel I am being punished.",
        choiceB: '1.I feel I may be punished.',
        choiceC: '2.I expect to be punished.',
        choiceD: "3.I feel I am being punished.",
        correct1: "B",
        correct2: "C",
        correct3: "D"
    },
    {
        question: 'Q7',
        choiceA: "0.I don't feel disappointed in myself.",
        choiceB: '1.I am disappointed in myself.',
        choiceC: '2.I am disgusted with myself.',
        choiceD: "3.I hate myself.",
        correct1: "B",
        correct2: "C",
        correct3: "D"
    },
    {
        question: 'Q8',
        choiceA: "0.I don't feel I am any worse than anybody else.",
        choiceB: '1.I am critical of myself for my weaknesses or mistakes.',
        choiceC: '2.I blame myself all the time for my faults.',
        choiceD: "3.I blame myself for everything bad that happens.",
        correct1: "B",
        correct2: "C",
        correct3: "D"
    },
    {
        question: 'Q9',
        choiceA: "0.I don't have any thoughts of killing myself.",
        choiceB: '1.I have thoughts of killing myself, but I would not carry them out.',
        choiceC: '2.I would like to kill myself.',
        choiceD: "3.I would kill myself if I had the chance.",
        correct1: "B",
        correct2: "C",
        correct3: "D"
    },
    {
        question: 'Q10',
        choiceA: "0.I don't cry any more than usual.",
        choiceB: '1.I cry more now than I used to.',
        choiceC: '2.I cry all the time now.',
        choiceD: "3.I used to be able to cry, but now I can't cry even though I want to.",
        correct1: "B",
        correct2: "C",
        correct3: "D"
    },
    {
        question: 'Q11',
        choiceA: "0.I am no more irritated by things than I ever was.",
        choiceB: "1.I am slightly more irritated now than usual.",
        choiceC: '2.I am quite annoyed or irritated a good deal of the time.',
        choiceD: '3.I feel irritated all the time.',
        correct1: "B",
        correct2: "C",
        correct3: "D"
    },
    {
        question: 'Q12',
        choiceA: '0.I have not lost interest in other people.',
        choiceB: '1.I am less interested in other people than I used to be.',
        choiceC: '2.I have lost most of my interest in other people.',
        choiceD: '3.I have lost all of my interest in other people.',
        correct1: "B",
        correct2: "C",
        correct3: "D"
    },
    {
        question: 'Q13',
        choiceA: '0.I make decisions about as well as I ever could.',
        choiceB: '1.I put off making decisions more than I used to.',
        choiceC: '2.I have greater difficulty in making decisions more than I used to.',
        choiceD: "3.I can't make decisions at all anymore.",
        correct1: "B",
        correct2: "C",
        correct3: "D"
    },
    {
        question: 'Q14',
        choiceA: "0.I don't feel that I look any worse than I used to.",
        choiceB: '1.I am worried that I am looking old or unattractive.',
        choiceC: '2.I feel there are permanent changes in my appearance that make me look unattractive.',
        choiceD: '3.I believe that I look ugly.',
        correct1: "B",
        correct2: "C",
        correct3: "D"
    },
    {
        question: 'Q15',
        choiceA: '0.I can work about as well as before.',
        choiceB: '1.It takes an extra effort to get started at doing something.',
        choiceC: '2.I have to push myself very hard to do anything.',
        choiceD: "3.I can't do any work at all.",
        correct1: "B",
        correct2: "C",
        correct3: "D"
    },
    {
        question: 'Q16',
        choiceA: '0.I can sleep as well as usual.',
        choiceB: "1.I don't sleep as well as I used to.",
        choiceC: '2.I wake up 1-2 hours earlier than usual and find it hard to get back to sleep.',
        choiceD: '3.I wake up several hours earlier than I used to and cannot get back to sleep.',
        correct1: "B",
        correct2: "C",
        correct3: "D"
    },
    {
        question: 'Q17',
        choiceA: "0.I don't get more tired than usual.",
        choiceB: '1.I get tired more easily than I used to.',
        choiceC: '2.I get tired from doing almost anything.',
        choiceD: '3.I am too tired to do anything.',
        correct1: "B",
        correct2: "C",
        correct3: "D"
    },
    {
        question: 'Q18',
        choiceA: "0.My appetite is no worse than usual.",
        choiceB: '1.My appetite is not as good as it used to be.',
        choiceC: '2.My appetite is much worse now.',
        choiceD: '3.I have no appetite at all anymore.',
        correct1: "B",
        correct2: "C",
        correct3: "D"
    },
    {
        question: 'Q19',
        choiceA: "0.I haven't lost much weight, if any, lately.",
        choiceB: '1.I have lost more than five pounds.',
        choiceC: '2.I have lost more than ten pounds.',
        choiceD: '3.I have lost more than fifteen pounds.',
        correct1: "B",
        correct2: "C",
        correct3: "D"
    },
    {
        question: 'Q20',
        choiceA: "0.I am no more worried about my health than usual.",
        choiceB: '1.I am worried about physical problems like aches, pains, upset stomach, or constipation.',
        choiceC: "2.I am very worried about physical problems and it's hard to think of much else.",
        choiceD: '3.I am so worried about my physical problems that I cannot think of anything else.',
        correct1: "B",
        correct2: "C",
        correct3: "D"
    },
    {
        question: 'Q21',
        choiceA: "0.I have not noticed any recent change in my interest in sex.",
        choiceB: '1.I am less interested in sex than I used to be.',
        choiceC: '2.I have almost no interest in sex.',
        choiceD: '3.I have lost interest in sex completely.',
        correct1: "B",
        correct2: "C",
        correct3: "D"
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
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
    choiceD.innerHTML = q.choiceD;

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
    if (score >= 0 && score < 11) {
        scoreDiv.innerHTML = '<a href="method.html"><img src="22.png"></a>';
        scoreDiv.innerHTML += '<br><h3><font color="green">No Need To Worry<br> These Ups and Downs are Normal</font><br>click the Doctor to go back';
    } else if (score >= 11 && score < 17) {
        scoreDiv.innerHTML = '<a href="method.html"><img src="22.png"></a>';
        scoreDiv.innerHTML += '<br><h3><font color="#90ee90">Mild Mood Disturbances</font><br>click the Doctor to go back';
    } else if (score >= 17 && score < 21) {
        scoreDiv.innerHTML = '<a href="method.html"><img src="22.png"></a>';
        scoreDiv.innerHTML += '<br><h3><font color="yellow">Borderline Clinical Depression</font><br>click the Doctor to go back';
    } else if (score >= 21 && score < 31) {
        scoreDiv.innerHTML = '<a href="method.html"><img src="22.png"></a>';
        scoreDiv.innerHTML += '<br><h3><font color="#9b870c">Moderate Depression Level</font><br>click the Doctor to go back';
    } else if (score >= 31 && score < 41) {
        scoreDiv.innerHTML = '<a href="method.html"><img src="22.png"></a>';
        scoreDiv.innerHTML += '<br><h3><font color="#ff726f">Severe Level Of Depression</font><br>click the Doctor to go back';
    } else {
        scoreDiv.innerHTML = '<a href="method.html"><img src="22.png"></a>';
        scoreDiv.innerHTML += '<br><h3><font color="red">Extremely Depressed</font><br>click the Doctor to go back';
    }
}