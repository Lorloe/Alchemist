const express = require('express');
const router = express.Router();
const cors = require("cors");

const userRouter = require('./user');
const elementRouter = require('./element');
const courseRouter = require('./course');
const combinationRouter = require('./combination');

function route(app){
    app.use('/api/auth', userRouter);
    app.use('/api/element', elementRouter);
    app.use('/api/course', courseRouter);
    app.use('/api/combination',combinationRouter);
}

module.exports = route;