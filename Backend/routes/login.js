const express = require('express');
const loginController = require('../controller/login');
const loginRoute = express.Router()
loginRoute.post('/Login',loginController);
module.exports = loginRoute;