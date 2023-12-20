// models/quiz.js
const mongoose = require('mongoose');

const quizSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    questions: [
        {
            questionText: String,
            options: [String],
            correctOptionIndex: Number,
        },
    ],
    duration: {
        type: Number,
        required: true,
    },
});

const Quiz = mongoose.model('Quiz', quizSchema);

module.exports = {Quiz};
