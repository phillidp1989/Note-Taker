const fs = require("fs");
const path = require('path');

const jsonFolderPath = path.join(__dirname, "db");
const jsonFilePath = path.join(jsonFolderPath, "/db.json");

const postNotes = (req, res) => {
    // Variable to hold new note object obtained from the body of the post request

    let newNote = req.body;

    // Initialise an empty array to push note objects into

    let notesArray = [];

    fs.readFile(jsonFilePath, (err, data) => {
        if (err) throw err;

        // Empty array populated with objects from the db.json file

        notesArray = (JSON.parse(data));

        // Assignment of id to new note object

        if (notesArray.length === 0) {
            newNote.id = 1;
        } else {
            newNote.id = notesArray.length + 1;
        }

        notesArray.push(newNote);
        res.json(notesArray);

        fs.writeFile(jsonFilePath, JSON.stringify(notesArray, null, 2), (err) => {
            if (err) throw err;
        });

    })

}

module.exports = postNotes;
