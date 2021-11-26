/*Diego Poblete #301158204, COMP 229, Section 008*/

var questions = 0;
var options = [];

function createQuestion() {
    document.getElementById("questionHolder").innerHTML +=
    `<fieldset>
        <h4>Question ${questions + 1}</h4>
        <input type="text" id="q_${questions}">
        <fieldset id="o_${questions}"></fieldset>
        <input type="button" onClick="createOption(${questions})" value="New Option">
    </fieldset>`
    ;

    options[questions] = 0;
    questions += 1;
}

function createOption(questionNumber) {
    document.getElementById("o_" + questionNumber).innerHTML +=
    `<h5>Option ${options[questionNumber] + 1}<h5>
    <input type="text" id="o_${questionNumber}_${options[questionNumber]}">`
    ;

    options[questionNumber] += 1;
}
