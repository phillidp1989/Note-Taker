const express = require("express");
const path = require('path');
const fs = require("fs");

// Variable to hold instance of express object

const app = express();

// Variable to hold local port or port of deployed site

const PORT = process.env.PORT || 8080;

// Listening to port and console logging confirmation of port being listened to

app.listen(PORT, () => console.log (`Server started on port ${PORT}`));