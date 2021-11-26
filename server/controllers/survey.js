/*Diego Poblete #301158204, COMP 229, Section 008*/

const { render } = require('ejs');

let Survey = require('../models/survey');
let Question = require('../models/question');
let Option = require('../models/option');

// Survey list

module.exports.displaySurveyList = function(req, res, next) {
    let userId = req.user.id;

    Survey.find({userId: userId}, (err, surveyList) => {
        if (err)
        {
            return console.error(err);
        }
        else
        {
            res.render('createsurvey/list', {
                title: "Survey List",
                surveys: surveyList,
                displayName: req.user ? req.user.displayName:''
            });
        }
    });
}

// Survey object

module.exports.displaySurveyAdd = function(req, res, next) {
    let newSurvey = Survey();

    res.render('createsurvey/add_edit', {
        title: 'Create a new survey',
        survey: newSurvey
    });
}

module.exports.saveSurveyAdd = function(req, res, next) {
    console.log(req.user.id);
    let newSurvey = Survey({
        _id: req.body.id,
        userId: req.user.id,
        title: req.body.surveyTitle,
        startDate: req.body.startDate,
        endDate: req.body.endDate,
        description: req.body.description
    });

    let questions = req.body.questions;

    Survey.create(newSurvey, (err, Survey) => {
        if (err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            if (questions != 0) {
                for (let i = 0; i < questions; i++){
                    processQuestion(req, res, next, i);
                }
            }
            res.redirect('/survey-list');
        }
    });
}

module.exports.displaySurveyEdit = function(req, res, next) {
    let id = req.params.id;

    Survey.findById(id, (err, surveyToEdit) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            res.render('createsurvey/add_edit', {
                title: 'Edit Survey', 
                survey: surveyToEdit
            })
        }
    });
}

module.exports.saveSurveyEdit = function(req, res, next) {

}

// Question object

displayQuestion = function() {

}

processQuestion = function(req, res, next, questionNumber) {
    let newQuestion = Question({
        _id: req.body.qid[questionNumber],
        surveyId: req.body.sid,
        question: req.body.question[questionNumber]
    });

    let options = req.body.options[questionNumber];

    Question.create(newQuestion, (err, Question) => {
        if (err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            if (options[questionNumber] != 0) {
                for (let i = 0; i < options; i++){
                    processOption(req, res, next, questionNumber, i);
                }
            }
        }
    });
}

// Option object

displayOption = function() {

}

processOption = function (req, res, next, questionNumber, optionNumber) {
    let newOption = Option({
        _id: req.body.oid[questionNumber][optionNumber],
        questionId: req.body.qid[questionNumber],
        option: req.body.option[questionNumber][optionNumber]
    })


}