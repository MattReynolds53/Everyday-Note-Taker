const express = require('express');

// Import our modular routers for /apiRoute
const apiRouter = require('./apiRoute');

const app = express();

app.use('/apiRoute', apiRouter);

module.exports = app;
