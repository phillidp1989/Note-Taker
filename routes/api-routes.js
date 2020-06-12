const { getNotes, postNotes, deleteNotes } = require("../get-post-delete");

module.exports = app => {    

app.get("/api/notes", getNotes);

app.post("/api/notes", postNotes);

app.delete("/api/notes/:id", deleteNotes);

};
