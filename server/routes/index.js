const express = require('express');
const router = express.Router();
const cors = require("cors");

const userRouter = require('./user');
const elementRouter = require('./element');
const lessonRouter = require('./lesson');

function route(app){
    app.use('/api/auth', userRouter);
    app.use('/api/element', elementRouter);
    app.use('/api/lesson', lessonRouter);
}

module.exports = route;