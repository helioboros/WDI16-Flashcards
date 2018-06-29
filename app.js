require('dotenv').config()
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mongoose = require ('mongoose')

mongoose.connect(process.env.MONGODB_URI) // mongodb://localhost/idea-board

const connection = mongoose.connection
connection.on('connected', () => {
  console.log('Mongoose Connected Successfully')
})

connection.on('error', (err) => {
  console.log('Mongoose default connection error: ' + err)
})

var subjectsRouter = require('./routes/subjects');
var flashcardsRouter = require('./routes/flashcards');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/api/subjects', subjectsRouter)
app.use('/api/subjects/:subjectId/', flashcardsRouter)

app.use(express.static(__dirname + '/client/build/'))

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/client/build/index.html')
})


module.exports = app;
