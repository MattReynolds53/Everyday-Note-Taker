const apiRoute = require('express').Router();
const { v4: uuidv4 } = require('uuid');
const { readAndAppend, readFromFile } = require('../helpers/fsUtils');

 //Should be one get, one post, and one delete



apiRoute.get("/", (req, res) => {
    readFromFile("./db/db.json")
    .then((data) => res.json(JSON.parse(data)));
  });

// POST request 
apiRoute.post('/', (req, res) => {
  
    const { title, text, notesID } = req.body;

    if (req.body) {
      
      const newNote = {
        title,
        text,
        notesID: uuidv4(),
      };
  
      readAndAppend(newNote, './db/db.json');
      res.json(notes);
    } else {
      res.json('Error in posting feedback');
    }
  });


//GET route for db.json file
// apiRoute.get('/', (req, res) => 
//     res.sendFile(path.join(__dirname, './db/db.json'));
// );

// apiRoute.get('/', (req, res) =>
//   readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)))
// );


module.exports = apiRoute;