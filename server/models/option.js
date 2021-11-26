/*Diego Poblete #301158204, COMP 229, Section 008*/

let mongoose = require('mongoose');

let optionModel = mongoose.Schema(
    {
        questionId: String,
        option: String
    },
    {
        collection: "option"
    }
);

module.exports = mongoose.model('Option', optionModel);