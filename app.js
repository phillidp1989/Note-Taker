const express = require("express");
const path = require('path');
const fs = require("fs");

const app = express();

app.use(express.static(path.join(__dirname, 'public')));

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => console.log (`Server started on port ${PORT}`));