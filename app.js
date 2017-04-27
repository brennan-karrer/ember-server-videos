var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var path = require('path');

var api = require('./routes/api');

var port = 3000;

var app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/api', api);

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

app.listen(port, function() {
  console.log('Server runing on localhost: ' + port);
});
