const express = require("express");
const path = require('path');
const fs = require("fs");
const util = require("util");
const { getNotes, postNotes, deleteNotes } = require("./get-post-delete");

// Set paths for json file to read and write to

const jsonFolderPath = path.join(__dirname, "db");
const jsonFilePath = path.join(jsonFolderPath, "/db.json");

// Variable to hold instance of Express object

const app = express();

// Variable to hold local port or port of deployed site

const PORT = process.env.PORT || 3000;

// Setup Express to handle data parsing

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set static folder

app.use(express.static(path.join(__dirname, "public")));

// HTML route handling

app.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "/public", "notes.html"));
});

// API route handling

app.get("/api/notes", getNotes);

app.post("/api/notes", postNotes);

app.delete("/api/notes/:id", deleteNotes);

// Final HTML routes to direct users to the homepage

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "/public", "index.html"));
});


// Listening to port and console logging confirmation of port being listened to

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

