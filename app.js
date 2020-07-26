
var myQuestions = [{
    question: "What does HTML stand for?",
    answer: {
        a: "Hypertext Machine language",
        b: "Hypertext Markup Language.",
        c: "Hightext machine language.",
    },
    correctAnswer: "b",
},
{
    question: "Which of the following characters indicate closing of a tag?",
    answer: {
        a: "/",
        b: "!",
        c: ";",
    },
    correctAnswer: "a",
},
{
    question: "What is the font-size of the h1 heading tag?",
    answer: {
        a: "3.5 em",
        b: "1.5 em",
        c: "2 em",
    },
    correctAnswer: "c",
},
{
    question: 'Which of the following attributes is used to add link to any element?',
    answer: {
        a: "link",
        b: "href",
        c: "ref",
    },
    correctAnswer: "b",
}];


var questions = document.getElementById('question');
var answers = document.getElementById('answerList');

var i = 0;
var length1 = myQuestions.length;
var correctAnswer = 0;

function nextButton() {
    var intro = document.getElementById('intro');
    intro.style.display = 'none'
    var next = document.getElementById('next');
    next.style.display="block"
    if (i > myQuestions.length) {
        i = 0;
    }
    populateQuestion(i);
    i++;
};

function populateQuestion() {
    var allQuestion = myQuestions[i];
    questions.innerText = allQuestion.question;

    answers.innerHTML = ""; //reset answer list
    for (key in allQuestion.  answer) {
        var radioBtnName = "question" + i + "_answer";
        var answerText =allQuestion.  answer[key];
        answers.appendChild(createLi(radioBtnName, answerText));
    }
}

function createLi(name, answerText) {
    var li = document.createElement('li');
    var radioHtml = '<input type="radio"  name= "  ' + name + '"';
    radioHtml += '/>';
    radioHtml += answerText;
    li.innerHTML = radioHtml;
    return li;
}
