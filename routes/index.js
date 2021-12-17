const express = require('express');

// Import our modular routers for /apiRoute
const apiRouter = require('./apiRoute');

const app = express();

app.use('/notes', apiRouter);

module.exports = app;
