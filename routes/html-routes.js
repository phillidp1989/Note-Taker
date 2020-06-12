const express = require("express");
const path = require("path");

module.exports = app => {

// Set static folder

app.use(express.static(path.join(__dirname, "../public")));

// HTML route handling

app.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "../public", "notes.html"));
});


// Final HTML routes to direct users to the homepage

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../public", "index.html"));
});

}