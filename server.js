// servernpm i express.js

const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const path = require('path');

const PORT = process.env.PORT || 3001;

const app = express();

var corsOptions = {
    origin: "http://localhost:3001"
  };
  
app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// Have Node serve the files for our built React app
app.use(express.static(path.resolve(__dirname, '../Shankaragouda_G_UI_Developer_Profile/build')));

app.get("/", (req, res) => {
    res.json({ message: `Server listening on ${PORT}` });
  });

app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});

// All other GET requests not handled before will return our React app
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../Shankaragouda_G_UI_Developer_Profile/build', 'index.html'));
  });

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});