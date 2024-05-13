// Import Dependencies
// get .env variables 
require("dotenv").config()
// get PORT from .env , give a default value of 3000 
// if the PORT does not exist 
const { DATABASE_URL, PORT = 3000} = process.env
// import express 
const express = require('express')
// create application object 
const app = express()
// import mongoose 
const mongoose = require('mongoose')
// import middleware 
const cors = require('cors')
const morgan = require('morgan')

// Import JSON files
// const projects = require("./projects.json");
// const about = require("./about.json");

// set up middleware
// app.use(cors());


// CONTROLLERS
// const userController = require('./controllers/user.js')
// app.use('/user', userController)
// const accountController = require('./controllers/account.js')
// app.use('/account', accountController)

//home route for testing our app
app.get("/home", (req, res) => {
  res.send("Hello World");
});

// route for retrieving projects
app.get("/user", (req, res) => {
  // send projects via JSON
  res.send('hi')
});

// route for retrieving about info
// app.get("/about", (req, res) => {
//   // send projects via JSON
//   res.json(about);
// });



// CONNECT TO MONGO
// mongoose.connect(mongoURI)
// const db = mongoose.connection
// db.on('error', (err) => console.log(err.message + ' error with mongo connection'))
// db.on('connected', () => console.log('mongo is connected'))
// db.on('disconnected', () => console.log('mongo disconnected'))

// turn on the server listener
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
