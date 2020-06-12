const express = require("express");
const app = express();

// Variable to hold local port or port of deployed site

const PORT = process.env.PORT || 3000;

// Setup Express to handle data parsing

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require("./routes/api-routes") (app);
require("./routes/html-routes") (app);

// Listening to port and console logging confirmation of port being listened to

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

