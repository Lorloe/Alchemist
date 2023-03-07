const express = require("express");
const userRouter = require('./user');
const elementRouter = require('./element');


const route = (app) => {
  app.use("/api/auth", userRouter);
  app.use("/api/element", elementRouter);
};

module.exports = route;