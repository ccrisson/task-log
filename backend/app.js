const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const Task = require('./models/task');

const app = express();

mongoose.connect("mongodb+srv://<username>:<password>@cluster0.l9fhx.mongodb.net/test?retryWrites=true&w=majority")
  .then(() => {
    console.log("Connected to the database");
  })
  .catch(() => {
    console.log("Connection Failed");
  });

// Middleware for json, headers for cors
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
  res.setHeader('Access-Control-Allow-Headers',
                'Origin, X-Requested-With, Content-Type, Accept');
  res.setHeader('Access-Control-Allow-Methods',
                'GET, POST, PATCH, PUT, DELETE, OPTIONS');
  next();
});


app.post('/newtask', (req, res) => {
  //console.log(`ready to add ${JSON.stringify(req.body)} to db`);
  const task = new Task({
    title: req.body.title,
    date: req.body.date,
    content: req.body.content,
  });
  task.save();
  res.status(201).json({
    message: 'Task added successfully'
  });
});

module.exports = app;
