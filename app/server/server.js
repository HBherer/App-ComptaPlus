// Importing required modules
const cors = require('cors');
const express = require('express');
const mongoose = require("mongoose");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const app = express();

//configure database and mongoose
mongoose.connect(
    "mongodb://localhost:27017/testdbapp", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}
);
const db = mongoose.connection;
db.on("error", console.error.bind(console, "erreur de connection:"));
//registering cors
app.use(cors());
//configure body parser
app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// parse env variables
require('dotenv').config();

// Configuring port
const port = process.env.PORT || 9000;

// Configure middlewares
app.use(cors());
app.use(express.json());

app.set('view engine', 'html');

// Static folder
app.use(express.static(__dirname + '/views/'));

// Defining route middleware
app.use('/api', require('./routes/api'));

// Listening to port
app.listen(port);
console.log(`Listening On http://localhost:${port}/api`);

module.exports = app;
