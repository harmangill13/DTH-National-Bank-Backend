require("dotenv").config();
const express = require('express');
const mongoose = require('mongoose');


const app = express();
const { DATABASE_URL, PORT} = process.env;

// MIDDLEWARE
const cors = require('cors')
const morgan = require('morgan')


// CONTROLLERS

const userController = require('./controllers/user.js');
app.use('/user', userController);

// MODELS
app.use(express.json());
app.use(cors());
app.use(morgan('dev'));



// ROUTES
app.get("/home", (req, res) => {
  res.send("Hello World");
});

// DATABASE CONNECTION
mongoose.connect(DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Error connecting to MongoDB:', err));

mongoose.connection 
    .on('open', () => console.log('You are connected to mongoose'))
    .on('close', () => console.log('You are disconnected to mongoose'))
    .on('error', (err) => console.log('MongoDB connection error:', err));

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));