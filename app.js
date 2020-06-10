const express = require("express");
const path = require('path');
const fs = require("fs");

// Variable to hold instance of Express object

const app = express();

// Variable to hold local port or port of deployed site

const PORT = process.env.PORT || 8080;

// Setup Express to handle data parsing

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(path.join(__dirname, "public")));

// Route handling for html

app.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "/public", "notes.html"));
});

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "/public", "index.html"));
});



// Listening to port and console logging confirmation of port being listened to

app.listen(PORT, () => console.log (`Server started on port ${PORT}`));