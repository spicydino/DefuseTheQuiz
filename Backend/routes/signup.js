const express = require('express');
const signupController = require('../controller/signup');
const signupRoute = express.Router();

signupRoute.post('/signup', signupController);

module.exports = signupRoute;
