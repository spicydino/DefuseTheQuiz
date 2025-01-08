const express = require('express');
const { getQuiz } = require('../controller/quiz');  

const quizRouter = express.Router();


quizRouter.get('/', getQuiz);

module.exports = quizRouter;
