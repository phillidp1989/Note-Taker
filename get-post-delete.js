const fs = require("fs");
const path = require('path');

const jsonFolderPath = path.join(__dirname, "db");
const jsonFilePath = path.join(jsonFolderPath, "/db.json");

// Post notes callback function

const postNotes = (req, res) => {
    // Variable to hold new note object obtained from the body of the post request

    let newNote = req.body;

    // Initialise an empty array to push note objects into

    let notesArray = [];

    fs.readFile(jsonFilePath, (err, data) => {
        if (err) throw err;

        // Empty array populated with objects from the db.json file

        notesArray = (JSON.parse(data));

        // Assignment of id to new note object if it is a new note and push to notesArray

        if (newNote.id === undefined) {

            if (notesArray.length === 0) {
                newNote.id = 1;
            } else {
                newNote.id = notesArray[notesArray.length - 1].id + 1;
            }
            notesArray.push(newNote);

            // If the note is being edited, then the existing note will be updated with new title and text

        } else {
            for (let i = 0; i < notesArray.length; i++) {
                if (parseInt(newNote.id) === parseInt(notesArray[i].id)) {
                    notesArray[i] = newNote;
                }
            }
        }
        res.json(notesArray);

        // Write updated notesArray back to debugger.json file

        fs.writeFile(jsonFilePath, JSON.stringify(notesArray, null, 2), (err) => {
            if (err) throw err;
        });
    });
}

// Get notes callback function

const getNotes = (req, res) => {

    fs.readFile(jsonFilePath, (err, data) => {
        if (err) throw err;
        res.json(JSON.parse(data))
    });
}

// Delete note callback function

const deleteNotes = (req, res) => {
    // Convert id into a number

    let deletedNote = parseInt(req.params.id);
    let notesArray = [];

    fs.readFile(jsonFilePath, (err, data) => {
        if (err) throw err;
        notesArray = (JSON.parse(data));

        // Create new array with filter method to include only the notes with a different ID to the deleted note

        notesArray = notesArray.filter(note => {
            return parseInt(note.id) !== deletedNote;
        });

        res.json(notesArray);

        // Write update notesArray to db.json file

        fs.writeFile(jsonFilePath, JSON.stringify(notesArray, null, 2), (err) => {
            if (err) throw err;
        });
    })
}

module.exports = {
    postNotes,
    getNotes,
    deleteNotes
};
