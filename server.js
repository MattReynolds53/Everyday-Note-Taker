const express = require('express');
const fs = require('fs');
const path = require('path');
// const api = require('./public');
const uniqid = require('uniqid');
// Is this how to tap into the db.json file that the readme is talking about?
const notes = require('./db/db.json')



const app = express();
const PORT = process.env.PORT || 3001;


// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use('/api', api);
// The following line of code creates the route to the public folder which allows you to gain access to the routes when you enter /[enter route] into the url bar. Also, this allows you to put the routes in to app.get lines of code as '/[enter route]'
app.use(express.static('public'));

// GET route for notes.html page
app.get('/notes', (req, res) => 
    res.sendFile(path.join(__dirname, '/public/notes.html'))
);

// GET route for index.html page (from notes page)
app.get('*', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
);

//GET route for db.json file
app.get('/api/notes', (req, res) => 
    res.sendFile(path.join(__dirname, '/db/db.json'))
);

//

// Listen to PORT
app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);
