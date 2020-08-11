function start() {
    var qus = document.getElementById('qus');
    qus.style.display = 'block'

    var intro = document.getElementById('intro');
    intro.style.display = 'none'
    var name = document.getElementById('name');

    var sName = document.getElementById("sName");
    sName.innerHTML = name.value
    startTime() 
}

function result(){
    var result = document.getElementById('result');
    result.style.display='block'

    var qus = document.getElementById('qus');
    qus.style.display = 'none'
}



var allQuestions = [{
    question: "What does HTML stand for?",
    answer: "Hypertext Markup Language",
    option: [
        "Hypertext Machine language",
        "Hypertext Markup Language",
        "Hightext machine language",
    ],
},
{
    question: "Which of the following characters indicate closing of a tag?",
    answer: "/",
    option: [
        "/",
        "!",
        ";",
    ],
},
{
    question: "What is the font-size of the h1 heading tag?",
    answer: "2 em",
    option: [
        "3.5 em",
        "1.5 em",
        "2 em",
    ],
},
{
    question: 'Which of the following attributes is used to add link to any element?',
    answer: "href",
    option: [
        "link",
        "href",
        "ref",
    ],

}];

function showQuestion(e) {
    var q = document.getElementById('hQ');
    q.innerHTML = allQuestions[e].question;

    var optionElement = document.getElementsByClassName('op');
    for (var i = 0; i < optionElement.length; i++) {
        optionElement[i].innerHTML = allQuestions[e].option[i]
    }
}

var qCount = 0;

function next(e) {
    qCount++;
    showQuestion(qCount)
    removeActive()

}

function activeOption(e) {
    removeActive()
    e.classList.add('active')
}

function removeActive() {
    var active = document.getElementsByClassName('active');
    for (var i = 0; active.length; i++) {
        active[i].classList.remove('active')
    }
}


var min = '00';
var sec = '00';
var msec = '00';
var minHeading = document.getElementById('min')
var secHeading = document.getElementById('sec')
var interval;

function timer() {
    msec++
    if (msec >= 100) {
        sec++
        secHeading.innerHTML = sec
        msec = '00';

    }
    else if (sec >= 60) {
        min++
        minHeading.innerHTML = min
        sec = '00'
    }
}
function startTime() {
    interval = setInterval(timer, 10)
}
