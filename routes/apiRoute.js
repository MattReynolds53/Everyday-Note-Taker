const apiRoute = require('express').Router();
const { v4: uuidv4 } = require('uuid');
const { readAndAppend, readFromFile, writeToFile } = require('../helpers/fsUtils');

apiRoute.get("/", (req, res) => {
    readFromFile("./db/db.json")
    .then((data) => res.json(JSON.parse(data)));
  });

// POST request 
apiRoute.post('/', (req, res) => {
  
    const { title, text, id } = req.body;

    if (req.body) {
      
      const newNote = {
        title,
        text,
        id: uuidv4(),
      };
  
      readAndAppend(newNote, './db/db.json');
      res.json(newNote);
    } else {
      res.json('Error in posting feedback');
    }
  });

apiRoute.get('/:id', (req, res) => {
    const noteID = req.params.id;
    readFromFile("./db/db.json")
    .then((data) => res.json(JSON.parse(data)));
});

apiRoute.delete('/:id',  (req, res) => {
    const noteID = req.params.id;
    console.log(req.params)
    console.log(noteID, "noteid")
    let parsedNotes;
  readFromFile('./db/db.json')
    .then((data) => { return parsedNotes = JSON.parse(data)

    }
    )
    .then((json) => {
      const result = json.filter((note) => note.id !== noteID);
      console.log(noteID, "Note");
      console.log(result, "Result");
      writeToFile('./db/db.json', result);

      readFromFile("./db/db.json")
      .then((data) => res.json(JSON.parse(data)));
    });
    
})



module.exports = apiRoute;