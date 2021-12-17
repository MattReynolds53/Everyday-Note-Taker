const apiRoute = require('express').Router();
const { v4: uuidv4 } = require('uuid');
const { readAndAppend, readFromFile, writeToFile } = require('../helpers/fsUtils');

 //Should be one get, one post, and one delete



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
      res.json(notes);
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
      // Make a new array of all tips except the one with the ID provided in the URL
      const result = json.filter((note) => note.id !== noteID);
      console.log(noteID, "Note");
      console.log(result, "Result");
      // Save that array to the filesystem
      writeToFile('./db/db.json', result);

      readFromFile("./db/db.json")
      .then((data) => res.json(JSON.parse(data)));

      // Respond to the DELETE request
    //   res.json(`Item ${noteId} has been deleted 🗑️`);
    });
    
})


//GET route for db.json file
// apiRoute.get('/', (req, res) => 
//     res.sendFile(path.join(__dirname, './db/db.json'));
// );

// apiRoute.get('/', (req, res) =>
//   readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)))
// );


module.exports = apiRoute;