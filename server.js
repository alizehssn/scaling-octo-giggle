//Import Dependencies
const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

//Port Variable
const PORT = process.env.PORT || 3000;

//Variable for express function
const app = express();

//Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(
    process.env.MONGODB_URI || 'mongodb://localhost/workout', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
    }
);
// routes
app.use(require("./routes/apiRoutes.js"));

//Turn on Server
app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
});