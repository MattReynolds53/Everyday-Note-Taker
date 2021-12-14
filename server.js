const express = require('express');
const path = require('path');
const api = require('./routes/index.js');
// const { clog } = require('./middleware/clog');
// const notes = require('./db/db.json');
// const { v4: uuidv4 } = require('uuid');
// Is this how to tap into the db.json file that the readme is talking about?


const app = express();
const PORT = process.env.PORT || 3101;
// app.use(clog);


// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use('/api', api);

// GET route for notes.html page
app.get('/notes', (req, res) => 
    res.sendFile(path.join(__dirname, '/public/notes.html'))
);


// GET route for index.html page (from notes page)
app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
);

// Create another GET route for uniqid in order to populate the note when you click on it. (All done in the notes-router)


// Delete route example is on activity 28 under the tips.js file

// Listen to PORT
app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);


// Notes: getting the information to show up on the left column is a get request. to get the notes information you enter saved is a post request. Use the pre-made front-end to hook into the left column to display the information from the db.json file after oyu save it to the db.json file