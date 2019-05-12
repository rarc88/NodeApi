var express = require('express');
var cors = require('cors')
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var app = express();

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Import of routes
var index = require('./routes/index');
var user = require('./routes/user');

// Route assignment
app.use('/', index);
app.use('/api/user', user);

module.exports = app;