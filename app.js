var express = require('express');

var app = express();

app.get('/', function (req, res) {
  res.send('Heippa maailma!!!');
});

var server = app.listen((process.env.PORT || '3000').replace('unix:',''));
