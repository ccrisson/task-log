const express = require('express');
const bodyParser = require('body-parser');

const app = express();

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
  console.log(`ready to add ${JSON.stringify(req.body)} to db`);
});

module.exports = app;
